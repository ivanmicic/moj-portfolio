/* ===========================================================
   main.js — navigacija, mobilni meni, scroll, animacije, forma
   =========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.querySelectorAll(".nav__link");
  const sections = document.querySelectorAll("section[id]");

  /* --- Sticky header --- */
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* --- Mobilni meni --- */
  const closeMenu = () => {
    nav.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("click", (e) => {
    if (nav.classList.contains("is-open") && !nav.contains(e.target) && !navToggle.contains(e.target)) {
      closeMenu();
    }
  });

  /* --- Aktivni link na osnovu scroll pozicije --- */
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((l) =>
            l.classList.toggle("is-active", l.getAttribute("href") === `#${id}`)
          );
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));

  /* --- Reveal animacije --- */
  const revealTargets = document.querySelectorAll(
    ".card, .work, .post, .step, .about__content, .about__media, .contact__item, .contact__form, .hero-badge"
  );
  revealTargets.forEach((el) => el.setAttribute("data-reveal", ""));
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${(i % 4) * 80}ms`;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealTargets.forEach((el) => revealObserver.observe(el));

  /* --- Godina u footeru --- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* --- Kontakt forma --- */
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const t = (k) => (window.I18nManager ? window.I18nManager.t(k) : k);

      status.className = "form__status";

      if (!name || !email || !message) {
        status.textContent = t("form.required");
        status.classList.add("is-err");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        status.textContent = t("form.invalidEmail");
        status.classList.add("is-err");
        return;
      }

      // Otvara podrazumevani email klijent sa popunjenom porukom.
      const subject = encodeURIComponent(`Poruka sa sajta — ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
      window.location.href = `mailto:ivan_micic@hotmail.com?subject=${subject}&body=${body}`;

      status.textContent = t("form.success");
      status.classList.add("is-ok");
      form.reset();
    });
  }
});
