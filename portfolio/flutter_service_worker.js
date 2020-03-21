'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "50a0a92bfacc18b204c08d57b3e89cee",
"/main.dart.js": "8952942c12de4fbbbae23fcf7fe94e0c",
"/favicon.png": "a37e33588294a5b1393bb96c0ba48b0f",
"/assets/LICENSE": "46c1bd101077d913afbb95a048278098",
"/assets/AssetManifest.json": "8063c69cd745907bb3c0464749a55dcc",
"/assets/FontManifest.json": "ba17dc20770b44f4163191111ebe6ab0",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/fonts/OpenSans-SemiBold.ttf": "ba5cde21eeea0d57ab7efefc99596cce",
"/assets/assets/fonts/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"/assets/assets/fonts/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"/assets/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"/assets/assets/fonts/CustomIcons.ttf": "f22dee2e0c07ab22fe6fce4d7fefe1df"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
