// AquaGuide Service Worker v1
// Handles push notifications and notification clicks

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// ── Push (future server-sent, e.g. Supabase Edge Function) ──────────────────
self.addEventListener('push', (event) => {
  let data = { title: '🐠 AquaGuide Reminder', body: 'You have a pending reminder.', url: '/' };
  try { data = { ...data, ...event.data?.json() }; } catch (_) {}

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body:              data.body,
      icon:              '/icon-192.png',
      badge:             '/icon-192.png',
      tag:               data.tag || 'aquaguide-' + Date.now(),
      data:              { url: data.url },
      requireInteraction: true,
      vibrate:           [200, 100, 200],
    })
  );
});

// ── Notification click → open / focus the correct URL ───────────────────────
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = event.notification.data?.url || '/';

  event.waitUntil(
    clients
      .matchAll({ type: 'window', includeUncontrolled: true })
      .then((list) => {
        // Re-use an existing window if possible
        for (const client of list) {
          if ('focus' in client) {
            client.navigate(targetUrl);
            return client.focus();
          }
        }
        if (clients.openWindow) return clients.openWindow(targetUrl);
      })
  );
});

// ── Triggered from the app via postMessage({ type: 'SHOW_NOTIFICATION' }) ───
self.addEventListener('message', (event) => {
  if (event.data?.type !== 'SHOW_NOTIFICATION') return;
  const { title, body, url, tag } = event.data;
  self.registration.showNotification(title, {
    body,
    icon:              '/icon-192.png',
    badge:             '/icon-192.png',
    tag:               tag || 'aquaguide-msg',
    data:              { url: url || '/' },
    requireInteraction: true,
    vibrate:           [200, 100, 200],
  });
});
