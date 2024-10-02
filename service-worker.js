self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('gallery-cache').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/style.css',
          '/script.js',
          '/iconos/icon-192x192.png',
          '/iconos/icon-512x512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  