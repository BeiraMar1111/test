# AmtPilot — Demo Prototyp

Interaktiver React-Prototyp für die Lebenslage **„Geburt eines Kindes“**.

## Schnellstart

```bash
npm install
npm run dev
```

Dann im Browser öffnen: `http://localhost:5173`

## Was der Prototyp zeigt

- **KI-Navigator** — situativer Dialog mit Schnellantworten (mock, ohne API)
- **Verwaltungsplan** — 5 Schritte mit Prioritäten, Fristen und Dokumenten
- **Design-System** — Navy / Teal, mobile-first, Alltagssprache

## Demo-Flow

1. Chip wählen: „Unser Baby ist geboren“
2. 2–3 Rückfragen beantworten
3. Personalisierter Plan erscheint als Accordion

## Tech Stack

- React + TypeScript
- Vite
- Mock-Szenario in `src/data/geburtScenario.ts`

## Nächste Schritte

- Claude API für live Dialog
- Backend für Sessions
- Weitere Lebenslagen
- Landing Page
