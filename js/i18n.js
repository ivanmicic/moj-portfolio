/* ===========================================================
   i18n — dvojezičnost (SR primarno / EN)
   Tekstovi se menjaju preko data-i18n atributa u HTML-u.
   =========================================================== */

const I18N = {
  sr: {
    "nav.services": "USLUGE",
    "nav.about": "O MENI",
    "nav.works": "MOJI RADOVI",
    "nav.blog": "BLOG",
    "nav.contact": "KONTAKT",

    "hero.eyebrow": "DOBRODOŠLI",
    "hero.titleTop": "IZRADA",
    "hero.titleMain": "WEB SAJTOVA",
    "hero.tagline": "Profesionalna i moderna rešenja",
    "hero.sub": "Web sajtovi za male biznise u Srbiji — saloni, ordinacije, lokalne firme. Od ideje do objave.",
    "hero.ctaPrimary": "ZAKAŽI RAZGOVOR",
    "hero.ctaSecondary": "MOJI RADOVI",
    "hero.badge1": "RESPONSIVNI DIZAJN",
    "hero.badge2": "BRZA I OPTIMIZOVANA",
    "hero.badge3": "PREMIUM DIZAJN",

    "a11y.scrollDown": "Skroluj dole",
    "a11y.theme": "Tema",
    "a11y.themeDark": "Tamna tema",
    "a11y.themeLight": "Svetla tema",

    "services.eyebrow": "ŠTA RADIM",
    "services.title": "Usluge koje pružam",
    "services.s1.title": "Web dizajn",
    "services.s1.text": "Čist, moderan i prepoznatljiv dizajn fokusiran na tipografiju, sadržaj i poruku koju želite da prenesete.",
    "services.s2.title": "Izrada web sajtova",
    "services.s2.text": "Responsive razvoj koji omogućava da vaš sajt izgleda odlično na svim uređajima, uz savremene tehnologije.",
    "services.s3.title": "Optimizacija i brzina",
    "services.s3.text": "Brzo učitavanje, SEO osnove i optimizacija performansi kako bi vaš sajt bio vidljiv i prijatan za korišćenje.",
    "services.s4.title": "Održavanje i podrška",
    "services.s4.text": "Redovno ažuriranje, izmene i tehnička podrška kako bi vaš sajt uvek radio besprekorno.",

    "about.eyebrow": "O MENI",
    "about.title": "Ivan Mićić - Web Atelier Studio",
    "about.lead": "Izrada funkcionalnih web sajtova prema vašim potrebama i željama.",
    "about.text": "Kombinujem no-code alate (Webflow) i ručno kodiranje (HTML, CSS, JavaScript) — biram ono što projektu daje najbolji rezultat: brzinu, fleksibilnost i pouzdanost.",
    "about.point1": "Individualan pristup svakom klijentu",
    "about.point2": "Pravi alat za pravi projekat — no-code ili kod",
    "about.point3": "Komunikacija tokom celog procesa",
    "about.cta": "KONTAKTIRAJTE ME",

    "works.eyebrow": "PORTFOLIO",
    "works.title": "Neki od mojih radova",
    "works.w1.title": "Moj zubar",
    "works.w1.tag": "Web sajt · Stomatologija",
    "works.w1.text": "Moderni web sajt za stomatološku ordinaciju „Moj zubar“ iz Požarevca — usluge, informacije i jednostavan kontakt za pacijente.",
    "works.w1.link": "Poseti sajt →",
    "works.w1.role": "Dizajn, izrada i objava · responsive · Vercel",
    "works.w1.meta": "Responzivan · Forma za kontakt · SEO osnove",
    "works.w1.brandSub": "stomatološka ordinacija",
    "works.w2.title": "Beauty & Life",
    "works.w2.tag": "Web sajt · Kozmetika",
    "works.w2.text": "Moderni web sajt za kozmetički salon „Beauty and Life“ iz Požarevca — usluge, cenovnik, zakazivanje termina i kontakt.",
    "works.w2.link": "Poseti sajt →",
    "works.w2.role": "Dizajn, izrada i objava · responsive · Vercel",
    "works.w2.meta": "Responzivan · Cenovnik · Forma za termin",
    "works.w2.brandSub": "kozmetički salon",
    "works.w3.title": "Moj Šarm",
    "works.w3.tag": "Web sajt · Frizerski salon",
    "works.w3.text": "Moderni web sajt za frizersko-kozmetički salon „Moj Šarm“ iz Požarevca — usluge, cenovnik, zakazivanje termina i kontakt.",
    "works.w3.link": "Poseti sajt →",
    "works.w3.brandSub": "frizersko-kozmetički salon",
    "works.w3.role": "Dizajn, izrada i objava · responsive · Vercel",
    "works.w3.meta": "Responzivan · Cenovnik · Online zakazivanje",

    "trust.label": "Projekti u produkciji",
    "trust.lead": "Sajtovi koje sam izradio — dostupni online, u stvarnoj upotrebi.",

    "process.eyebrow": "PROCES",
    "process.title": "Kako izgleda proces izrade",
    "process.p1": "Ideja",
    "process.p2": "Analiza",
    "process.p3": "Dizajn",
    "process.p4": "Izrada",

    "blog.eyebrow": "BLOG",
    "blog.title": "Najnovije sa bloga",
    "blog.b1.title": "Zašto je web sajt važan za vaš biznis?",
    "blog.b1.text": "Ako imate firmu a nemate web sajt, propuštate brojne prilike za rast poslovanja. Evo zašto je sajt važan…",
    "blog.b2.title": "Pitanja pre izrade web sajta",
    "blog.b2.text": "Nekoliko činjenica na koje treba obratiti pažnju pri izboru osobe koja izrađuje vaš sajt…",
    "blog.readMore": "Pročitaj više →",
    "blog.article.back": "Nazad na blog",
    "blog.a1.cta.text": "Spremni ste da prestanete da propuštate prilike?",
    "blog.a1.cta.btn": "ZAKAŽI BESPLATNU KONSULTACIJU",
    "blog.a2.cta.text": "Tražite saradnika koji vas razume i isporučuje ono što obeća?",
    "blog.a2.cta.btn": "KONTAKTIRAJTE ME",

    "contact.eyebrow": "KONTAKT",
    "contact.title": "Budimo u kontaktu",
    "contact.lead": "Imate pitanje ili projekat na umu? Javite se — biće mi drago da čujem vašu ideju!",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Telefon",
    "contact.formName": "Ime i prezime",
    "contact.formEmail": "Email adresa",
    "contact.formMessage": "Poruka",
    "contact.formSubmit": "POŠALJI PORUKU",

    "footer.copy": "Web Atelier Studio · Ivan Mićić",
    "footer.rights": "Sva prava zadržana.",

    "form.required": "Molimo popunite sva polja.",
    "form.invalidEmail": "Unesite ispravnu email adresu.",
    "form.success": "Hvala! Otvoriće se vaš email klijent sa popunjenom porukom — pošaljite je da me kontaktirate."
  },

  en: {
    "nav.services": "SERVICES",
    "nav.about": "ABOUT",
    "nav.works": "MY WORK",
    "nav.blog": "BLOG",
    "nav.contact": "CONTACT",

    "hero.eyebrow": "WELCOME",
    "hero.titleTop": "WEBSITE",
    "hero.titleMain": "DEVELOPMENT",
    "hero.tagline": "Professional and modern solutions",
    "hero.sub": "Websites for small businesses in Serbia — salons, clinics, local companies. From idea to launch.",
    "hero.ctaPrimary": "BOOK A CALL",
    "hero.ctaSecondary": "MY WORK",
    "hero.badge1": "RESPONSIVE DESIGN",
    "hero.badge2": "FAST & OPTIMIZED",
    "hero.badge3": "PREMIUM DESIGN",

    "a11y.scrollDown": "Scroll down",
    "a11y.theme": "Theme",
    "a11y.themeDark": "Dark theme",
    "a11y.themeLight": "Light theme",

    "services.eyebrow": "WHAT I DO",
    "services.title": "Services I offer",
    "services.s1.title": "Web design",
    "services.s1.text": "Clean, modern and distinctive design focused on typography, content and the message you want to convey.",
    "services.s2.title": "Website development",
    "services.s2.text": "Responsive development that makes your site look great on every device, using modern technologies.",
    "services.s3.title": "Optimization & speed",
    "services.s3.text": "Fast loading, SEO fundamentals and performance optimization so your site is visible and pleasant to use.",
    "services.s4.title": "Maintenance & support",
    "services.s4.text": "Regular updates, changes and technical support to keep your site running flawlessly.",

    "about.eyebrow": "ABOUT ME",
    "about.title": "Ivan Mićić - Web Atelier Studio",
    "about.lead": "Building functional websites to your needs and wishes.",
    "about.text": "I combine no-code tools (Webflow) and hand-coded development (HTML, CSS, JavaScript) — choosing what gives each project the best result: speed, flexibility and reliability.",
    "about.point1": "Individual approach to every client",
    "about.point2": "The right tool for the right project — no-code or code",
    "about.point3": "Communication throughout the process",
    "about.cta": "GET IN TOUCH",

    "works.eyebrow": "PORTFOLIO",
    "works.title": "Some of my work",
    "works.w1.title": "Moj zubar",
    "works.w1.tag": "Website · Dentistry",
    "works.w1.text": "Modern website for the dental clinic Moj zubar in Požarevac — services, information and easy contact for patients.",
    "works.w1.link": "Visit website →",
    "works.w1.role": "Design, build and launch · responsive · Vercel",
    "works.w1.meta": "Responsive · Contact form · SEO basics",
    "works.w1.brandSub": "dental clinic",
    "works.w2.title": "Beauty & Life",
    "works.w2.tag": "Website · Beauty salon",
    "works.w2.text": "Modern website for the Beauty and Life cosmetic salon in Požarevac — services, pricing, appointment booking and contact.",
    "works.w2.link": "Visit website →",
    "works.w2.role": "Design, build and launch · responsive · Vercel",
    "works.w2.meta": "Responsive · Pricing · Booking form",
    "works.w2.brandSub": "beauty salon",
    "works.w3.title": "Moj Šarm",
    "works.w3.tag": "Website · Hair salon",
    "works.w3.text": "Modern website for the Moj Šarm hair and beauty salon in Požarevac — services, pricing, appointment booking and contact.",
    "works.w3.link": "Visit website →",
    "works.w3.brandSub": "hair & beauty salon",
    "works.w3.role": "Design, build and launch · responsive · Vercel",
    "works.w3.meta": "Responsive · Pricing · Online booking",

    "trust.label": "Live projects",
    "trust.lead": "Websites I built — online and in real use.",

    "process.eyebrow": "PROCESS",
    "process.title": "What the process looks like",
    "process.p1": "Idea",
    "process.p2": "Analysis",
    "process.p3": "Design",
    "process.p4": "Development",

    "blog.eyebrow": "BLOG",
    "blog.title": "Latest from the blog",
    "blog.b1.title": "Why is a website important for your business?",
    "blog.b1.text": "If you run a business but don't have a website, you're missing out on many growth opportunities. Here's why a site matters…",
    "blog.b2.title": "Questions before building a website",
    "blog.b2.text": "A few facts to keep in mind when choosing the person who will build your website…",
    "blog.readMore": "Read more →",
    "blog.article.back": "Back to blog",
    "blog.a1.cta.text": "Ready to stop missing opportunities?",
    "blog.a1.cta.btn": "BOOK A FREE CONSULTATION",
    "blog.a2.cta.text": "Looking for a partner who understands you and delivers what they promise?",
    "blog.a2.cta.btn": "GET IN TOUCH",

    "contact.eyebrow": "CONTACT",
    "contact.title": "Let's get in touch",
    "contact.lead": "Have a question or a project in mind? Reach out — I'd love to hear your idea!",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Phone",
    "contact.formName": "Full name",
    "contact.formEmail": "Email address",
    "contact.formMessage": "Message",
    "contact.formSubmit": "SEND MESSAGE",

    "footer.copy": "Web Atelier Studio · Ivan Mićić",
    "footer.rights": "All rights reserved.",

    "form.required": "Please fill in all fields.",
    "form.invalidEmail": "Please enter a valid email address.",
    "form.success": "Thank you! Your email client will open with a pre-filled message — send it to reach me."
  }
};

const I18nManager = (() => {
  const STORAGE_KEY = "portfolio-lang";
  let current = localStorage.getItem(STORAGE_KEY) || "sr";

  function t(key) {
    return (I18N[current] && I18N[current][key]) || (I18N.sr[key]) || key;
  }

  function apply(lang) {
    current = I18N[lang] ? lang : "sr";
    localStorage.setItem(STORAGE_KEY, current);
    document.documentElement.lang = current;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (I18N[current][key] !== undefined) el.textContent = I18N[current][key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (I18N[current][key] !== undefined) el.setAttribute("aria-label", I18N[current][key]);
    });

    document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === current);
    });
  }

  function init() {
    apply(current);
    document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
      btn.addEventListener("click", () => apply(btn.dataset.lang));
    });
  }

  return { init, apply, t, get current() { return current; } };
})();

window.I18nManager = I18nManager;
document.addEventListener("DOMContentLoaded", I18nManager.init);
