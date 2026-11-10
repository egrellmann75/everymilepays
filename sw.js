const CACHE = "every-mile-pays-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./js/config.js",
  "./js/calc.js",
  "./js/i18n.js",
  "./js/i18n/en.js",
  "./js/i18n/es.js",
  "./js/i18n/pt.js",
  "./js/i18n/zh.js",
  "./js/i18n/hi.js",
  "./js/app.js",
  "./manifest.json",
  "./icons/favicon-32.png",
  "./icons/logo.webp",
  "./img/hero.webp",
  "./img/mileage.webp",
  "./img/taxes.webp",
  "./img/calculator.webp",
  "./img/safety.webp",
  "./img/health.webp",
  "./img/og-share.jpg"
];
self.addEventListener("install", function (event) {
  event.waitUntil(caches.open(CACHE).then(function (cache) { return cache.addAll(ASSETS.filter(function (a) {
    return !a.startsWith("./img/");
  })); }));
  self.skipWaiting();
});
self.addEventListener("activate", function (event) {
  event.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});
self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then(function (hit) {
    return hit || fetch(event.request).then(function (res) {
      var copy = res.clone();
      caches.open(CACHE).then(function (cache) { cache.put(event.request, copy); });
      return res;
    }).catch(function () { return caches.match("./index.html"); });
  }));
});
