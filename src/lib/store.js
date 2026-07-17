const KEY = 'voltura_session';

export function load() {
  const raw = localStorage.getItem(KEY);
  if (raw) {
    try { return JSON.parse(raw); } catch { /* corrupt, fall through */ }
  }
  return blank();
}

export function save(session) {
  localStorage.setItem(KEY, JSON.stringify(session));
}

export function blank() {
  return {
    id: Date.now().toString(),
    date: new Date().toISOString(),
    courtCost: 0,
    gearCost: 0,
    players: [],
    queue: [],
    activeMatch: null,
    matches: [],
    status: 'active'
  };
}
