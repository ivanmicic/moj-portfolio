# Mićić Ivan — e-Portfolio

Lični portfolio sajt za izradu funkcionalnih web sajtova „prema vašim potrebama i željama“.

Dvojezičan (primarno **srpski**, sekundarno **engleski**), crno-zlatni luksuzni dizajn, potpuno responzivan.

## Struktura

```
Moj portfolio/
├── index.html          # Glavna (single-page) stranica
├── css/
│   └── styles.css      # Crno-zlatna tema, responsive
├── js/
│   ├── i18n.js         # Prevodi SR/EN + prebacivanje jezika
│   └── main.js         # Navigacija, animacije, kontakt forma
├── assets/
│   └── img/            # Slike
└── README.md
```

## Sekcije

- **Hero** — naslov i slogan
- **Usluge** — usluge koje pružam
- **O meni** — kratka biografija (Mićić Ivan)
- **Moji radovi** — portfolio (placeholder kartice)
- **Proces** — koraci izrade
- **Blog** — najave članaka
- **Kontakt** — email, telefon i forma

## Pokretanje

Sajt je statički — dovoljno je otvoriti `index.html` u pregledaču.
Za lokalni server (preporučeno radi ispravnog rada fontova/putanja):

```bash
# Python
python -m http.server 5500
# pa otvoriti http://localhost:5500
```

## Kako menjati sadržaj

- **Tekstovi (oba jezika):** `js/i18n.js` — objekat `I18N` (`sr` i `en`).
- **Kontakt:** email `ivan_micic@hotmail.com`, tel. `062 8051239` (u `index.html` i `js/main.js`).
- **Boje/font:** CSS promenljive na vrhu `css/styles.css` (`:root`).
- **Radovi/Blog:** zameniti placeholder kartice u `index.html` stvarnim sadržajem.

> TODO: dopuniti biografiju u sekciji „O meni“ (`index.html` i `js/i18n.js` → `about.text`).

## Fontovi

- Naslovi: **Cinzel**
- Slogan: **Great Vibes**
- Tekst/navigacija: **Montserrat**

(Google Fonts, učitani u `index.html`.)
