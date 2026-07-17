function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function tryGenerate(session) {
  if (session.activeMatch) return session;
  if (session.queue.length < 4) return session;

  const shuffled = shuffle(session.queue);
  const [a1, a2, b1, b2] = shuffled;

  session.activeMatch = { teamA: [a1, a2], teamB: [b1, b2] };
  session.queue = shuffled.slice(4);
  return session;
}

export function finishMatch(session, scoreA, scoreB) {
  if (!session.activeMatch) return session;

  const { teamA, teamB } = session.activeMatch;
  session.matches.push({ teamA: [...teamA], teamB: [...teamB], scoreA, scoreB });
  session.queue.push(...teamA, ...teamB);
  session.activeMatch = null;
  return session;
}

export function removePlayer(session, name) {
  if (session.activeMatch) {
    const active = [session.activeMatch.teamA, session.activeMatch.teamB].flat();
    if (active.includes(name)) return session;
  }

  session.players = session.players.filter((p) => p.name !== name);
  session.queue = session.queue.filter((n) => n !== name);
  return session;
}
