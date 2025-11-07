// Simple in-memory pending updates store shared between mover dashboard and admin
// This simulates a backend queue for verification.

let _updates = [
  // Example pre-seeded items can be added here if needed
];

let _id = 1;
const _subs = new Set();
const _eventSubs = new Set(); // for resolve events

function notify() {
  for (const fn of _subs) {
    try { fn(_updates.slice()); } catch {}
  }
}

export function getPendingUpdates() {
  return _updates.slice();
}

export function subscribe(callback) {
  _subs.add(callback);
  return () => _subs.delete(callback);
}

export function subscribeEvents(callback) {
  _eventSubs.add(callback);
  return () => _eventSubs.delete(callback);
}

export function addPendingUpdate(update) {
  const item = {
    id: _id++,
    status: 'pending',
    submittedAt: new Date().toLocaleString(),
    ...update,
  };
  _updates = [item, ..._updates];
  notify();
  return item;
}

export function resolveUpdate(id, action, meta = {}) {
  // action: 'verified' | 'rejected'
  const found = _updates.find(u => u.id === id);
  if (!found) return null;
  _updates = _updates.filter(u => u.id !== id);
  notify();
  const event = { ...found, status: action, meta };
  for (const fn of _eventSubs) {
    try { fn(event); } catch {}
  }
  return event;
}
