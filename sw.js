// Prototype-only service worker placeholder.
// A production MVP should cache the app shell, UI labels, route overview data,
// stop metadata, selected images, and the current audio track when practical.
self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});
