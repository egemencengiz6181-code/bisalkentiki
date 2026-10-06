/* İki dilin yapı olarak birebir eşleştiğini doğrular.
   Çalıştırma: npm run check:i18n                                            */

import { UI } from "../src/i18n/ui.js";
import * as siteTr from "../src/data/site.js";
import * as siteEn from "../src/data/site.en.js";
import { PAGES as pagesTr, MENU as menuTr } from "../src/data/institutional.js";
import { PAGES as pagesEn, MENU as menuEn } from "../src/data/institutional.en.js";

const problems = [];
const note = (msg) => problems.push(msg);

/* ---- 1. Arayüz sözlüğü anahtarları ---- */
{
  const tr = new Set(Object.keys(UI.tr));
  const en = new Set(Object.keys(UI.en));
  for (const k of tr) if (!en.has(k)) note(`ui.js: "${k}" İngilizcede yok`);
  for (const k of en) if (!tr.has(k)) note(`ui.js: "${k}" Türkçede yok`);
  for (const [lang, dict] of Object.entries(UI)) {
    for (const [k, v] of Object.entries(dict)) {
      if (typeof v !== "string" || !v.trim()) note(`ui.js[${lang}]: "${k}" boş veya metin değil`);
    }
  }
}

/* ---- 2. site.js export adları ---- */
{
  const tr = new Set(Object.keys(siteTr));
  const en = new Set(Object.keys(siteEn));
  for (const k of tr) if (!en.has(k)) note(`site.en.js: "${k}" export'u eksik`);
  for (const k of en) if (!tr.has(k)) note(`site.js: "${k}" export'u eksik`);

  // Dizi uzunlukları eşleşmeli (kartlar, haberler, yaş grupları…)
  for (const k of tr) {
    if (!en.has(k)) continue;
    const a = siteTr[k];
    const b = siteEn[k];
    if (Array.isArray(a) !== Array.isArray(b)) note(`site: "${k}" tiplerı farklı`);
    else if (Array.isArray(a) && a.length !== b.length) note(`site: "${k}" uzunluk farkı (tr=${a.length}, en=${b.length})`);
  }

  // Dilden bağımsız alanlar birebir aynı olmalı
  const sameAge = siteTr.AGE_GROUPS.every((g, i) =>
    g.code === siteEn.AGE_GROUPS[i].code && g.img === siteEn.AGE_GROUPS[i].img
  );
  if (!sameAge) note("site: AGE_GROUPS code/img alanları iki dilde farklı");

  const sameCats = siteTr.NEWS_CATS.every((c, i) => c.key === siteEn.NEWS_CATS[i].key);
  if (!sameCats) note("site: NEWS_CATS key alanları iki dilde farklı");

  const sameNewsCat = siteTr.NEWS.every((n, i) => n.cat === siteEn.NEWS[i].cat);
  if (!sameNewsCat) note("site: NEWS cat alanları iki dilde farklı");

  for (const k of ["BG"]) {
    if (JSON.stringify(siteTr[k]) !== JSON.stringify(siteEn[k])) note(`site: "${k}" iki dilde aynı olmalı`);
  }
}

/* ---- 3. İçerik sayfaları ---- */
{
  const tr = Object.keys(pagesTr);
  const en = Object.keys(pagesEn);
  for (const s of tr) if (!en.includes(s)) note(`institutional.en.js: "${s}" sayfası eksik`);
  for (const s of en) if (!tr.includes(s)) note(`institutional.js: "${s}" sayfası eksik`);

  for (const slug of tr) {
    if (!pagesEn[slug]) continue;
    const a = pagesTr[slug];
    const b = pagesEn[slug];
    if (a.hero !== b.hero) note(`${slug}: hero görseli farklı`);
    if (a.blocks.length !== b.blocks.length) note(`${slug}: blok sayısı farklı (tr=${a.blocks.length}, en=${b.blocks.length})`);
    a.blocks.forEach((blk, i) => {
      const other = b.blocks[i];
      if (!other) return;
      if (blk.type !== other.type) note(`${slug} blok ${i}: tip farklı (${blk.type} / ${other.type})`);
      for (const field of ["items", "groups", "paragraphs", "sections"]) {
        if (Array.isArray(blk[field]) && Array.isArray(other[field]) && blk[field].length !== other[field].length) {
          note(`${slug} blok ${i}: ${field} uzunluk farkı (tr=${blk[field].length}, en=${other[field].length})`);
        }
      }
    });
  }
}

/* ---- 4. Menü hedefleri ---- */
{
  const targets = (menu) => [
    ...menu.primary.map((i) => i.to || i.href),
    ...menu.groups.flatMap((g) => g.items.map((i) => i.to || i.href)),
  ];
  const a = targets(menuTr);
  const b = targets(menuEn);
  if (a.length !== b.length) note(`MENU: bağlantı sayısı farklı (tr=${a.length}, en=${b.length})`);
  a.forEach((t, i) => {
    const other = b[i];
    // Kariyer bağlantısında yalnızca lang parametresi değişir
    const norm = (x) => String(x).replace(/lang=(tr|en)/, "lang=*");
    if (other && norm(t) !== norm(other)) note(`MENU ${i}: hedef farklı (${t} / ${other})`);
  });
}

/* ---- Sonuç ---- */
if (problems.length) {
  console.error(`\n✗ ${problems.length} i18n sorunu bulundu:\n`);
  for (const p of problems) console.error("  - " + p);
  process.exit(1);
}
console.log("✓ i18n: iki dil yapı olarak eşleşiyor.");
