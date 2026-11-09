/**
 * Every Mile Pays calculation engine.
 * Country-specific tax figures come from config.js (DriveConfig).
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(typeof DriveConfig !== "undefined" ? DriveConfig : require("./config.js"));
  } else {
    root.DriveCalc = factory(root.DriveConfig);
  }
})(typeof self !== "undefined" ? self : this, function (bundle) {
  "use strict";

  if (!bundle || !bundle.countries) {
    throw new Error("DriveConfig is required. Load js/config.js before js/calc.js.");
  }

  function country(code) {
    return bundle.getCountry ? bundle.getCountry(code) : (bundle.countries[code] || bundle.countries[bundle.defaultCountry]);
  }

  function toSet(arr) {
    var o = {};
    (arr || []).forEach(function (k) { o[k] = 1; });
    return o;
  }

  function groups(code) {
    var g = country(code).expenseGroups || {};
    return {
      vehicleActual: toSet(g.vehicleActual),
      withStandard: toSet(g.withStandard),
      healthInsurance: toSet(g.healthInsurance)
    };
  }

  var US = country(bundle.defaultCountry || "US");
  var LATEST_BUSINESS_RATE = US.latestBusinessRate;
  var MILEAGE_RATES = US.mileageRates;
  var SS_WAGE_BASE = US.seTax.wageBase;
  var SE_SS_RATE = US.seTax.ssRate;
  var SE_MEDICARE_RATE = US.seTax.medicareRate;
  var SE_FACTOR = US.seTax.factor;
  var SE_MIN = US.seTax.minNetProfit;
  var QBI_RATE = US.qbiRate;
  var STANDARD_DEDUCTION = US.standardDeduction;
  var BRACKETS_2026 = (US.brackets && US.brackets[2026]) || {};
  var VEHICLE_ACTUAL = groups(US.id).vehicleActual;
  var WITH_STANDARD = groups(US.id).withStandard;

  function money(n) {
    var x = Number(n);
    if (!isFinite(x)) return 0;
    return Math.round(x * 100) / 100;
  }

  function rateForDate(dateStr, countryCode) {
    var c = country(countryCode);
    var rates = c.mileageRates || [];
    var latest = c.latestBusinessRate;
    if (!dateStr) return latest;
    var d = String(dateStr).slice(0, 10);
    for (var i = 0; i < rates.length; i++) {
      var r = rates[i];
      if (d >= r.start && d <= r.end) return r.business;
    }
    if (rates.length && d < rates[0].start) return rates[0].business;
    return latest;
  }

  function tripMiles(trip) {
    if (!trip) return 0;
    var direct = Number(trip.miles);
    if (trip.miles !== "" && trip.miles != null && isFinite(direct) && direct >= 0) {
      return direct;
    }
    var start = Number(trip.startOdo);
    var end = Number(trip.endOdo);
    if (isFinite(start) && isFinite(end) && end >= start) return money(end - start);
    return 0;
  }

  function inYear(item, year) {
    return item && String(item.date || "").slice(0, 4) === String(year);
  }

  function mileageDeduction(trips, countryCode) {
    var miles = 0;
    var value = 0;
    var byRate = {};
    var list = trips || [];
    for (var i = 0; i < list.length; i++) {
      var t = list[i];
      var m = tripMiles(t);
      var rate = rateForDate(t.date, countryCode);
      miles += m;
      value += m * rate;
      var key = rate.toFixed(3);
      byRate[key] = (byRate[key] || 0) + m;
    }
    return { miles: money(miles), value: money(value), byRate: byRate };
  }

  function sumEarnings(earnings) {
    var gross = 0;
    var tips = 0;
    var fees = 0;
    var hours = 0;
    var list = earnings || [];
    for (var i = 0; i < list.length; i++) {
      var e = list[i];
      gross += Number(e.gross) || 0;
      tips += Number(e.tips) || 0;
      fees += Number(e.fees) || 0;
      hours += Number(e.hours) || 0;
    }
    return {
      gross: money(gross),
      tips: money(tips),
      fees: money(fees),
      hours: money(hours),
      income: money(gross + tips),
      payout: money(gross + tips - fees)
    };
  }

  function expenseAmount(exp) {
    var amt = Number(exp && exp.amount) || 0;
    var pct = exp && exp.businessPct != null && exp.businessPct !== ""
      ? Number(exp.businessPct)
      : 100;
    if (!isFinite(pct)) pct = 100;
    return amt * (pct / 100);
  }

  function splitExpenses(expenses, countryCode) {
    var g = groups(countryCode);
    var out = {
      vehicleActual: 0,
      withStandard: 0,
      scheduleCOther: 0,
      healthInsurance: 0,
      byCategory: {}
    };
    var list = expenses || [];
    for (var i = 0; i < list.length; i++) {
      var e = list[i];
      var amt = expenseAmount(e);
      var cat = (e && e.category) || "other";
      out.byCategory[cat] = money((out.byCategory[cat] || 0) + amt);
      if (g.healthInsurance[cat]) out.healthInsurance += amt;
      else if (g.vehicleActual[cat]) out.vehicleActual += amt;
      else if (g.withStandard[cat]) out.withStandard += amt;
      else out.scheduleCOther += amt;
    }
    out.vehicleActual = money(out.vehicleActual);
    out.withStandard = money(out.withStandard);
    out.scheduleCOther = money(out.scheduleCOther);
    out.healthInsurance = money(out.healthInsurance);
    return out;
  }

  function seTax(netProfit, year, countryCode) {
    var c = country(countryCode);
    var se = c.seTax;
    var profit = Number(netProfit) || 0;
    var yearKey = year || c.currentTaxYear;
    var wageBase = (se.wageBase && (se.wageBase[yearKey] || se.wageBase[c.currentTaxYear])) || 0;
    if (profit < se.minNetProfit) {
      return {
        netEarnings: 0,
        tax: 0,
        ss: 0,
        medicare: 0,
        deductibleHalf: 0,
        wageBase: wageBase
      };
    }
    var netEarnings = money(profit * se.factor);
    var ssWages = Math.min(Math.max(netEarnings, 0), wageBase);
    var ss = money(ssWages * se.ssRate);
    var medicare = money(Math.max(netEarnings, 0) * se.medicareRate);
    var tax = money(ss + medicare);
    return {
      netEarnings: netEarnings,
      tax: tax,
      ss: ss,
      medicare: medicare,
      deductibleHalf: money(tax / 2),
      wageBase: wageBase
    };
  }

  function federalTaxOn(taxable, status, year, countryCode) {
    var c = country(countryCode);
    var y = year || c.currentTaxYear;
    var set = (c.brackets && (c.brackets[y] || c.brackets[c.currentTaxYear])) || {};
    var table = set[status] || set.single || [];
    var tax = 0;
    var prev = 0;
    var remaining = Math.max(0, Number(taxable) || 0);
    for (var i = 0; i < table.length; i++) {
      var cap = table[i][0];
      var rate = table[i][1];
      if (remaining <= 0) break;
      var slice = Math.min(remaining, cap - prev);
      if (slice > 0) tax += slice * rate;
      remaining -= slice;
      prev = cap;
    }
    return money(tax);
  }

  function incomeTaxEstimate(opts) {
    opts = opts || {};
    var netProfit = Number(opts.netProfit) || 0;
    var se = Number(opts.seTax) || 0;
    var c = country(opts.country);
    var year = opts.year || c.currentTaxYear;
    var status = opts.filingStatus || "single";
    var onlyIncome = opts.onlyIncome !== false;
    var halfSE = money(se / 2);
    var sehi = money(Math.min(Math.max(Number(opts.healthInsurance) || 0, 0), Math.max(netProfit, 0)));
    var qbiBase = Math.max(netProfit - halfSE - sehi, 0);
    var qbi = money(qbiBase * (c.qbiRate || 0));
    var dedTable = (c.standardDeduction && (c.standardDeduction[year] || c.standardDeduction[c.currentTaxYear])) || {};
    var std = dedTable[status] || dedTable.single || 0;
    var agi = money(netProfit - halfSE - sehi);
    var taxable = onlyIncome ? Math.max(agi - qbi - std, 0) : Math.max(agi - qbi, 0);
    var federal = federalTaxOn(taxable, status, year, opts.country);
    return {
      halfSE: halfSE,
      sehi: sehi,
      qbi: qbi,
      std: std,
      agi: agi,
      taxable: money(taxable),
      federal: federal,
      setAside: money(se + federal)
    };
  }

  function dashboard(data) {
    data = data || {};
    var settings = data.settings || {};
    var countryCode = settings.country || bundle.defaultCountry;
    var c = country(countryCode);
    var year = Number(settings.year) || c.currentTaxYear;
    var trips = (data.trips || []).filter(function (t) { return inYear(t, year); });
    var earnings = (data.earnings || []).filter(function (t) { return inYear(t, year); });
    var expenses = (data.expenses || []).filter(function (t) { return inYear(t, year); });

    var miles = mileageDeduction(trips, countryCode);
    var earn = sumEarnings(earnings);
    var exp = splitExpenses(expenses, countryCode);

    var totalMiles = Number(settings.totalMilesYear) || 0;
    var bizPct = totalMiles > 0 ? Math.min(1, miles.miles / totalMiles) : 1;
    var warnedNoTotal = totalMiles <= 0 && exp.vehicleActual > 0;
    var vehicleActualAllocated = money(exp.vehicleActual * bizPct);

    var stdVehicle = money(miles.value + exp.withStandard);
    var actualVehicle = money(vehicleActualAllocated + exp.withStandard);
    var stdScheduleCExp = money(earn.fees + stdVehicle + exp.scheduleCOther);
    var actScheduleCExp = money(earn.fees + actualVehicle + exp.scheduleCOther);
    var stdNet = money(earn.income - stdScheduleCExp);
    var actNet = money(earn.income - actScheduleCExp);
    var better = stdVehicle >= actualVehicle ? "standard" : "actual";
    var net = better === "standard" ? stdNet : actNet;

    var se = seTax(net, year, countryCode);
    var tax = incomeTaxEstimate({
      netProfit: net,
      seTax: se.tax,
      healthInsurance: exp.healthInsurance,
      filingStatus: settings.filingStatus || "single",
      year: year,
      onlyIncome: settings.onlyIncome !== false,
      country: countryCode
    });

    return {
      year: year,
      country: countryCode,
      miles: miles,
      earn: earn,
      exp: exp,
      bizPct: bizPct,
      totalMiles: totalMiles,
      warnedNoTotal: warnedNoTotal,
      vehicleActualAllocated: vehicleActualAllocated,
      stdVehicle: stdVehicle,
      actualVehicle: actualVehicle,
      stdScheduleCExp: stdScheduleCExp,
      actScheduleCExp: actScheduleCExp,
      stdNet: stdNet,
      actNet: actNet,
      better: better,
      net: net,
      se: se,
      tax: tax,
      perMile: miles.miles > 0 ? money(earn.payout / miles.miles) : 0,
      perHour: earn.hours > 0 ? money(earn.payout / earn.hours) : 0,
      netPerMile: miles.miles > 0 ? money(net / miles.miles) : 0,
      netPerHour: earn.hours > 0 ? money(net / earn.hours) : 0
    };
  }

  function tripOffer(input) {
    input = input || {};
    var offer = Number(input.offer) || 0;
    var miles = Number(input.miles) || 0;
    var minutes = Number(input.minutes) || 0;
    var costPerMile = Number(input.costPerMile) || 0;
    var targetPerMile = input.targetPerMile == null || input.targetPerMile === ""
      ? 1
      : Number(input.targetPerMile);
    var targetPerHour = Number(input.targetPerHour) || 0;
    var hours = minutes / 60;
    var perMile = miles > 0 ? money(offer / miles) : 0;
    var perHour = hours > 0 ? money(offer / hours) : 0;
    var estCost = money(miles * costPerMile);
    var netAfterCost = money(offer - estCost);
    var meetsMile = miles > 0 && perMile + 1e-9 >= targetPerMile;
    var meetsHour = !targetPerHour || hours === 0 || perHour + 1e-9 >= targetPerHour;
    return {
      perMile: perMile,
      perHour: perHour,
      estCost: estCost,
      netAfterCost: netAfterCost,
      hours: money(hours),
      accept: !!(meetsMile && meetsHour && netAfterCost > 0),
      meetsMile: meetsMile,
      meetsHour: meetsHour
    };
  }

  function nextBusinessDay(iso) {
    var parts = String(iso).split("-").map(Number);
    var dt = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));
    var day = dt.getUTCDay();
    if (day === 6) dt.setUTCDate(dt.getUTCDate() + 2);
    else if (day === 0) dt.setUTCDate(dt.getUTCDate() + 1);
    return dt.toISOString().slice(0, 10);
  }

  function quarterlySchedule(year, countryCode) {
    var c = country(countryCode);
    year = Number(year) || c.currentTaxYear;
    var periods = c.estimatedTaxPeriods || [];
    return periods.map(function (p) {
      var dueYear = year + (p.dueYearOffset || 0);
      var row = {
        id: p.id,
        label: p.label,
        start: year + "-" + p.startMD,
        end: year + "-" + p.endMD,
        due: dueYear + "-" + p.dueMD
      };
      row.dueAdjusted = nextBusinessDay(row.due);
      return row;
    });
  }

  function formatMoney(n, countryCode) {
    var cur = country(countryCode).currency || { code: "USD", symbol: "$", locale: "en-US" };
    var val = money(n);
    try {
      return new Intl.NumberFormat(cur.locale, { style: "currency", currency: cur.code }).format(val);
    } catch (err) {
      return cur.symbol + val.toFixed(2);
    }
  }

  function findRegion(code, countryCode) {
    var list = country(countryCode).regions || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].code === code) return list[i];
    }
    return null;
  }

  function vehicleCostPerMile(input) {
    input = input || {};
    var miles = Number(input.milesYear) || 0;
    var mpg = Number(input.mpg) || 0;
    var gasPrice = Number(input.gasPrice) || 0;
    var gasPerMile = mpg > 0 ? money(gasPrice / mpg) : 0;
    var fixed = (Number(input.insuranceYear) || 0) +
      (Number(input.maintenanceYear) || 0) +
      (Number(input.registrationYear) || 0) +
      (Number(input.tiresYear) || 0) +
      (Number(input.depreciationYear) || 0) +
      (Number(input.otherYear) || 0);
    var fixedPerMile = miles > 0 ? money(fixed / miles) : 0;
    var total = money(gasPerMile + fixedPerMile);
    return {
      gasPerMile: gasPerMile,
      fixedPerMile: fixedPerMile,
      total: total,
      annualFuel: money(miles * gasPerMile),
      annualFixed: money(fixed),
      annualTotal: money(miles * total)
    };
  }

  function goalPlan(input) {
    input = input || {};
    var goal = Number(input.annualNetGoal) || 0;
    var weeks = Number(input.weeksWorked) || 52;
    if (weeks <= 0) weeks = 52;
    var hoursWeek = Number(input.hoursPerWeek) || 0;
    var currentNet = Number(input.currentNet) || 0;
    var remaining = money(Math.max(goal - currentNet, 0));
    var annualHours = money(weeks * hoursWeek);
    return {
      weeklyTarget: money(goal / weeks),
      hourlyTarget: annualHours > 0 ? money(goal / annualHours) : 0,
      remaining: remaining,
      progress: goal > 0 ? Math.min(1, currentNet / goal) : 0,
      annualHours: annualHours
    };
  }

  function byPlatform(earnings) {
    var map = {};
    (earnings || []).forEach(function (e) {
      var key = e.platform || "other";
      if (!map[key]) map[key] = { platform: key, gross: 0, tips: 0, fees: 0, hours: 0 };
      map[key].gross += Number(e.gross) || 0;
      map[key].tips += Number(e.tips) || 0;
      map[key].fees += Number(e.fees) || 0;
      map[key].hours += Number(e.hours) || 0;
    });
    return Object.keys(map).map(function (k) {
      var row = map[k];
      row.gross = money(row.gross);
      row.tips = money(row.tips);
      row.fees = money(row.fees);
      row.hours = money(row.hours);
      row.income = money(row.gross + row.tips);
      row.payout = money(row.gross + row.tips - row.fees);
      return row;
    }).sort(function (a, b) { return b.payout - a.payout; });
  }

  return {
    LATEST_BUSINESS_RATE: LATEST_BUSINESS_RATE,
    MILEAGE_RATES: MILEAGE_RATES,
    SS_WAGE_BASE: SS_WAGE_BASE,
    STANDARD_DEDUCTION: STANDARD_DEDUCTION,
    VEHICLE_ACTUAL: VEHICLE_ACTUAL,
    WITH_STANDARD: WITH_STANDARD,
    money: money,
    rateForDate: rateForDate,
    tripMiles: tripMiles,
    mileageDeduction: mileageDeduction,
    sumEarnings: sumEarnings,
    expenseAmount: expenseAmount,
    splitExpenses: splitExpenses,
    seTax: seTax,
    federalTaxOn: federalTaxOn,
    incomeTaxEstimate: incomeTaxEstimate,
    dashboard: dashboard,
    tripOffer: tripOffer,
    nextBusinessDay: nextBusinessDay,
    quarterlySchedule: quarterlySchedule,
    vehicleCostPerMile: vehicleCostPerMile,
    goalPlan: goalPlan,
    byPlatform: byPlatform,
    inYear: inYear,
    country: country,
    formatMoney: formatMoney,
    findRegion: findRegion,
    bundle: bundle
  };
});
