// Import OneSignal service worker
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

const CACHE = 'heroes-veganos-v3'
const ASSETS = ['/', '/index.html', '/manifest.json', '/icon.svg']

// Install: cache critical assets
self.addEventListener('install', e => {
  self.skipWaiting(); // Force new service worker to activate immediately
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)))
})

// Activate: clear old caches and take control of all clients immediately
self.addEventListener('activate', e => {
  e.waitUntil(
    Promise.all([
      caches.keys().then(keys =>
        Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
      ),
      self.clients.claim() // Take control of all open tabs immediately
    ])
  )
})

// Fetch: Network First strategy — always try fresh content
self.addEventListener('fetch', e => {
  if (!e.request.url.startsWith('http')) return;
  if (e.request.method !== 'GET') return;
  
  e.respondWith(
    // Try network first
    fetch(e.request).then(res => {
      // If success, update cache and return fresh content
      const clone = res.clone()
      caches.open(CACHE).then(c => {
        try { c.put(e.request, clone) } catch(err) {}
      })
      return res
    }).catch(() => 
      // If network fails, fall back to cache
      caches.match(e.request).then(r => r || caches.match('/'))
    )
  )
})

// Listen for skipWaiting message from the app
self.addEventListener('message', (e) => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
})
