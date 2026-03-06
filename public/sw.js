// AquaGuide Service Worker v2
// Built with injectManifest strategy – vite-plugin-pwa injects the
// __WB_MANIFEST placeholder at build time for precaching.
// Handles: precache, runtime caching, push notifications, notification clicks.

import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, NetworkFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

// ── Precache (injected by vite-plugin-pwa at build time) ─────────────────────
precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();

// ── Runtime: Google Fonts ─────────────────────────────────────────────────────
registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com',
  new CacheFirst({
    cacheName: 'google-fonts-cache',
    plugins: [
      new CacheableResponsePlugin({ statuses: [0, 200] }),
      new ExpirationPlugin({ maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 }),
    ],
  })
);
registerRoute(
  ({ url }) => url.origin === 'https://fonts.gstatic.com',
  new CacheFirst({
    cacheName: 'gstatic-fonts-cache',
    plugins: [
      new CacheableResponsePlugin({ statuses: [0, 200] }),
      new ExpirationPlugin({ maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 }),
    ],
  })
);

// ── Runtime: Images ───────────────────────────────────────────────────────────
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images-cache',
    plugins: [
      new ExpirationPlugin({ maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 }),
    ],
  })
);

// ── Runtime: Supabase API ─────────────────────────────────────────────────────
registerRoute(
  ({ url }) => url.hostname.endsWith('.supabase.co') && url.pathname.startsWith('/rest/v1/'),
  new NetworkFirst({
    cacheName: 'supabase-api-cache',
    networkTimeoutSeconds: 10,
    plugins: [
      new CacheableResponsePlugin({ statuses: [0, 200] }),
      new ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 60 * 5 }),
    ],
  })
);

// ── Lifecycle ─────────────────────────────────────────────────────────────────
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(clients.claim()));

// ── Push (server-sent via Supabase Edge Function + web-push) ─────────────────
self.addEventListener('push', (event) => {
  let data = { title: '🐠 AquaGuide Reminder', body: 'You have a pending reminder.', url: '/' };
  try { data = { ...data, ...event.data?.json() }; } catch (_) {}

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body:               data.body,
      icon:               '/icon-192.png',
      badge:              '/icon-192.png',
      tag:                data.tag || 'aquaguide-' + Date.now(),
      data:               { url: data.url },
      requireInteraction: true,
      vibrate:            [200, 100, 200],
    }).catch((err) => console.error('[SW] showNotification failed:', err))
  );
});

// ── Notification click → open / focus the correct URL ────────────────────────
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = event.notification.data?.url || '/';

  event.waitUntil(
    clients
      .matchAll({ type: 'window', includeUncontrolled: true })
      .then((list) => {
        const match = list.find((c) => new URL(c.url).pathname === targetUrl);
        if (match) return match.focus();
        if (clients.openWindow) return clients.openWindow(targetUrl);
      })
  );
});

// ── postMessage: SHOW_NOTIFICATION ───────────────────────────────────────────
self.addEventListener('message', (event) => {
  if (event.data?.type !== 'SHOW_NOTIFICATION') return;
  const { title, body, url, tag } = event.data;
  self.registration.showNotification(title, {
    body,
    icon:               '/icon-192.png',
    badge:              '/icon-192.png',
    tag:                tag || 'aquaguide-msg',
    data:               { url: url || '/' },
    requireInteraction: true,
    vibrate:            [200, 100, 200],
  });
});
