// Bookafé (Comanda) instalado como aplicativo: abre sem internet.
// Com internet, sempre busca a versão nova (rede primeiro) e guarda uma cópia; sem internet, usa a cópia guardada.
const CACHE = 'bookafe-comanda-v1';
const BASE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-180.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASE)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const guarda = url.origin === location.origin || url.hostname.endsWith('fonts.googleapis.com') || url.hostname.endsWith('fonts.gstatic.com');
  if (!guarda) return;
  // opaque: as fontes do Google vêm assim (sem status), mas podem ser guardadas
  e.respondWith(
    fetch(e.request)
      .then(r => { if (r.ok || r.type === 'opaque') { const copia = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copia)); } return r; })
      .catch(() => caches.match(e.request, { ignoreSearch: true })
        .then(m => m || (e.request.mode === 'navigate' ? caches.match('./index.html') : Response.error())))
  );
});
