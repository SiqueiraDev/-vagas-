self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('vagas-cache').then((cache) => {
            return cache.addAll([
                '/',
                'index.html',
                'styles.css',
                'app.js',
                'manifest.json',
                'assets/icons/icon-192x192.png',
                'assets/icons/icon-512x512.png',
                '/jobs.json',   
                'Imagens/Vagas/analise-dados.jpg',
                'Imagens/Vagas/design.jpg',
                'Imagens/Vagas/marketing.jpg',
                'Imagens/Vagas/dev-web.jpg'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});