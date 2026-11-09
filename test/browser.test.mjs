// Headless Chrome check via the DevTools protocol (no npm deps).
import { spawn } from "node:child_process";
const BASE = process.env.BASE || "http://127.0.0.1:8765/";
const chrome = spawn("google-chrome", ["--headless=new","--no-sandbox","--disable-gpu","--remote-debugging-port=9333","--window-size=390,844","about:blank"], { stdio: "ignore" });
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
let wsUrl;
for (let i = 0; i < 40 && !wsUrl; i++) {
  await sleep(250);
  try { const j = await (await fetch("http://127.0.0.1:9333/json/list")).json(); wsUrl = j.find(x => x.type === "page")?.webSocketDebuggerUrl; } catch {}
}
const ws = new WebSocket(wsUrl);
await new Promise(r => ws.onopen = r);
let id = 0; const pending = new Map(); const errors = []; const failed = [];
ws.onmessage = (m) => {
  const msg = JSON.parse(m.data);
  if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg); pending.delete(msg.id); return; }
  if (msg.method === "Runtime.exceptionThrown") errors.push(msg.params.exceptionDetails.exception?.description || msg.params.exceptionDetails.text);
  if (msg.method === "Runtime.consoleAPICalled" && msg.params.type === "error") errors.push("console: " + msg.params.args.map(a => a.value || a.description).join(" "));
  if (msg.method === "Network.loadingFailed" && !/fonts\.(googleapis|gstatic)/.test(msg.params.errorText + (msg.params.requestId))) failed.push(msg.params.errorText);
  if (msg.method === "Network.responseReceived" && msg.params.response.status >= 400) failed.push(msg.params.response.status + " " + msg.params.response.url);
};
const send = (method, params = {}) => new Promise(r => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const ev = async (expr) => { const r = await send("Runtime.evaluate", { expression: expr, awaitPromise: true, returnByValue: true }); if (r.result.exceptionDetails) throw new Error(expr + " -> " + JSON.stringify(r.result.exceptionDetails)); return r.result.result.value; };
await send("Runtime.enable"); await send("Network.enable"); await send("Page.enable");
await send("Page.navigate", { url: BASE + "?selftest=1" }); await sleep(2500);
const report = {};
report.selftest = await ev(`document.getElementById("selftest-out").textContent`);
// Seed sample entries through the real UI forms
await ev(`localStorage.clear(); location.href = "${BASE}"; true`); await sleep(1500);
const fill = (sel, vals) => `(() => { const f = document.querySelector(${JSON.stringify(sel)}); ${Object.entries(vals).map(([k,v]) => `f.querySelector('[name=${k}]').value = ${JSON.stringify(v)};`).join("")} f.requestSubmit(); return true; })()`;
await ev(`document.querySelector('[data-route=logs]').click(); true`);
await ev(fill('form[data-form=trip]', { date: "2026-03-15", platform: "lyft", miles: "100" }));
await ev(fill('form[data-form=trip]', { date: "2026-08-01", platform: "uber", startOdo: "1000", endOdo: "1100", miles: "" }));
await ev(`document.querySelector('[data-log-tab=earnings]').click(); true`);
await ev(fill('form[data-form=earn]', { date: "2026-03-15", platform: "lyft", gross: "200", tips: "30", fees: "40", hours: "8" }));
await ev(fill('form[data-form=earn]', { date: "2026-08-01", platform: "uber", gross: "180", tips: "20", fees: "35", hours: "7" }));
await ev(fill('form[data-form=earn]', { date: "2026-09-01", platform: "lyft", gross: "500", tips: "40", fees: "80", hours: "10" }));
await ev(`document.querySelector('[data-log-tab=expenses]').click(); true`);
await ev(fill('form[data-form=exp]', { date: "2026-03-16", category: "gas", amount: "50", businessPct: "100" }));
await ev(fill('form[data-form=exp]', { date: "2026-03-16", category: "parking", amount: "10", businessPct: "100" }));
await ev(fill('form[data-form=exp]', { date: "2026-03-16", category: "phone", amount: "80", businessPct: "50" }));
await ev(fill('form[data-form=exp]', { date: "2026-08-02", category: "tolls", amount: "5", businessPct: "100" }));
await ev(`document.querySelector('[data-route=more]').click(); document.querySelector('[data-more-tab=settings]').click(); true`);
await ev(`(() => { const f = document.getElementById('settings-form'); f.querySelector('[name=totalMilesYear]').value = '400'; f.requestSubmit(); return true; })()`);
await ev(`document.getElementById('year-select').value='2026'; document.getElementById('year-select').dispatchEvent(new Event('change',{bubbles:true})); document.querySelector('[data-route=dashboard]').click(); true`);
report.dashboardEN = await ev(`[...document.querySelectorAll('#view-dashboard .stat')].map(s => s.querySelector('.label').textContent + ' = ' + s.querySelector('.value').textContent)`);
// Trip calculator
await ev(`document.querySelector('[data-route=tools]').click(); true`);
await ev(fill('#trip-form', { offer: "18", miles: "20", minutes: "40", costPerMile: "0.35", targetPerMile: "1", targetPerHour: "20" }));
report.trip18 = await ev(`document.getElementById('trip-result').innerText`);
await ev(fill('#trip-form', { offer: "22", miles: "20", minutes: "40", costPerMile: "0.35", targetPerMile: "1", targetPerHour: "20" }));
report.trip22 = await ev(`document.getElementById('trip-result').innerText.split('\\n')[0]`);
report.bookButtonHidden = await ev(`(() => { document.querySelector('[data-route=dashboard]').click(); return !document.querySelector('.book-card a.btn-primary'); })()`);
// Every language x every view x every guide topic
report.langs = {};
for (const lang of ["en","es","pt","zh","hi"]) {
  await ev(`document.getElementById('lang-toggle').click(); document.querySelector('[data-set-lang=${lang}]').click(); true`);
  const views = {};
  for (const r of ["dashboard","logs","tools","learn","more"]) {
    await ev(`document.querySelector('.tabbar [data-route=${r}]').click(); true`);
    views[r] = await ev(`document.getElementById('view-${r}').innerText.length`);
  }
  for (const t of ["trip","cpm","goal"]) { await ev(`document.querySelector('.tabbar [data-route=tools]').click(); document.querySelector('[data-tool-tab=${t}]').click(); true`); }
  for (const m of ["summary","backup","settings","book"]) { await ev(`document.querySelector('.tabbar [data-route=more]').click(); document.querySelector('[data-more-tab=${m}]').click(); true`); }
  const topics = {};
  for (const tp of ["deductions","hours","bonuses","multi","gas","earn","safety","health","resources","book"]) {
    await ev(`document.querySelector('.tabbar [data-route=learn]').click(); document.querySelector('[data-learn-topic=${tp}]').click(); true`);
    topics[tp] = await ev(`document.querySelector('#view-learn .guide')?.innerText.length || 0`);
  }
  const rawKeys = await ev(`(() => { const txt = document.body.innerText; const m = txt.match(/\\b(dash|tools|logs|guides|more|common|book|nav)\\.[a-zA-Z]+/g); return m || []; })()`);
  report.langs[lang] = { htmlLang: await ev(`document.documentElement.lang`), navHome: await ev(`document.querySelector('[data-i18n="nav.home"]').textContent`), views, minTopicChars: Math.min(...Object.values(topics)), rawKeys, stored: await ev(`JSON.parse(localStorage.getItem('every-mile-pays-v1')).settings.lang`) };
  await send("Page.captureScreenshot", { format: "png" }).then(r => import("node:fs").then(fs => fs.writeFileSync(`/tmp/emp-${lang}.png`, Buffer.from(r.result.data, "base64"))));
}
await ev(`document.querySelector('[data-set-lang=en]').click(); document.querySelector('.tabbar [data-route=dashboard]').click(); true`);
const shot = await send("Page.captureScreenshot", { format: "png" });
(await import("node:fs")).writeFileSync("/tmp/emp-dashboard.png", Buffer.from(shot.result.data, "base64"));
report.jsErrors = errors; report.failedRequests = failed.filter(f => !/fonts\./.test(f));
console.log(JSON.stringify(report, null, 2));
ws.close(); chrome.kill();
process.exit(errors.length || report.failedRequests.length ? 1 : 0);
