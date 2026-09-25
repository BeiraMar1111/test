import type { DialogueTurn, PlanStep, SuggestionChip } from '../types'

export const welcomeSuggestions: SuggestionChip[] = [
  {
    id: 'geburt',
    label: 'Unser Baby ist geboren',
    message: 'Unser Baby ist letzte Woche geboren. Was müssen wir jetzt alles erledigen?',
  },
  {
    id: 'erwarten',
    label: 'Wir erwarten ein Kind',
    message: 'Wir erwarten unser erstes Kind. Was sollten wir vor der Geburt vorbereiten?',
  },
  {
    id: 'elterngeld',
    label: 'Elterngeld beantragen',
    message: 'Ich möchte Elterngeld beantragen. Was brauche ich dafür?',
  },
]

export const geburtDialogue: DialogueTurn[] = [
  {
    userMessage: 'Unser Baby ist letzte Woche geboren. Was müssen wir jetzt alles erledigen?',
    botResponse:
      'Herzlichen Glückwunsch! 🎉 Damit ich euren Plan erstellen kann, brauche ich noch ein paar Infos:\n\n• Seid ihr verheiratet?\n• In welchem Bundesland wohnt ihr?',
    suggestions: ['Ja, verheiratet — Berlin', 'Nein, nicht verheiratet — Bayern'],
  },
  {
    userMessage: 'Ja, verheiratet — Berlin',
    botResponse:
      'Super, danke! Noch eine Frage: Habt ihr schon eine Geburtsurkunde vom Standesamt beantragt?',
    suggestions: ['Nein, noch nicht', 'Ja, bereits beantragt'],
  },
  {
    userMessage: 'Nein, noch nicht',
    botResponse:
      'Alles klar! Ich habe euren persönlichen Verwaltungsplan erstellt. Hier sind die 5 wichtigsten Schritte — sortiert nach Priorität und Frist.',
  },
]

export const geburtPlan: PlanStep[] = [
  {
    id: 1,
    behoerde: 'Standesamt',
    leistung: 'Geburtsanmeldung & Geburtsurkunde',
    frist: '1 Woche nach der Geburt',
    priority: 'hoch',
    documents: [
      'Personalausweis / Reisepass beider Eltern',
      'Geburtsbescheinigung (aus der Klinik)',
      'Heiratsurkunde',
    ],
    hint: 'Die Geburtsanmeldung ist der erste und wichtigste Schritt — viele andere Anträge brauchen die Geburtsurkunde.',
  },
  {
    id: 2,
    behoerde: 'Familienkasse',
    leistung: 'Kindergeld beantragen',
    frist: 'Rückwirkend bis 6 Monate möglich',
    priority: 'hoch',
    documents: [
      'Geburtsurkunde des Kindes',
      'Steuer-ID des Kindes',
      'Steuer-IDs beider Eltern',
      'Bankverbindung',
    ],
    hint: 'Kindergeld wird rückwirkend ab Geburt gezahlt — auch wenn ihr erst später beantragt, verliert ihr nichts.',
  },
  {
    id: 3,
    behoerde: 'Elterngeldstelle',
    leistung: 'Elterngeld & Elternzeit planen',
    frist: 'Innerhalb von 3 Monaten nach Geburt',
    priority: 'mittel',
    documents: [
      'Geburtsurkunde',
      'Einkommensnachweise (12 Monate vor Geburt)',
      'Steuer-IDs beider Eltern',
      'Bescheinigung der Krankenkasse',
    ],
    hint: 'Plant die Aufteilung der Elternmonate frühzeitig — die Entscheidung beeinflusst die Höhe des Elterngelds.',
  },
  {
    id: 4,
    behoerde: 'Krankenkasse',
    leistung: 'Familienversicherung anpassen',
    frist: 'Zeitnah nach Geburt',
    priority: 'mittel',
    documents: [
      'Geburtsurkunde',
      'Meldebescheinigung',
      'Personalausweis',
    ],
    hint: 'Kinder sind in der Regel beitragsfrei familienversichert — meldet die Geburt einfach bei eurer Kasse.',
  },
  {
    id: 5,
    behoerde: 'Jugendamt / Kommune',
    leistung: 'Kita-Platz anmelden',
    frist: 'Je früher, desto besser',
    priority: 'niedrig',
    documents: [
      'Geburtsurkunde',
      'Meldebescheinigung',
      'Personalausweis der Eltern',
    ],
    hint: 'In Berlin sind Kita-Plätze knapp — meldet euch schon während der Elternzeit an, auch wenn der Start erst später ist.',
  },
]
