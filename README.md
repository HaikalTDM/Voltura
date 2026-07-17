<p align="center">
  <img src="https://img.shields.io/badge/⚡-Voltura-FFD700?style=for-the-badge" alt="Voltura" />
</p>

# Voltura

The courtside companion for your pickleball crew. No more group chat chaos. No more calculator math. Just show up, tap, and play.

---

## What it does

**Fair matchmaking** — Tell Voltura who showed up and how long you've got. It builds a full rotation schedule so everyone plays the same number of games with different partners each round. No one rides the bench.

**Live scoring** — After each game, tap *Finish Game* and punch in the score. Voltura bumps the next four players onto the court and tracks who's winning.

**Auto money split** — Enter the court booking cost. Check off who's paid you. Voltura tells you exactly what's left and who still owes what. No spreadsheet needed.

**Session ratings** — Every game adjusts a hidden skill score for each player. Beat stronger opponents, climb faster. End the session and see who earned MVP.

**Share-ready wrap-up** — One tap copies a clean summary with the MVP, standings, costs, and player stats. Paste it straight into your WhatsApp group.

**Player avatars** — Snap a quick photo of each player in the roster. Shows up on the court, schedule, and podium.

---

## How to use

1. **Roster** — Add everyone who's playing today. Snap a photo if you want.
2. **Set the clock** — Tell Voltura how long you have (e.g., 120 minutes). It calculates exactly how many games you can play.
3. **Play** — The Court screen shows the current matchup. Tap *Finish Game*, enter the score, and the next game is ready.
4. **Track costs** — Switch to the Ledger tab. Enter what the court and gear cost. Check off who's paid.
5. **Wrap up** — Head to the Summary tab. Copy the results. Share to your group. Done.

Works on your phone — install it as a PWA for a full-screen app experience that works offline at the court.

---

## Running your own

```bash
npm install
npm run dev
```

Open `http://localhost:4321` on your phone or desktop.

To build for deployment:
```bash
npm run build
npm run preview
```

Static output lands in `dist/` — drop it on any web server.

---

Built for pickleball. Works for any 2v2 sport. Your data stays on your device — no accounts, no servers, no nonsense.
