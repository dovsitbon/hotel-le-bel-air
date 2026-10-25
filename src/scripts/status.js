// Calcul « Ouvert maintenant / Fermé » en heure de Paris.
// jours : { "1": [["12:00","23:00"]], ... } (1 = lundi, 7 = dimanche)

const NOMS = ['', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
const IDX = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 };

function toMin(hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

function fmt(hhmm) {
  const [h, m] = hhmm.split(':');
  return `${Number(h)} h${m === '00' ? '' : ' ' + m}`;
}

export function parisNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Paris',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);
  const get = (t) => parts.find((p) => p.type === t)?.value;
  return { day: IDX[get('weekday')], min: Number(get('hour')) * 60 + Number(get('minute')) };
}

export function computeStatus(jours, date = new Date()) {
  const hasAny = jours && Object.values(jours).some((s) => Array.isArray(s) && s.length);
  if (!hasAny) return { state: 'unknown', label: 'Horaires à confirmer, appelez-nous' };

  const { day, min } = parisNow(date);
  const prev = day === 1 ? 7 : day - 1;

  // Créneau de la veille qui déborde après minuit
  for (const [o, c] of jours[prev] || []) {
    if (toMin(c) <= toMin(o) && min < toMin(c)) {
      return { state: 'open', label: `Ouvert maintenant, jusqu'à ${fmt(c)}` };
    }
  }
  for (const [o, c] of jours[day] || []) {
    const start = toMin(o);
    const end = toMin(c) <= start ? toMin(c) + 1440 : toMin(c);
    if (min >= start && min < end) {
      return { state: 'open', label: `Ouvert maintenant, jusqu'à ${fmt(c)}` };
    }
  }
  // Prochaine ouverture
  for (let i = 0; i < 8; i++) {
    const d = ((day - 1 + i) % 7) + 1;
    const slots = (jours[d] || []).slice().sort((a, b) => toMin(a[0]) - toMin(b[0]));
    for (const [o] of slots) {
      if (i === 0 && toMin(o) <= min) continue;
      const quand = i === 0 ? "aujourd'hui" : i === 1 ? 'demain' : NOMS[d];
      return { state: 'closed', label: `Fermé, ouvre ${quand} à ${fmt(o)}` };
    }
  }
  return { state: 'closed', label: 'Fermé' };
}
