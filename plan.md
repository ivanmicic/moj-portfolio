# Plan i dnevnik izmena — Mićić Ivan e-Portfolio

Ovaj fajl služi za praćenje plana rada i svih izmena na projektu.
Svaku novu promenu dodaj na vrh sekcije „Dnevnik izmena" sa datumom.

---

## O projektu

- **Cilj:** lični e-portfolio za izradu funkcionalnih web sajtova.
- **Referenca:** https://photocode.co.rs
- **Dizajn:** crno-zlatni luksuzni stil (po priloženoj slici).
- **Jezici:** primarno srpski (SR), sekundarno engleski (EN).
- **Tehnologije:** statički sajt — HTML, CSS, vanilla JavaScript.

## Struktura sajta

- Hero (naslov + slogan)
- Usluge
- O meni (Mićić Ivan)
- Moji radovi (portfolio)
- Proces izrade
- Blog
- Kontakt (email, telefon, forma)

## Kontakt podaci

- **Email:** ivan_micic@hotmail.com
- **Telefon:** 062 8051239

---

## Lista zadataka (TODO)

- [ ] Dopuniti biografiju u sekciji „O meni" (više detalja: iskustvo, tehnologije, obrazovanje)
- [ ] Zameniti placeholder kartice u „Moji radovi" stvarnim projektima
- [ ] Dodati ličnu fotografiju umesto „MI" inicijala
- [x] Napisati prve blog članke (2 objave sa posebnim stranicama)
- [ ] (Opciono) Dodati linkove ka društvenim mrežama
- [ ] (Opciono) Povezati git sa remote repozitorijumom (GitHub) i objaviti sajt online

---

## Dnevnik izmena

### 2026-06-14
- **Logo i header:** umanjen glow i pulsiranje logoa; ime „Mićić Ivan" u title case (Montserrat); uvećani logo (56px) i ime u headeru.
- **Hero tipografija:** blago uvećana „IZRADA", smanjen tagline radi bolje hijerarhije.
- **O meni:** uklonjeni navodnici iz `about.lead` (SR/EN u `i18n.js`).
- **Cache-busting:** verzionisanje `styles.css`, `i18n.js` i `main.js` u `index.html`.
- **Proces izrade:** ikonice ispod brojeva (💡 📊 ✏️ SVG ⚙️ SVG); zupčanik sivi metalik; uklonjen hover — statična zlatna linija na vrhu kartice.
- **Blog:**
  - Dve stranice članaka: `blog/zasto-je-web-sajt-vazan.html`, `blog/pitanja-pre-izrade-web-sajta.html`.
  - Kartice vode na članke (thumb, naslov, link).
  - Thumb smanjen (`aspect-ratio: 16/6`).
  - Kartica 1: live iframe preview ovog sajta sa auto-skrolom (`?embed=1`, logika u `main.js`).
  - Kartica 2: video rukovanja (`assets/video/handshake.mp4`, Pexels).
- **Usluge:** uklonjen hover efekat (kartice nisu klikabilne).

### 2026-06-07 (logo odsjaj — umeren / „na pola puta")
- Efekat spušten na sredinu (jači od starog, ali ne preteran):
  - puls skaliranja 1.0 ↔ 1.08, halo do ~66px (3 sloja), period 1.6s,
  - obrub blago menja boju u ritmu.
- Cache verzija podignuta na `styles.css?v=3`.

### 2026-06-07 (logo odsjaj — maksimalno + cache fix)
- Uzrok „nema razlike": Comet je keširao stari `styles.css`.
  - Dodat cache-busting: `css/styles.css?v=2` u `index.html`.
- Efekat dodatno pojačan da bude nedvosmislen:
  - puls skaliranja 0.94 ↔ 1.16, obrub menja boju (tamnije zlato ↔ svetlo zlato),
  - halo do ~140px (5 slojeva) na vrhuncu, period 1.2s.
- Napomena: u browseru uvek uraditi HARD REFRESH (Ctrl+Shift+R) nakon CSS izmena.

### 2026-06-07 (logo odsjaj — još jači)
- Dodatno pojačan glow (do 4 sloja, halo ~110px) + jači bazni sjaj.
- Pulsiranje uočljivije: dodato blago skaliranje (`scale(1.08)`) uz sjaj; puls ubrzan na 1.3s.

### 2026-06-07 (logo odsjaj — pojačan)
- Pojačan zlatni odsjaj logoa i izraženije pulsiranje:
  - jači i širi `box-shadow` glow (do 3 sloja na vrhuncu),
  - brži puls — `logoGlow` skraćen sa 3.2s na 1.8s.

### 2026-06-07 (najnovije)
- Vraćena (poništena) rotirajuća 3D kartica logoa — na zahtev korisnika.
- Logo „MI" zamenjen logoom „Logo 1" (glava jarca, `assets/img/logo-1.jpg`)
  sa zlatnim odsjajem (glow) koji blago pulsira; primenjeno na header i footer.
  - `index.html`: `.logo__mark > img.logo__img`.
  - `css/styles.css`: tamni okvir + zlatni `box-shadow` glow + `@keyframes logoGlow`
    (3.2s puls), poštuje `prefers-reduced-motion`.

### 2026-06-07 (kasno uveče) — PONIŠTENO
- (Bivši) rotirajući 3D logo MI ↔ Logo 1. Zamenjeno gornjom izmenom.
- `Logo 1.jpg` kopiran iz korena projekta u `assets/img/logo-1.jpg` (i dalje u upotrebi).

### 2026-06-07 (uveče)
- Sekcija „O meni": „MI" placeholder zamenjen avatarom (`assets/img/avatar.png`).
  - `index.html`: `<img class="about__avatar">` umesto `.about__initials`.
  - `css/styles.css`: dodato `.about__avatar` (object-fit: cover) + okvir zadržan.
- Na čekanju (potrebne slike od korisnika):
  - Zamena logoa na sajtu novim logoom (slika 1).
  - Promena fonta slova u logou (slika 4).

### 2026-06-07
- Kreiran `plan.md` za praćenje plana i izmena.
- Inicijalna verzija sajta:
  - `index.html` — sve sekcije sa `data-i18n` atributima
  - `css/styles.css` — crno-zlatna tema, responsivan dizajn, animacije
  - `js/i18n.js` — prevodi SR/EN + prebacivanje jezika (pamti se u `localStorage`)
  - `js/main.js` — sticky navigacija, mobilni meni, scroll-spy, reveal animacije, kontakt forma
  - `README.md` — uputstvo za projekat
  - `.gitignore`
- Postavljeni kontakt podaci (email + telefon).
