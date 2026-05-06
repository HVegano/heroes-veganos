// Import OneSignal service worker
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

const CACHE = 'heroes-veganos-v2'
const ASSETS = ['/', '/index.html', '/manifest.json', '/icon.svg']

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)))
})

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  )
})

self.addEventListener('fetch', e => {
  if (!e.request.url.startsWith('http')) return;
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      const clone = res.clone()
      caches.open(CACHE).then(c => {
        try { c.put(e.request, clone) } catch(err) {}
      })
      return res
    }).catch(() => caches.match('/')))
  )
})
