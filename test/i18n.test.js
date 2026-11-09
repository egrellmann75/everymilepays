const assert = require("assert");
const i18n = require("../js/i18n.js");
require("../js/i18n/en.js");
require("../js/i18n/es.js");
require("../js/i18n/pt.js");
require("../js/i18n/zh.js");
require("../js/i18n/hi.js");

const langs = ["en", "es", "pt", "zh", "hi"];
langs.forEach((code) => assert.ok(i18n.has(code), "missing " + code));

function guideShape(lang, topic) {
  i18n.setLang(lang);
  const g = i18n.get("guides." + topic);
  assert.ok(g && g.title && g.lede, lang + " " + topic + " missing title/lede");
}

["deductions", "hours", "bonuses", "multi", "gas", "earn", "safety", "health", "resources"].forEach((topic) => {
  langs.forEach((lang) => guideShape(lang, topic));
});

langs.forEach((lang) => {
  i18n.setLang(lang);
  ["brand.name", "nav.home", "book.headline", "book.byAuthor", "book.buy", "book.coming", "disclaimer.credit", "dash.title", "tools.tripTitle"].forEach((key) => {
    const val = i18n.t(key);
    assert.ok(val && val !== key, lang + " missing " + key);
  });
  assert.strictEqual(i18n.t("brand.name"), "Every Mile Pays");
  const bullets = i18n.get("book.bullets");
  assert.ok(Array.isArray(bullets) && bullets.length >= 3, lang + " book bullets");
});

const enKeys = i18n.keysOf(i18n.langs.en);
langs.slice(1).forEach((lang) => {
  const keys = new Set(i18n.keysOf(i18n.langs[lang]));
  const missing = enKeys.filter((k) => !keys.has(k));
  assert.deepStrictEqual(missing, [], lang + " missing keys: " + missing.join(", "));
});

console.log("i18n parity ok", langs.join(","), "en leaf keys", enKeys.length);
