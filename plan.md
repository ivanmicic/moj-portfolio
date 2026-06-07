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
- [ ] Napisati prave blog članke (trenutno samo najave)
- [ ] (Opciono) Dodati linkove ka društvenim mrežama
- [ ] (Opciono) Povezati git sa remote repozitorijumom (GitHub) i objaviti sajt online

---

## Dnevnik izmena

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
