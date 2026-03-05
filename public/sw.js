// AquaGuide Service Worker v1
// Handles push notifications and notification clicks

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// ── Push (server-sent via Supabase Edge Function) ────────────────────────────
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
        // Focus an existing window whose URL matches the target
        const match = list.find((c) => new URL(c.url).pathname === targetUrl);
        if (match) return match.focus();
        // No matching window – open a new one
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
    icon:               '/icon-192.png',
    badge:              '/icon-192.png',
    tag:                tag || 'aquaguide-msg',
    data:               { url: url || '/' },
    requireInteraction: true,
    vibrate:            [200, 100, 200],
  });
});
