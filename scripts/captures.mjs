// Captures pleine page à 390 px et 1440 px + vérifications (scroll horizontal,
// barre d'appel / pied de page, statut ouvert/fermé, générique).
// Usage : npm run build && npm run captures
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const PORT = 4407;
const BASE = `http://127.0.0.1:${PORT}`;
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'captures');
mkdirSync(out, { recursive: true });

const pages = [
  ['accueil', '/'],
  ['chambres', '/chambres/'],
  ['restaurant', '/restaurant/'],
  ['bar-terrasse', '/bar-terrasse/'],
  ['cinema', '/une-scene-de-cinema/'],
  ['evenements', '/evenements/'],
  ['infos-pratiques', '/infos-pratiques/'],
  ['mentions-legales', '/mentions-legales/'],
  ['confidentialite', '/confidentialite/'],
  ['404', '/404.html'],
];
const tailles = [['mobile', 390, 844], ['desktop', 1440, 900]];

const server = spawn(`npx astro preview --port ${PORT} --host 127.0.0.1`, {
  cwd: root, shell: true, stdio: 'ignore',
});
const stop = () => {
  try {
    if (process.platform === 'win32') spawn('taskkill', ['/pid', String(server.pid), '/T', '/F'], { stdio: 'ignore' });
    else server.kill();
  } catch {}
};

async function attendre() {
  for (let i = 0; i < 60; i++) {
    try { const r = await fetch(BASE + '/'); if (r.ok) return; } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error('Serveur preview injoignable');
}

const problemes = [];
try {
  await attendre();
  const browser = await chromium.launch();

  // Image Open Graph + icône Apple (générées depuis scripts/og.html)
  {
    const p = await browser.newPage({ viewport: { width: 1200, height: 900 } });
    await p.goto(pathToFileURL(path.join(root, 'scripts', 'og.html')).href);
    await p.evaluate(() => document.fonts.ready);
    await p.locator('#og').screenshot({ path: path.join(root, 'public', 'og.png') });
    await p.locator('#icon').screenshot({ path: path.join(root, 'public', 'apple-touch-icon.png') });
    await p.close();
  }

  for (const [nom, w, h] of tailles) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    await ctx.addInitScript(() => { try { sessionStorage.setItem('belair-generique', 'vu'); } catch {} });
    const page = await ctx.newPage();
    for (const [slug, url] of pages) {
      await page.goto(BASE + url, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(1800);
      const sw = await page.evaluate(() => document.documentElement.scrollWidth);
      if (sw > w) problemes.push(`${slug} ${nom} : scroll horizontal (${sw}px > ${w}px)`);
      if (nom === 'mobile') {
        // La barre d'appel ne doit pas masquer le dernier contenu du pied de page
        const ok = await page.evaluate(() => {
          window.scrollTo(0, document.body.scrollHeight);
          const bar = document.querySelector('.barre-appel')?.getBoundingClientRect();
          const items = [...document.querySelectorAll('.pied a, .pied p')];
          const last = items[items.length - 1]?.getBoundingClientRect();
          return !bar || !last || last.bottom <= bar.top;
        });
        if (!ok) problemes.push(`${slug} mobile : la barre d'appel masque le pied de page`);
        await page.evaluate(() => window.scrollTo(0, 0));
      }
      await page.screenshot({ path: path.join(out, `${slug}-${nom}.png`), fullPage: true });
    }
    await ctx.close();

    // Le générique, capturé en cours de lecture, puis sauté avec Échap
    const ctx2 = await browser.newContext({ viewport: { width: w, height: h } });
    const p2 = await ctx2.newPage();
    await p2.goto(BASE + '/');
    await p2.waitForTimeout(2600);
    await p2.screenshot({ path: path.join(out, `accueil-generique-${nom}.png`) });
    const visibleAvant = await p2.locator('#generique').isVisible();
    await p2.keyboard.press('Escape');
    await p2.waitForTimeout(700);
    const apres = await p2.locator('#generique').count();
    if (!visibleAvant || apres !== 0) problemes.push(`générique ${nom} : lecture ou saut (Échap) défaillant`);
    await ctx2.close();
  }

  // prefers-reduced-motion : pas de générique
  {
    const ctx = await browser.newContext({ reducedMotion: 'reduce' });
    const p = await ctx.newPage();
    await p.goto(BASE + '/');
    await p.waitForTimeout(300);
    if (await p.locator('#generique').isVisible()) problemes.push('générique affiché malgré prefers-reduced-motion');
    await ctx.close();
  }

  // Statut ouvert / fermé : tests de la fonction avec des horaires d'exemple
  {
    const p = await browser.newPage();
    await p.goto(BASE + '/infos-pratiques/');
    await p.waitForFunction(() => typeof window.belAirStatus === 'function');
    const r = await p.evaluate(() => {
      const f = window.belAirStatus;
      const h = { 1: [], 2: [['12:00', '23:00']], 3: [['12:00', '23:00']], 4: [['12:00', '23:00']], 5: [['12:00', '01:00']], 6: [['12:00', '01:00']], 7: [['12:00', '22:00']] };
      // Dates en UTC ; Paris = UTC+1 en novembre
      return {
        mardiMidi: f(h, new Date('2026-11-24T12:00:00Z')).state, // mardi 13:00 Paris
        mercrediNuit: f(h, new Date('2026-11-24T23:30:00Z')).state, // mercredi 00:30 Paris
        dimancheNuit: f(h, new Date('2026-11-28T23:30:00Z')).state, // dimanche 00:30, créneau du samedi → 01:00
        lundi: f(h, new Date('2026-11-23T15:00:00Z')).label, // lundi fermé
        vide: f({ 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [] }).state,
        affiche: document.querySelector('[data-statut-texte]')?.textContent,
      };
    });
    console.log('Statut (tests) :', JSON.stringify(r));
    if (r.mardiMidi !== 'open' || r.mercrediNuit !== 'closed' || r.dimancheNuit !== 'open' || r.vide !== 'unknown' || !r.lundi.startsWith('Fermé')) {
      problemes.push('statut ouvert/fermé : résultat inattendu');
    }
  }

  await browser.close();
} finally {
  stop();
}

if (problemes.length) { console.log('PROBLÈMES :\n- ' + problemes.join('\n- ')); process.exitCode = 1; }
else console.log(`OK : ${pages.length * 2} captures + générique dans captures/, aucune anomalie détectée.`);
