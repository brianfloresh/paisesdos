self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('direccion-form-cache').then((cache) => {
        return cache.addAll([
          '/',
          'index.html',
          'manifest.json',
          'icon.ico', // actualizado a icon.png
          // Agrega más rutas si es necesario
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  