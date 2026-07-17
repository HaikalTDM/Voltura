export function totalCost(session) {
  return (session.courtCost || 0) + (session.gearCost || 0);
}

export function playerCount(session) {
  return session.players.length;
}

export function paidCount(session) {
  return session.players.filter((p) => p.paid).length;
}

export function perPerson(session) {
  const n = playerCount(session);
  return n > 0 ? Math.ceil(totalCost(session) / n) : 0;
}

export function collected(session) {
  return paidCount(session) * perPerson(session);
}

export function remaining(session) {
  return totalCost(session) - collected(session);
}
