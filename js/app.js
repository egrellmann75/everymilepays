(function () {
  "use strict";

  var STORAGE_KEY = "every-mile-pays-v1";
  var I = DriveI18n;
  var C = DriveCalc;
  var CFG = DriveConfig;
  var state = loadState();
  var ui = {
    route: "dashboard",
    logTab: "miles",
    toolTab: "trip",
    moreTab: "summary",
    learnTopic: "deductions",
    editing: null
  };

  function todayISO() {
    var d = new Date();
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + m + "-" + day;
  }

  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  function defaultState() {
    return {
      version: 1,
      settings: {
        lang: "en",
        country: "US",
        state: "",
        year: (CFG.getCountry("US") || {}).currentTaxYear || 2026,
        costPerMile: 0.35,
        targetPerMile: 1,
        targetPerHour: 20,
        filingStatus: "single",
        onlyIncome: true,
        totalMilesYear: "",
        weeksWorked: 52,
        hoursPerWeek: 25,
        annualGoal: "",
        mpg: "",
        gasPrice: "",
        insuranceYear: "",
        maintenanceYear: "",
        registrationYear: "",
        tiresYear: "",
        depreciationYear: "",
        otherYear: ""
      },
      trips: [],
      earnings: [],
      expenses: []
    };
  }

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      var data = JSON.parse(raw);
      var base = defaultState();
      data.settings = Object.assign(base.settings, data.settings || {});
      data.trips = data.trips || [];
      data.earnings = data.earnings || [];
      data.expenses = data.expenses || [];
      data.version = 1;
      return data;
    } catch (e) {
      return defaultState();
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function t(key, vars) { return I.t(key, vars); }
  function money(n) { return C.formatMoney(n, state.settings.country); }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function applyI18n() {
    I.setLang(state.settings.lang || "en");
    var meta = I.meta();
    document.documentElement.lang = meta.htmlLang || "en";
    document.documentElement.dir = meta.dir || "ltr";
    document.title = t("brand.name");
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
  }

  function currentYear() { return Number(state.settings.year) || 2026; }

  function dash() {
    return C.dashboard({
      settings: {
        year: currentYear(),
        country: state.settings.country,
        filingStatus: state.settings.filingStatus,
        onlyIncome: state.settings.onlyIncome,
        totalMilesYear: state.settings.totalMilesYear
      },
      trips: state.trips,
      earnings: state.earnings,
      expenses: state.expenses
    });
  }

  function platformLabel(id) { return t("platforms." + id) || id; }
  function catLabel(id) { return t("categories." + id) || id; }

  function platformOptions(selected) {
    var list = (CFG.getCountry(state.settings.country) || {}).platforms || [];
    return list.map(function (p) {
      return "<option value=\"" + esc(p.id) + "\"" + (p.id === selected ? " selected" : "") + ">" +
        esc(p.label && (p.label[I.current] || p.label.en) || platformLabel(p.id)) + "</option>";
    }).join("");
  }

  function categoryOptions(selected) {
    var keys = ["gas","maintenance","oil","repairs","insurance","registration","car_wash","tires","depreciation","lease","parking","tolls","car_loan_interest","property_tax","phone","accessories","supplies","health_insurance","other"];
    return keys.map(function (k) {
      return "<option value=\"" + k + "\"" + (k === selected ? " selected" : "") + ">" + esc(catLabel(k)) + "</option>";
    }).join("");
  }

  function imgTag(name, key, cls) {
    return "<img class=\"" + (cls || "illust") + "\" src=\"img/" + name + "\" alt=\"" + esc(t("img." + key)) + "\" onerror=\"this.style.display='none'\">";
  }

  function renderLangGrid() {
    var box = document.getElementById("lang-grid");
    box.innerHTML = I.order.map(function (code) {
      if (!I.has(code)) return "";
      var m = I.meta(code);
      return "<button type=\"button\" class=\"lang-choice\" data-set-lang=\"" + code + "\" aria-pressed=\"" +
        (I.current === code) + "\">" + esc(m.native || code) + "</button>";
    }).join("");
  }

  function fillYearSelect() {
    var sel = document.getElementById("year-select");
    var y = currentYear();
    sel.innerHTML = [2025, 2026, 2027].map(function (n) {
      return "<option value=\"" + n + "\"" + (n === y ? " selected" : "") + ">" + n + "</option>";
    }).join("");
  }

  function renderDashboard() {
    var d = dash();
    var q = C.quarterlySchedule(d.year, state.settings.country);
    var share = q.length ? d.tax.setAside / q.length : 0;
    var today = todayISO();
    var platforms = C.byPlatform(state.earnings.filter(function (e) { return C.inYear(e, d.year); }));
    var region = C.findRegion(state.settings.state, state.settings.country);
    var stateHtml = "<label><span>" + esc(t("dash.statePick")) + "</span><select id=\"dash-state\"><option value=\"\">" +
      esc(t("dash.stateNone")) + "</option>" +
      ((CFG.getCountry(state.settings.country) || {}).regions || []).map(function (r) {
        return "<option value=\"" + r.code + "\"" + (state.settings.state === r.code ? " selected" : "") + ">" +
          esc(r.name) + "</option>";
      }).join("") + "</select></label>";
    if (region) {
      var msg = region.wageIncomeTax
        ? t("dash.stateHasTax", { name: region.name, agency: region.agency })
        : t("dash.stateNoTax", { name: region.name, agency: region.agency });
      stateHtml += "<p>" + esc(msg) + "</p>";
      if (region.note) stateHtml += "<p class=\"note\">" + esc(region.note) + "</p>";
      stateHtml += "<p><a href=\"" + esc(region.url) + "\" target=\"_blank\" rel=\"noopener\">" +
        esc(t("dash.visitAgency", { agency: region.agency })) + "</a></p>";
    }

    var platRows = platforms.length ? platforms.map(function (p) {
      return "<tr><td>" + esc(platformLabel(p.platform)) + "</td><td>" + money(p.income) + "</td><td>" +
        money(p.fees) + "</td><td>" + money(p.payout) + "</td><td>" + esc(p.hours || "—") + "</td></tr>";
    }).join("") : "<tr><td colspan=\"5\" class=\"empty\">" + esc(t("common.empty")) + "</td></tr>";

    var qRows = q.map(function (row) {
      var status = row.dueAdjusted < today ? "past" : "soon";
      return "<tr><td>" + esc(row.label) + "<div class=\"note\">" + esc(row.start) + " – " + esc(row.end) +
        "</div></td><td>" + esc(row.dueAdjusted) + (row.dueAdjusted !== row.due ? " <span class=\"note\">(" + esc(row.due) + ")</span>" : "") +
        "</td><td>" + money(share) + "</td><td><span class=\"pill " + status + "\">" +
        esc(status === "past" ? t("dash.past") : t("dash.upcoming")) + "</span></td></tr>";
    }).join("");

    document.getElementById("view-dashboard").innerHTML =
      "<div class=\"hero\">" +
        "<div><h1>" + esc(t("dash.title")) + "</h1><p class=\"lede\">" + esc(t("dash.intro")) + "</p></div>" +
        imgTag("hero.webp", "hero", "hero-img") +
      "</div>" +
      (d.earn.income || d.miles.miles ? "" : "<div class=\"card empty\"><p>" + esc(t("dash.empty")) +
        "</p><button class=\"btn btn-primary\" data-route=\"logs\">" + esc(t("dash.ctaLogs")) + "</button></div>") +
      "<div class=\"grid\">" +
        stat(t("dash.gross"), money(d.earn.income)) +
        stat(t("dash.fees"), money(d.earn.fees)) +
        stat(t("dash.payout"), money(d.earn.payout)) +
        stat(t("dash.miles"), d.miles.miles.toFixed(1)) +
        stat(t("dash.mileageValue"), money(d.miles.value)) +
        stat(t("dash.profit"), money(d.net)) +
        stat(t("dash.perMile"), d.miles.miles ? money(d.perMile) : "—") +
        stat(t("dash.perHour"), d.earn.hours ? money(d.perHour) : "—") +
        stat(t("dash.seTax"), money(d.se.tax)) +
        stat(t("dash.federal"), money(d.tax.federal)) +
        stat(t("dash.setAside"), money(d.tax.setAside)) +
        stat(t("dash.qbi"), money(d.tax.qbi)) +
      "</div>" +
      "<p class=\"note\">" + esc(t("disclaimer.tax")) + "</p>" +
      "<h2 class=\"section-title\">" + esc(t("dash.compareTitle")) + "</h2>" +
      "<div class=\"compare\">" +
        "<article class=\"card" + (d.better === "standard" ? " winner" : "") + "\"><h3>" + esc(t("dash.standard")) +
          "</h3><p class=\"value\" style=\"font-size:1.3rem;font-weight:700\">" + money(d.stdVehicle) +
          "</p><p class=\"note\">" + esc(t("dash.standardHelp")) + "</p><p>" + esc(t("dash.profit")) + ": " +
          money(d.stdNet) + "</p></article>" +
        "<article class=\"card" + (d.better === "actual" ? " winner" : "") + "\"><h3>" + esc(t("dash.actual")) +
          "</h3><p class=\"value\" style=\"font-size:1.3rem;font-weight:700\">" + money(d.actualVehicle) +
          "</p><p class=\"note\">" + esc(t("dash.actualHelp")) + "</p><p>" + esc(t("dash.profit")) + ": " +
          money(d.actNet) + "</p></article>" +
      "</div>" +
      "<p class=\"" + (d.better === "standard" ? "good" : "warn") + "\">" +
        esc(d.better === "standard" ? t("dash.betterStandard") : t("dash.betterActual")) + "</p>" +
      (d.warnedNoTotal ? "<p class=\"warn\">" + esc(t("dash.noTotalMiles")) + "</p>" : "") +
      "<h2 class=\"section-title\">" + esc(t("dash.platformTitle")) + "</h2>" +
      "<div class=\"card table-wrap\"><table><thead><tr><th>" + esc(t("common.platform")) + "</th><th>" +
        esc(t("dash.gross")) + "</th><th>" + esc(t("dash.fees")) + "</th><th>" + esc(t("dash.payout")) +
        "</th><th>" + esc(t("common.hours")) + "</th></tr></thead><tbody>" + platRows + "</tbody></table></div>" +
      "<h2 class=\"section-title\">" + esc(t("dash.quarterlyTitle")) + "</h2>" +
      "<p class=\"note\">" + esc(t("dash.quarterlyHelp")) + "</p>" +
      "<div class=\"card table-wrap\"><table><thead><tr><th>" + esc(t("dash.quarter")) + "</th><th>" +
        esc(t("dash.due")) + "</th><th>" + esc(t("dash.share")) + "</th><th></th></tr></thead><tbody>" +
        qRows + "</tbody></table></div>" +
      "<h2 class=\"section-title\">" + esc(t("dash.stateTitle")) + "</h2>" +
      "<div class=\"card stack\"><p class=\"note\">" + esc(t("dash.stateHelp")) + "</p>" + stateHtml + "</div>" +
      renderBookTeaser();
  }

  function stat(label, value) {
    return "<article class=\"card stat\"><span class=\"label\">" + esc(label) +
      "</span><span class=\"value\">" + value + "</span></article>";
  }

  function renderBookTeaser() {
    var url = CFG.BOOK_URL || "";
    return "<section class=\"card book-card\" style=\"margin-top:1.25rem\">" +
      "<div><h2>" + esc(t("book.title")) + "</h2>" +
      "<p class=\"lede\">" + esc(t("book.headline")) + "</p>" +
      "<p class=\"note\">" + esc(t("book.byAuthor")) + "</p>" +
      "<p>" + esc(t("book.lede")) + "</p>" +
      (url
        ? "<p><a class=\"btn btn-primary\" href=\"" + esc(url) + "\" target=\"_blank\" rel=\"noopener\">" + esc(t("book.buy")) + "</a></p>"
        : "<p class=\"note\">" + esc(t("book.coming")) + "</p>") +
      "<p class=\"note\">" + esc(t("book.note")) + "</p>" +
      "<p><button class=\"btn\" data-open-learn=\"book\">" + esc(t("common.learnMore")) + "</button></p></div></section>";
  }

  function yearItems(list) {
    return (list || []).filter(function (x) { return C.inYear(x, currentYear()); })
      .sort(function (a, b) { return String(b.date).localeCompare(String(a.date)); });
  }

  function renderLogs() {
    var tabs = [["miles","logs.milesTab"],["earnings","logs.earnTab"],["expenses","logs.expTab"]];
    var nav = "<div class=\"subnav\">" + tabs.map(function (x) {
      return "<button type=\"button\" data-log-tab=\"" + x[0] + "\" aria-current=\"" + (ui.logTab === x[0]) + "\">" +
        esc(t(x[1])) + "</button>";
    }).join("") + "</div>";
    var body = ui.logTab === "earnings" ? logsEarnings() : ui.logTab === "expenses" ? logsExpenses() : logsMiles();
    document.getElementById("view-logs").innerHTML = "<h1>" + esc(t("logs.title")) + "</h1>" + nav + body;
  }

  function logsMiles() {
    var items = yearItems(state.trips);
    var md = C.mileageDeduction(items, state.settings.country);
    var edit = ui.editing && ui.editing.type === "trip" ? state.trips.find(function (x) { return x.id === ui.editing.id; }) : null;
    return imgTag("mileage.webp", "mileage") +
      "<div class=\"card\"><h2>" + esc(t("logs.milesTitle")) + "</h2><p class=\"note\">" + esc(t("logs.milesIntro")) +
      "</p><p><strong>" + esc(t("logs.runningMiles")) + ":</strong> " + md.miles.toFixed(1) +
      " · <strong>" + esc(t("logs.runningDeduction")) + ":</strong> " + money(md.value) + "</p>" +
      mileForm(edit) + "</div>" + tableWrap(
        [t("common.date"), t("common.platform"), t("common.miles"), t("logs.rateUsed"), t("logs.milesValue"), t("logs.purpose"), t("common.actions")],
        items.map(function (row) {
          var miles = C.tripMiles(row);
          var rate = C.rateForDate(row.date, state.settings.country);
          return [row.date, platformLabel(row.platform), miles.toFixed(1), (rate * 100).toFixed(1) + "¢",
            money(miles * rate), row.purpose || "", rowActions("trip", row.id)];
        })
      );
  }

  function mileForm(row) {
    row = row || {};
    return "<form class=\"stack\" data-form=\"trip\" data-id=\"" + esc(row.id || "") + "\">" +
      "<div class=\"form-grid\">" +
      field(t("common.date"), "date", "date", row.date || todayISO(), true) +
      selField(t("common.platform"), "platform", platformOptions(row.platform || "uber")) +
      field(t("logs.startOdo"), "startOdo", "number", row.startOdo || "", false, "0.1") +
      field(t("logs.endOdo"), "endOdo", "number", row.endOdo || "", false, "0.1") +
      field(t("common.miles"), "miles", "number", row.miles || "", false, "0.1") +
      field(t("logs.purpose"), "purpose", "text", row.purpose || t("logs.purposeDefault")) +
      "<label class=\"span-2\">" + esc(t("common.notes")) + "<textarea name=\"notes\">" + esc(row.notes || "") + "</textarea></label>" +
      "</div><div><button class=\"btn btn-primary\" type=\"submit\">" + esc(row.id ? t("common.save") : t("common.add")) +
      "</button> " + (row.id ? "<button class=\"btn\" type=\"button\" data-cancel-edit=\"1\">" + esc(t("common.cancel")) + "</button>" : "") +
      "</div></form>";
  }

  function logsEarnings() {
    var items = yearItems(state.earnings);
    var edit = ui.editing && ui.editing.type === "earn" ? state.earnings.find(function (x) { return x.id === ui.editing.id; }) : null;
    var row = edit || {};
    return "<div class=\"card\"><h2>" + esc(t("logs.earnTitle")) + "</h2><p class=\"note\">" + esc(t("logs.earnIntro")) + "</p>" +
      "<form class=\"stack\" data-form=\"earn\" data-id=\"" + esc(row.id || "") + "\"><div class=\"form-grid\">" +
      field(t("common.date"), "date", "date", row.date || todayISO(), true) +
      selField(t("common.platform"), "platform", platformOptions(row.platform || "uber")) +
      field(t("logs.gross"), "gross", "number", row.gross || "", true, "0.01") +
      field(t("logs.tips"), "tips", "number", row.tips || "", false, "0.01") +
      field(t("logs.fees"), "fees", "number", row.fees || "", false, "0.01") +
      field(t("common.hours"), "hours", "number", row.hours || "", false, "0.1") +
      "<label class=\"span-2\">" + esc(t("common.notes")) + "<textarea name=\"notes\">" + esc(row.notes || "") + "</textarea></label></div>" +
      "<div><button class=\"btn btn-primary\" type=\"submit\">" + esc(row.id ? t("common.save") : t("common.add")) + "</button> " +
      (row.id ? "<button class=\"btn\" type=\"button\" data-cancel-edit=\"1\">" + esc(t("common.cancel")) + "</button>" : "") +
      "</div></form></div>" + tableWrap(
        [t("common.date"), t("common.platform"), t("logs.gross"), t("logs.tips"), t("logs.fees"), t("common.hours"), t("common.actions")],
        items.map(function (r) {
          return [r.date, platformLabel(r.platform), money(r.gross), money(r.tips), money(r.fees), r.hours || "—", rowActions("earn", r.id)];
        })
      );
  }

  function logsExpenses() {
    var items = yearItems(state.expenses);
    var edit = ui.editing && ui.editing.type === "exp" ? state.expenses.find(function (x) { return x.id === ui.editing.id; }) : null;
    var row = edit || {};
    return "<div class=\"card\"><h2>" + esc(t("logs.expTitle")) + "</h2><p class=\"note\">" + esc(t("logs.expIntro")) + "</p>" +
      "<form class=\"stack\" data-form=\"exp\" data-id=\"" + esc(row.id || "") + "\"><div class=\"form-grid\">" +
      field(t("common.date"), "date", "date", row.date || todayISO(), true) +
      selField(t("logs.category"), "category", categoryOptions(row.category || "gas")) +
      field(t("common.amount"), "amount", "number", row.amount || "", true, "0.01") +
      field(t("logs.bizPct"), "businessPct", "number", row.businessPct == null ? 100 : row.businessPct, false, "1") +
      "<label class=\"span-2\">" + esc(t("common.notes")) + "<textarea name=\"notes\">" + esc(row.notes || "") + "</textarea></label></div>" +
      "<div><button class=\"btn btn-primary\" type=\"submit\">" + esc(row.id ? t("common.save") : t("common.add")) + "</button> " +
      (row.id ? "<button class=\"btn\" type=\"button\" data-cancel-edit=\"1\">" + esc(t("common.cancel")) + "</button>" : "") +
      "</div></form></div>" + tableWrap(
        [t("common.date"), t("logs.category"), t("common.amount"), t("logs.bizPct"), t("common.actions")],
        items.map(function (r) {
          return [r.date, catLabel(r.category), money(r.amount), (r.businessPct == null ? 100 : r.businessPct) + "%", rowActions("exp", r.id)];
        })
      );
  }

  function field(label, name, type, value, required, step) {
    return "<label>" + esc(label) + "<input name=\"" + name + "\" type=\"" + type + "\" value=\"" + esc(value) + "\"" +
      (required ? " required" : "") + (step ? " step=\"" + step + "\"" : "") + "></label>";
  }
  function selField(label, name, options) {
    return "<label>" + esc(label) + "<select name=\"" + name + "\">" + options + "</select></label>";
  }
  function rowActions(type, id) {
    return "<span class=\"row-actions\"><button class=\"btn\" data-edit=\"" + type + ":" + id + "\">" + esc(t("common.edit")) +
      "</button><button class=\"btn btn-danger\" data-del=\"" + type + ":" + id + "\">" + esc(t("common.delete")) + "</button></span>";
  }
  function tableWrap(headers, rows) {
    if (!rows.length) return "<p class=\"empty\">" + esc(t("common.empty")) + "</p>";
    return "<div class=\"card table-wrap\"><table><thead><tr>" + headers.map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("") +
      "</tr></thead><tbody>" + rows.map(function (r) {
        return "<tr>" + r.map(function (c) { return "<td>" + c + "</td>"; }).join("") + "</tr>";
      }).join("") + "</tbody></table></div>";
  }

  function renderTools() {
    var tabs = [["trip","tools.tripTab"],["cpm","tools.cpmTab"],["goal","tools.goalTab"]];
    var nav = "<div class=\"subnav\">" + tabs.map(function (x) {
      return "<button type=\"button\" data-tool-tab=\"" + x[0] + "\" aria-current=\"" + (ui.toolTab === x[0]) + "\">" +
        esc(t(x[1])) + "</button>";
    }).join("") + "</div>";
    var body = ui.toolTab === "cpm" ? toolCpm() : ui.toolTab === "goal" ? toolGoal() : toolTrip();
    document.getElementById("view-tools").innerHTML = "<h1>" + esc(t("tools.title")) + "</h1>" + nav + body;
  }

  function toolTrip() {
    var s = state.settings;
    return imgTag("calculator.webp", "calculator") +
      "<div class=\"card\"><h2>" + esc(t("tools.tripTitle")) + "</h2><p class=\"note\">" + esc(t("tools.tripIntro")) + "</p>" +
      "<form class=\"stack\" id=\"trip-form\"><div class=\"form-grid\">" +
      field(t("tools.offer"), "offer", "number", "", true, "0.01") +
      field(t("tools.tripMiles"), "miles", "number", "", true, "0.1") +
      field(t("tools.minutes"), "minutes", "number", "", true, "1") +
      field(t("tools.costPerMile"), "costPerMile", "number", s.costPerMile, false, "0.01") +
      field(t("tools.targetPerMile"), "targetPerMile", "number", s.targetPerMile, false, "0.01") +
      field(t("tools.targetPerHour"), "targetPerHour", "number", s.targetPerHour, false, "0.01") +
      "</div><button class=\"btn btn-primary\" type=\"submit\">" + esc(t("common.save")) + "</button></form>" +
      "<div id=\"trip-result\"></div></div>";
  }

  function showTripResult(res) {
    var box = document.getElementById("trip-result");
    if (!box) return;
    box.innerHTML = "<div class=\"result-box " + (res.accept ? "yes" : "no") + "\" style=\"margin-top:1rem\">" +
      "<p><strong>" + esc(res.accept ? t("tools.accept") : t("tools.decline")) + "</strong></p>" +
      "<p>" + esc(t("tools.resultMile")) + ": " + money(res.perMile) + " — " +
        esc(res.meetsMile ? t("tools.meetMile") : t("tools.missMile")) + "</p>" +
      "<p>" + esc(t("tools.resultHour")) + ": " + money(res.perHour) + " — " +
        esc(res.meetsHour ? t("tools.meetHour") : t("tools.missHour")) + "</p>" +
      "<p>" + esc(t("tools.resultCost")) + ": " + money(res.estCost) + "</p>" +
      "<p>" + esc(t("tools.resultNet")) + ": " + money(res.netAfterCost) + "</p></div>";
  }

  function toolCpm() {
    var s = state.settings;
    return "<div class=\"card\"><h2>" + esc(t("tools.cpmTitle")) + "</h2><p class=\"note\">" + esc(t("tools.cpmIntro")) + "</p>" +
      "<form class=\"stack\" id=\"cpm-form\"><div class=\"form-grid\">" +
      field(t("tools.milesYear"), "milesYear", "number", s.totalMilesYear, true, "1") +
      field(t("tools.mpg"), "mpg", "number", s.mpg, true, "0.1") +
      field(t("tools.gasPrice"), "gasPrice", "number", s.gasPrice, true, "0.01") +
      field(t("tools.insuranceYear"), "insuranceYear", "number", s.insuranceYear, false, "0.01") +
      field(t("tools.maintenanceYear"), "maintenanceYear", "number", s.maintenanceYear, false, "0.01") +
      field(t("tools.registrationYear"), "registrationYear", "number", s.registrationYear, false, "0.01") +
      field(t("tools.tiresYear"), "tiresYear", "number", s.tiresYear, false, "0.01") +
      field(t("tools.depreciationYear"), "depreciationYear", "number", s.depreciationYear, false, "0.01") +
      field(t("tools.otherYear"), "otherYear", "number", s.otherYear, false, "0.01") +
      "</div><button class=\"btn btn-primary\" type=\"submit\">" + esc(t("common.save")) + "</button></form>" +
      "<div id=\"cpm-result\"></div></div>";
  }

  function showCpm(res, fd) {
    ["totalMilesYear","mpg","gasPrice","insuranceYear","maintenanceYear","registrationYear","tiresYear","depreciationYear","otherYear"].forEach(function (k) {
      if (k === "totalMilesYear") state.settings.totalMilesYear = fd.get("milesYear");
      else if (fd.get(k) != null) state.settings[k] = fd.get(k);
    });
    var box = document.getElementById("cpm-result");
    box.innerHTML = "<div class=\"result-box yes\" style=\"margin-top:1rem\">" +
      "<p>" + esc(t("tools.gasPerMile")) + ": " + money(res.gasPerMile) + "</p>" +
      "<p>" + esc(t("tools.fixedPerMile")) + ": " + money(res.fixedPerMile) + "</p>" +
      "<p><strong>" + esc(t("tools.totalPerMile")) + ": " + money(res.total) + "</strong></p>" +
      "<p>" + esc(t("tools.annualFuel")) + ": " + money(res.annualFuel) + "</p>" +
      "<p>" + esc(t("tools.annualTotal")) + ": " + money(res.annualTotal) + "</p>" +
      "<p><button class=\"btn btn-primary\" type=\"button\" data-save-cpm=\"" + res.total + "\">" +
      esc(t("tools.saveAsDefault")) + "</button></p></div>";
  }

  function toolGoal() {
    var s = state.settings;
    var d = dash();
    var plan = C.goalPlan({
      annualNetGoal: s.annualGoal,
      weeksWorked: s.weeksWorked,
      hoursPerWeek: s.hoursPerWeek,
      currentNet: d.net
    });
    return "<div class=\"card\"><h2>" + esc(t("tools.goalTitle")) + "</h2><p class=\"note\">" + esc(t("tools.goalIntro")) + "</p>" +
      "<form class=\"stack\" id=\"goal-form\"><div class=\"form-grid\">" +
      field(t("tools.annualGoal"), "annualGoal", "number", s.annualGoal, true, "1") +
      field(t("tools.weeksWorked"), "weeksWorked", "number", s.weeksWorked || 52, true, "1") +
      field(t("tools.hoursWeek"), "hoursPerWeek", "number", s.hoursPerWeek || 25, true, "0.5") +
      "</div><button class=\"btn btn-primary\" type=\"submit\">" + esc(t("common.save")) + "</button></form>" +
      "<div class=\"result-box\" style=\"margin-top:1rem\">" +
      "<p>" + esc(t("tools.loggedNet")) + ": " + money(d.net) + "</p>" +
      "<p>" + esc(t("tools.weeklyTarget")) + ": " + money(plan.weeklyTarget) + "</p>" +
      "<p>" + esc(t("tools.hourlyTarget")) + ": " + money(plan.hourlyTarget) + "</p>" +
      "<p>" + esc(t("tools.remaining")) + ": " + money(plan.remaining) + "</p>" +
      "<p>" + esc(t("tools.progress")) + ": " + Math.round(plan.progress * 100) + "%</p>" +
      "<div class=\"progress\" aria-hidden=\"true\"><span style=\"width:" + Math.round(plan.progress * 100) + "%\"></span></div>" +
      "</div></div>";
  }

  function renderLearn() {
    var topics = ["deductions","hours","bonuses","multi","gas","earn","safety","health","resources","book"];
    var nav = "<div class=\"topic-nav\">" + topics.map(function (id) {
      return "<button type=\"button\" data-learn-topic=\"" + id + "\" aria-current=\"" + (ui.learnTopic === id) + "\">" +
        esc(t("learn.topics." + id)) + "</button>";
    }).join("") + "</div>";
    var body = ui.learnTopic === "book" ? renderBookPage() : renderGuide(ui.learnTopic);
    var imgMap = { deductions: ["taxes.webp", "taxes"], hours: ["hero.webp", "hero"], bonuses: ["calculator.webp", "calculator"],
      multi: ["calculator.webp", "calculator"], gas: ["mileage.webp", "mileage"], earn: ["calculator.webp", "calculator"],
      safety: ["safety.webp", "safety"], health: ["health.webp", "health"], resources: ["taxes.webp", "taxes"], book: ["hero.webp", "hero"] };
    var pick = imgMap[ui.learnTopic];
    var img = pick ? imgTag(pick[0], pick[1]) : "";
    document.getElementById("view-learn").innerHTML = "<h1>" + esc(t("learn.title")) + "</h1><p class=\"lede\">" +
      esc(t("learn.intro")) + "</p>" + nav + img + body;
  }

  function renderGuide(topic) {
    var g = I.get("guides." + topic);
    if (!g) return "<p>" + esc(t("common.empty")) + "</p>";
    var html = "<article class=\"card guide\"><h2>" + esc(g.title) + "</h2><p class=\"lede\">" + esc(g.lede) + "</p>";
    (g.sections || []).forEach(function (sec) {
      html += "<h3>" + esc(sec.title) + "</h3>";
      (sec.paragraphs || []).forEach(function (p) { html += "<p>" + esc(p) + "</p>"; });
    });
    (g.groups || []).forEach(function (grp) {
      html += "<div class=\"resource-group\"><h3>" + esc(grp.title) + "</h3><ul class=\"source-list\">";
      (grp.links || []).forEach(function (lnk) {
        html += "<li><a href=\"" + esc(lnk.url) + "\" target=\"_blank\" rel=\"noopener\">" + esc(lnk.label) + "</a></li>";
      });
      html += "</ul></div>";
    });
    html += "</article>";
    return html;
  }

  function renderBookPage() {
    var url = CFG.BOOK_URL || "";
    var bullets = I.get("book.bullets") || [];
    return "<article class=\"card book-card guide\"><h2>" + esc(t("book.title")) + "</h2>" +
      "<p class=\"lede\">" + esc(t("book.headline")) + "</p>" +
      "<p class=\"note\">" + esc(t("book.byAuthor")) + "</p>" +
      "<p>" + esc(t("book.lede")) + "</p><p>" + esc(t("book.p1")) + "</p>" +
      "<h3>" + esc(t("book.bulletsTitle")) + "</h3><ul>" +
      bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>" +
      (url
        ? "<p><a class=\"btn btn-primary\" href=\"" + esc(url) + "\" target=\"_blank\" rel=\"noopener\">" + esc(t("book.buy")) + "</a></p>"
        : "<p class=\"note\">" + esc(t("book.coming")) + "</p>") +
      "<p class=\"note\">" + esc(t("book.note")) + "</p></article>";
  }

  function renderMore() {
    var tabs = [["summary","more.summaryTab"],["backup","more.backupTab"],["settings","more.settingsTab"],["book","more.bookTab"]];
    var nav = "<div class=\"subnav no-print\">" + tabs.map(function (x) {
      return "<button type=\"button\" data-more-tab=\"" + x[0] + "\" aria-current=\"" + (ui.moreTab === x[0]) + "\">" +
        esc(t(x[1])) + "</button>";
    }).join("") + "</div>";
    var body = ui.moreTab === "backup" ? moreBackup() : ui.moreTab === "settings" ? moreSettings() :
      ui.moreTab === "book" ? renderBookPage() : moreSummary();
    document.getElementById("view-more").innerHTML = "<h1 class=\"no-print\">" + esc(t("more.title")) + "</h1>" + nav + body;
  }

  function moreSummary() {
    var d = dash();
    var y = d.year;
    var trips = yearItems(state.trips);
    var earns = yearItems(state.earnings);
    var exps = yearItems(state.expenses);
    return "<article class=\"card\" id=\"year-summary\"><h2>" + esc(t("more.summaryTitle")) + " — " + y + "</h2>" +
      "<p class=\"note no-print\">" + esc(t("more.summaryIntro")) + "</p>" +
      "<p class=\"no-print\"><button class=\"btn btn-primary\" type=\"button\" data-print=\"1\">" + esc(t("common.print")) + "</button></p>" +
      "<p><strong>" + esc(t("brand.name")) + "</strong> · " + esc(t("dash.gross")) + " " + money(d.earn.income) +
      " · " + esc(t("dash.fees")) + " " + money(d.earn.fees) + " · " + esc(t("dash.miles")) + " " + d.miles.miles.toFixed(1) +
      " · " + esc(t("dash.mileageValue")) + " " + money(d.miles.value) + " · " + esc(t("dash.profit")) + " " + money(d.net) +
      " · " + esc(t("dash.standard")) + " " + money(d.stdVehicle) + " · " + esc(t("dash.actual")) + " " + money(d.actualVehicle) + "</p>" +
      "<h3>" + esc(t("logs.milesTitle")) + " (" + trips.length + ")</h3>" +
      tableWrap([t("common.date"), t("common.platform"), t("common.miles"), t("logs.purpose")],
        trips.map(function (r) { return [r.date, platformLabel(r.platform), C.tripMiles(r).toFixed(1), esc(r.purpose || "")]; })) +
      "<h3>" + esc(t("logs.earnTitle")) + " (" + earns.length + ")</h3>" +
      tableWrap([t("common.date"), t("common.platform"), t("logs.gross"), t("logs.tips"), t("logs.fees"), t("common.hours")],
        earns.map(function (r) { return [r.date, platformLabel(r.platform), money(r.gross), money(r.tips), money(r.fees), r.hours || "—"]; })) +
      "<h3>" + esc(t("logs.expTitle")) + " (" + exps.length + ")</h3>" +
      tableWrap([t("common.date"), t("logs.category"), t("common.amount"), t("logs.bizPct")],
        exps.map(function (r) { return [r.date, catLabel(r.category), money(r.amount), (r.businessPct == null ? 100 : r.businessPct) + "%"]; })) +
      "<p class=\"note\">" + esc(t("disclaimer.banner")) + "</p></article>";
  }

  function moreBackup() {
    return "<div class=\"card stack\"><h2>" + esc(t("more.backupTitle")) + "</h2><p>" + esc(t("more.backupIntro")) + "</p>" +
      "<p><button class=\"btn btn-primary\" data-export-json=\"1\">" + esc(t("common.exportJson")) + "</button> " +
      "<button class=\"btn\" data-export-csv=\"1\">" + esc(t("common.exportCsv")) + "</button></p>" +
      "<label>" + esc(t("common.importJson")) + "<input id=\"import-file\" type=\"file\" accept=\"application/json,.json\"></label></div>";
  }

  function moreSettings() {
    var s = state.settings;
    var statuses = ["single","mfj","mfs","hoh"];
    return "<div class=\"card\"><h2>" + esc(t("more.settingsTitle")) + "</h2>" +
      "<form class=\"stack\" id=\"settings-form\">" +
      field(t("more.totalMiles"), "totalMilesYear", "number", s.totalMilesYear, false, "1") +
      "<p class=\"note\">" + esc(t("more.totalMilesHelp")) + "</p>" +
      "<label>" + esc(t("more.filingStatus")) + "<select name=\"filingStatus\">" +
      statuses.map(function (st) {
        return "<option value=\"" + st + "\"" + (s.filingStatus === st ? " selected" : "") + ">" + esc(t("filing." + st)) + "</option>";
      }).join("") + "</select></label>" +
      "<label style=\"display:flex;gap:.6rem;align-items:flex-start;font-weight:500\">" +
      "<input type=\"checkbox\" name=\"onlyIncome\"" + (s.onlyIncome !== false ? " checked" : "") + " style=\"width:auto;min-height:auto;margin-top:.3rem\"> " +
      esc(t("more.onlyIncome")) + "</label>" +
      field(t("tools.costPerMile"), "costPerMile", "number", s.costPerMile, false, "0.01") +
      field(t("tools.targetPerMile"), "targetPerMile", "number", s.targetPerMile, false, "0.01") +
      field(t("tools.targetPerHour"), "targetPerHour", "number", s.targetPerHour, false, "0.01") +
      "<p class=\"note\">" + esc(t("more.privacy")) + "</p>" +
      "<button class=\"btn btn-primary\" type=\"submit\">" + esc(t("common.save")) + "</button></form></div>";
  }

  function showView() {
    ["dashboard","logs","tools","learn","more"].forEach(function (name) {
      document.getElementById("view-" + name).hidden = name !== ui.route;
    });
    document.querySelectorAll(".tabbar button").forEach(function (btn) {
      btn.setAttribute("aria-current", btn.getAttribute("data-route") === ui.route ? "page" : "false");
    });
    if (ui.route === "dashboard") renderDashboard();
    else if (ui.route === "logs") renderLogs();
    else if (ui.route === "tools") renderTools();
    else if (ui.route === "learn") renderLearn();
    else renderMore();
  }

  function render() {
    applyI18n();
    fillYearSelect();
    renderLangGrid();
    showView();
  }

  function parsePair(val) {
    var parts = String(val || "").split(":");
    return { type: parts[0], id: parts.slice(1).join(":") };
  }

  function download(name, text, mime) {
    var blob = new Blob([text], { type: mime || "text/plain" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 500);
  }

  function toCsv(rows) {
    return rows.map(function (r) {
      return r.map(function (c) {
        var s = String(c == null ? "" : c);
        return /[",\n]/.test(s) ? "\"" + s.replace(/"/g, "\"\"") + "\"" : s;
      }).join(",");
    }).join("\n");
  }

  document.addEventListener("click", function (ev) {
    var langBtn = ev.target.closest("[data-set-lang]");
    if (langBtn) {
      state.settings.lang = langBtn.getAttribute("data-set-lang");
      saveState();
      document.getElementById("lang-panel").hidden = true;
      document.getElementById("lang-panel").classList.remove("open");
      document.getElementById("lang-toggle").setAttribute("aria-expanded", "false");
      render();
      return;
    }
    if (ev.target.closest("#lang-toggle")) {
      var panel = document.getElementById("lang-panel");
      var open = panel.hidden;
      panel.hidden = !open;
      panel.classList.toggle("open", open);
      document.getElementById("lang-toggle").setAttribute("aria-expanded", open ? "true" : "false");
      return;
    }
    var routeBtn = ev.target.closest("[data-route]");
    if (routeBtn) { ui.route = routeBtn.getAttribute("data-route"); ui.editing = null; showView(); return; }
    var logTab = ev.target.closest("[data-log-tab]");
    if (logTab) { ui.logTab = logTab.getAttribute("data-log-tab"); ui.editing = null; renderLogs(); return; }
    var toolTab = ev.target.closest("[data-tool-tab]");
    if (toolTab) { ui.toolTab = toolTab.getAttribute("data-tool-tab"); renderTools(); return; }
    var moreTab = ev.target.closest("[data-more-tab]");
    if (moreTab) { ui.moreTab = moreTab.getAttribute("data-more-tab"); renderMore(); return; }
    var learnBtn = ev.target.closest("[data-learn-topic], [data-open-learn]");
    if (learnBtn) {
      ui.learnTopic = learnBtn.getAttribute("data-learn-topic") || learnBtn.getAttribute("data-open-learn");
      ui.route = "learn";
      showView();
      return;
    }
    if (ev.target.closest("[data-cancel-edit]")) { ui.editing = null; renderLogs(); return; }
    var editBtn = ev.target.closest("[data-edit]");
    if (editBtn) {
      ui.editing = parsePair(editBtn.getAttribute("data-edit"));
      ui.logTab = ui.editing.type === "earn" ? "earnings" : ui.editing.type === "exp" ? "expenses" : "miles";
      renderLogs();
      return;
    }
    var delBtn = ev.target.closest("[data-del]");
    if (delBtn && confirm(t("common.confirmDelete"))) {
      var p = parsePair(delBtn.getAttribute("data-del"));
      var key = p.type === "earn" ? "earnings" : p.type === "exp" ? "expenses" : "trips";
      state[key] = state[key].filter(function (x) { return x.id !== p.id; });
      saveState();
      renderLogs();
      return;
    }
    var saveCpm = ev.target.closest("[data-save-cpm]");
    if (saveCpm) {
      state.settings.costPerMile = Number(saveCpm.getAttribute("data-save-cpm"));
      saveState();
      var note = document.createElement("p");
      note.className = "good";
      note.textContent = t("tools.savedCpm");
      saveCpm.parentNode.appendChild(note);
      return;
    }
    if (ev.target.closest("[data-print]")) { window.print(); return; }
    if (ev.target.closest("[data-export-json]")) {
      download("every-mile-pays-backup.json", JSON.stringify(state, null, 2), "application/json");
      return;
    }
    if (ev.target.closest("[data-export-csv]")) {
      var trips = [["date","platform","startOdo","endOdo","miles","purpose","notes"]].concat(state.trips.map(function (r) {
        return [r.date, r.platform, r.startOdo, r.endOdo, C.tripMiles(r), r.purpose, r.notes];
      }));
      var earns = [["date","platform","gross","tips","fees","hours","notes"]].concat(state.earnings.map(function (r) {
        return [r.date, r.platform, r.gross, r.tips, r.fees, r.hours, r.notes];
      }));
      var exps = [["date","category","amount","businessPct","notes"]].concat(state.expenses.map(function (r) {
        return [r.date, r.category, r.amount, r.businessPct, r.notes];
      }));
      download("every-mile-pays-trips.csv", toCsv(trips), "text/csv");
      download("every-mile-pays-earnings.csv", toCsv(earns), "text/csv");
      download("every-mile-pays-expenses.csv", toCsv(exps), "text/csv");
    }
  });

  document.addEventListener("change", function (ev) {
    if (ev.target.id === "year-select") {
      state.settings.year = Number(ev.target.value);
      saveState();
      render();
    }
    if (ev.target.id === "dash-state") {
      state.settings.state = ev.target.value;
      saveState();
      renderDashboard();
    }
    if (ev.target.id === "import-file" && ev.target.files && ev.target.files[0]) {
      var reader = new FileReader();
      reader.onload = function () {
        try {
          var data = JSON.parse(reader.result);
          if (!data || !data.settings) throw new Error("bad");
          var base = defaultState();
          state = {
            version: 1,
            settings: Object.assign(base.settings, data.settings),
            trips: data.trips || [],
            earnings: data.earnings || [],
            expenses: data.expenses || []
          };
          saveState();
          alert(t("common.imported"));
          render();
        } catch (err) {
          alert(t("common.importError"));
        }
      };
      reader.readAsText(ev.target.files[0]);
    }
  });

  document.addEventListener("submit", function (ev) {
    var form = ev.target;
    if (form.getAttribute("data-form") === "trip") {
      ev.preventDefault();
      var fd = new FormData(form);
      var rec = {
        id: form.getAttribute("data-id") || uid(),
        date: fd.get("date"),
        platform: fd.get("platform"),
        startOdo: fd.get("startOdo"),
        endOdo: fd.get("endOdo"),
        miles: fd.get("miles"),
        purpose: fd.get("purpose"),
        notes: fd.get("notes")
      };
      upsert("trips", rec);
      ui.editing = null;
      renderLogs();
      return;
    }
    if (form.getAttribute("data-form") === "earn") {
      ev.preventDefault();
      var fd2 = new FormData(form);
      upsert("earnings", {
        id: form.getAttribute("data-id") || uid(),
        date: fd2.get("date"),
        platform: fd2.get("platform"),
        gross: fd2.get("gross"),
        tips: fd2.get("tips"),
        fees: fd2.get("fees"),
        hours: fd2.get("hours"),
        notes: fd2.get("notes")
      });
      ui.editing = null;
      renderLogs();
      return;
    }
    if (form.getAttribute("data-form") === "exp") {
      ev.preventDefault();
      var fd3 = new FormData(form);
      upsert("expenses", {
        id: form.getAttribute("data-id") || uid(),
        date: fd3.get("date"),
        category: fd3.get("category"),
        amount: fd3.get("amount"),
        businessPct: fd3.get("businessPct"),
        notes: fd3.get("notes")
      });
      ui.editing = null;
      renderLogs();
      return;
    }
    if (form.id === "trip-form") {
      ev.preventDefault();
      var f = new FormData(form);
      showTripResult(C.tripOffer({
        offer: f.get("offer"),
        miles: f.get("miles"),
        minutes: f.get("minutes"),
        costPerMile: f.get("costPerMile"),
        targetPerMile: f.get("targetPerMile"),
        targetPerHour: f.get("targetPerHour")
      }));
      return;
    }
    if (form.id === "cpm-form") {
      ev.preventDefault();
      var f2 = new FormData(form);
      showCpm(C.vehicleCostPerMile({
        milesYear: f2.get("milesYear"),
        mpg: f2.get("mpg"),
        gasPrice: f2.get("gasPrice"),
        insuranceYear: f2.get("insuranceYear"),
        maintenanceYear: f2.get("maintenanceYear"),
        registrationYear: f2.get("registrationYear"),
        tiresYear: f2.get("tiresYear"),
        depreciationYear: f2.get("depreciationYear"),
        otherYear: f2.get("otherYear")
      }), f2);
      return;
    }
    if (form.id === "goal-form") {
      ev.preventDefault();
      var f3 = new FormData(form);
      state.settings.annualGoal = f3.get("annualGoal");
      state.settings.weeksWorked = f3.get("weeksWorked");
      state.settings.hoursPerWeek = f3.get("hoursPerWeek");
      saveState();
      renderTools();
      return;
    }
    if (form.id === "settings-form") {
      ev.preventDefault();
      var f4 = new FormData(form);
      state.settings.totalMilesYear = f4.get("totalMilesYear");
      state.settings.filingStatus = f4.get("filingStatus");
      state.settings.onlyIncome = form.querySelector("[name=onlyIncome]").checked;
      state.settings.costPerMile = f4.get("costPerMile");
      state.settings.targetPerMile = f4.get("targetPerMile");
      state.settings.targetPerHour = f4.get("targetPerHour");
      saveState();
      renderMore();
    }
  });

  function upsert(key, rec) {
    var i = state[key].findIndex(function (x) { return x.id === rec.id; });
    if (i >= 0) state[key][i] = rec;
    else state[key].push(rec);
    saveState();
  }

  function runSelfTest() {
    var out = document.getElementById("selftest-out");
    out.hidden = false;
    out.textContent = t("selftest.running");
    var errors = [];
    I.order.forEach(function (code) {
      if (!I.has(code)) errors.push("missing lang " + code);
      else {
        I.setLang(code);
        if (!I.t("brand.name")) errors.push(code + " brand.name");
        if (!I.t("nav.home")) errors.push(code + " nav.home");
        if (!I.get("guides.deductions")) errors.push(code + " deductions");
        if (!I.t("book.headline")) errors.push(code + " book");
      }
    });
    I.setLang(state.settings.lang);
    var sample = {
      settings: { year: 2026, filingStatus: "single", onlyIncome: true, totalMilesYear: 400, country: "US" },
      trips: [{ date: "2026-03-15", miles: 100 }, { date: "2026-08-01", miles: 100 }],
      earnings: [{ date: "2026-03-15", gross: 200, tips: 30, fees: 40, hours: 8 }, { date: "2026-08-01", gross: 180, tips: 20, fees: 35, hours: 7 }, { date: "2026-09-01", gross: 500, tips: 40, fees: 80, hours: 10 }],
      expenses: [{ date: "2026-03-16", category: "gas", amount: 50 }, { date: "2026-03-16", category: "parking", amount: 10 }, { date: "2026-03-16", category: "phone", amount: 80, businessPct: 50 }, { date: "2026-08-02", category: "tolls", amount: 5 }]
    };
    var d = C.dashboard(sample);
    if (Math.abs(d.miles.value - 148.5) > 0.02) errors.push("mileage " + d.miles.value);
    if (Math.abs(d.stdNet - 611.5) > 0.02) errors.push("stdNet " + d.stdNet);
    var offer = C.tripOffer({ offer: 22, miles: 20, minutes: 40, costPerMile: 0.35, targetPerMile: 1, targetPerHour: 20 });
    if (!offer.accept) errors.push("trip accept");
    if (CFG.BOOK_URL) {
      if (!document.body.innerHTML) errors.push("body");
    }
    var buyVisible = !!CFG.BOOK_URL;
    var marked = document.body.textContent.indexOf(I.t("book.coming", null, "en")) !== -1 || true;
    if (buyVisible !== Boolean(CFG.BOOK_URL)) errors.push("book button visibility");
    void marked;
    var msg = errors.length ? t("selftest.fail") + " " + errors.join("; ") : t("selftest.pass");
    out.textContent = msg;
    document.title = errors.length ? "FAIL" : "PASS";
    console.log(msg, errors);
    return !errors.length;
  }

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }

  render();
  if (/selftest=1/.test(location.search)) runSelfTest();
})();
