/**
 * Every Mile Pays i18n loader.
 * Language packs register themselves via DriveI18n.register(code, strings).
 * Add a language by creating js/i18n/xx.js and listing it in index.html.
 */
(function (root) {
  "use strict";

  function lookup(obj, key) {
    if (!obj) return undefined;
    var parts = String(key).split(".");
    var cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null || typeof cur !== "object" || !(parts[i] in cur)) return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }

  function interpolate(str, vars) {
    if (!vars || typeof str !== "string") return str;
    return str.replace(/\{(\w+)\}/g, function (_, k) {
      return vars[k] != null ? String(vars[k]) : "{" + k + "}";
    });
  }

  var api = {
    fallback: "en",
    current: "en",
    langs: {},
    order: ["en", "es", "pt", "zh", "hi"],
    register: function (code, strings) {
      this.langs[code] = strings || {};
    },
    has: function (code) {
      return !!(code && this.langs[code]);
    },
    setLang: function (code) {
      if (this.langs[code]) this.current = code;
      return this.current;
    },
    meta: function (code) {
      var pack = this.langs[code || this.current] || this.langs[this.fallback] || {};
      return pack.meta || { name: code, native: code, dir: "ltr", htmlLang: code || "en" };
    },
    get: function (key, lang) {
      var primary = lookup(this.langs[lang || this.current], key);
      if (primary !== undefined) return primary;
      return lookup(this.langs[this.fallback], key);
    },
    t: function (key, vars, lang) {
      var val = this.get(key, lang);
      if (val == null) return key;
      if (typeof val !== "string") return val;
      return interpolate(val, vars);
    },
    keysOf: function (obj, prefix) {
      var out = [];
      prefix = prefix || "";
      if (!obj || typeof obj !== "object" || Array.isArray(obj)) return out;
      Object.keys(obj).forEach(function (k) {
        var path = prefix ? prefix + "." + k : k;
        if (obj[k] && typeof obj[k] === "object" && !Array.isArray(obj[k])) {
          out = out.concat(api.keysOf(obj[k], path));
        } else {
          out.push(path);
        }
      });
      return out;
    }
  };

  root.DriveI18n = api;
  if (typeof module === "object" && module.exports) module.exports = api;
})(typeof self !== "undefined" ? self : globalThis);
