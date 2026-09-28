// Nitro Live service worker: hashed code and assets are cached on the phone; the page itself, version.json and
// live.json always come from the network (updates and the host's current address are never stale).
const C = 'nitro-0.1.0-eee6421d17';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C && k.startsWith('nitro-')).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  if (/\/(js|css|assets)\//.test(u.pathname)) {
    e.respondWith(caches.open(C).then(c => c.match(e.request).then(hit => hit || fetch(e.request).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; }))));
  }
});
