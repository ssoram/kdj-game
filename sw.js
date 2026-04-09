const CACHE = 'mole-v1';
self.addEventListener('install', e =>
  e.waitUntil(caches.open(CACHE).then(c =>
    c.addAll(['./whack-a-mole.html'])
  ))
);
self.addEventListener('fetch', e =>
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  )
);