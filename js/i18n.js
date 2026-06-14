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
    "hero.sub": "Funkcionalni web sajtovi prema vašim potrebama i željama.",
    "hero.ctaPrimary": "POZOVITE ODMAH",
    "hero.ctaSecondary": "MOJI RADOVI",
    "hero.badge1": "RESPONSIVNI DIZAJN",
    "hero.badge2": "BRZA I OPTIMIZOVANA",
    "hero.badge3": "PREMIUM DIZAJN",

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
    "about.title": "Mićić Ivan",
    "about.lead": "Izrada funkcionalnih web sajtova prema vašim potrebama i željama.",
    "about.text": "Web developer sa strašću ka izradi lepih, brzih i funkcionalnih sajtova. Pratim savremene tehnologije i trudim se da svaki projekat bude prilagođen klijentu — od ideje, preko dizajna, do gotovog rešenja. Dostupan sam za saradnju i freelance projekte.",
    "about.point1": "Individualan pristup svakom klijentu",
    "about.point2": "Moderne tehnologije i čist kod",
    "about.point3": "Komunikacija tokom celog procesa",
    "about.cta": "KONTAKTIRAJTE ME",

    "works.eyebrow": "PORTFOLIO",
    "works.title": "Neki od mojih radova",
    "works.w1.title": "Naziv projekta 01",
    "works.w1.tag": "Web sajt · Dizajn",
    "works.w2.title": "Naziv projekta 02",
    "works.w2.tag": "Landing stranica",
    "works.w3.title": "Naziv projekta 03",
    "works.w3.tag": "Online prodavnica",
    "works.note": "* Zameniti placeholder kartice sa stvarnim radovima.",

    "process.eyebrow": "PROCES",
    "process.title": "Kako izgleda proces izrade",
    "process.p1": "Ideja",
    "process.p2": "Analiza",
    "process.p3": "Dizajn",
    "process.p4": "Izrada",

    "blog.eyebrow": "BLOG",
    "blog.title": "Najnovije sa bloga",
    "blog.b1.title": "Zašto je web sajt važan za tvoj biznis?",
    "blog.b1.text": "Ako imaš firmu a nemaš web sajt, propuštaš brojne prilike za rast poslovanja. Evo zašto je sajt važan…",
    "blog.b2.title": "Pitanja pre izrade web sajta",
    "blog.b2.text": "Nekoliko činjenica na koje treba obratiti pažnju pri izboru osobe koja izrađuje vaš sajt…",
    "blog.readMore": "Pročitaj više →",

    "contact.eyebrow": "KONTAKT",
    "contact.title": "Budimo u kontaktu",
    "contact.lead": "Imate pitanje ili projekat na umu? Javite se — biće mi drago da čujem vašu ideju!",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Telefon",
    "contact.formName": "Ime i prezime",
    "contact.formEmail": "Email adresa",
    "contact.formMessage": "Poruka",
    "contact.formSubmit": "POŠALJI PORUKU",

    "footer.rights": "Sva prava zadržana.",

    "form.required": "Molimo popunite sva polja.",
    "form.invalidEmail": "Unesite ispravnu email adresu.",
    "form.success": "Hvala! Vaša poruka je spremna za slanje."
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
    "hero.sub": "Functional websites built to your needs and wishes.",
    "hero.ctaPrimary": "CALL NOW",
    "hero.ctaSecondary": "MY WORK",
    "hero.badge1": "RESPONSIVE DESIGN",
    "hero.badge2": "FAST & OPTIMIZED",
    "hero.badge3": "PREMIUM DESIGN",

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
    "about.title": "Ivan Mićić",
    "about.lead": "Building functional websites to your needs and wishes.",
    "about.text": "A web developer passionate about building beautiful, fast and functional websites. I follow modern technologies and make sure every project is tailored to the client — from idea, through design, to the finished solution. Available for collaboration and freelance projects.",
    "about.point1": "Individual approach to every client",
    "about.point2": "Modern technologies and clean code",
    "about.point3": "Communication throughout the process",
    "about.cta": "GET IN TOUCH",

    "works.eyebrow": "PORTFOLIO",
    "works.title": "Some of my work",
    "works.w1.title": "Project name 01",
    "works.w1.tag": "Website · Design",
    "works.w2.title": "Project name 02",
    "works.w2.tag": "Landing page",
    "works.w3.title": "Project name 03",
    "works.w3.tag": "Online store",
    "works.note": "* Replace the placeholder cards with real work.",

    "process.eyebrow": "PROCESS",
    "process.title": "What the process looks like",
    "process.p1": "Idea",
    "process.p2": "Analysis",
    "process.p3": "Design",
    "process.p4": "Development",

    "blog.eyebrow": "BLOG",
    "blog.title": "Latest from the blog",
    "blog.b1.title": "Why is a website important for your business?",
    "blog.b1.text": "If you own a business but don't have a website, you're missing out on many growth opportunities. Here's why a site matters…",
    "blog.b2.title": "Questions before building a website",
    "blog.b2.text": "A few facts to keep in mind when choosing the person who will build your website…",
    "blog.readMore": "Read more →",

    "contact.eyebrow": "CONTACT",
    "contact.title": "Let's get in touch",
    "contact.lead": "Have a question or a project in mind? Reach out — I'd love to hear your idea!",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Phone",
    "contact.formName": "Full name",
    "contact.formEmail": "Email address",
    "contact.formMessage": "Message",
    "contact.formSubmit": "SEND MESSAGE",

    "footer.rights": "All rights reserved.",

    "form.required": "Please fill in all fields.",
    "form.invalidEmail": "Please enter a valid email address.",
    "form.success": "Thank you! Your message is ready to send."
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
