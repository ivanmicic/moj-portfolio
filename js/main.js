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
      window.location.href = `mailto:webatelierstudio2@gmail.com?subject=${subject}&body=${body}`;

      status.textContent = t("form.success");
      status.classList.add("is-ok");
      form.reset();
    });
  }

  /* --- Blog preview: live skrol ovog sajta --- */
  if (!document.documentElement.classList.contains("is-embed")) {
    initSameOriginScrollPreview({
      viewport: document.querySelector(".post__browser-viewport"),
      src: "index.html?embed=1",
      iframeClass: "post__browser-iframe",
      iframeHeight: 420,
      speed: 1.4,
    });

    initCrossOriginScrollPreview({
      viewports: document.querySelectorAll(".work__browser-viewport"),
      speed: 0.55,
    });

    initBlogHandshakeVideo();
  }
});

function initSameOriginScrollPreview({ viewport, src, iframeClass, iframeHeight, speed }) {
  if (!viewport) return;

  const previewIframe = document.createElement("iframe");
  previewIframe.className = iframeClass;
  previewIframe.src = src;
  previewIframe.title = "";
  previewIframe.tabIndex = -1;
  previewIframe.loading = "lazy";
  viewport.appendChild(previewIframe);

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let scrollY = 0;
  let direction = 1;
  let rafId = null;
  let running = false;

  const tick = () => {
    if (!running) return;
    const win = previewIframe.contentWindow;
    const doc = previewIframe.contentDocument;
    if (win && doc) {
      const max = Math.max(0, doc.documentElement.scrollHeight - win.innerHeight);
      scrollY += direction * (reducedMotion ? 0 : speed);
      if (scrollY >= max) { scrollY = max; direction = -1; }
      if (scrollY <= 0) { scrollY = 0; direction = 1; }
      win.scrollTo(0, scrollY);
    }
    rafId = requestAnimationFrame(tick);
  };

  const start = () => {
    if (reducedMotion) return;
    if (running) return;
    running = true;
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(tick);
  };

  const stop = () => {
    running = false;
    cancelAnimationFrame(rafId);
  };

  previewIframe.addEventListener("load", () => {
    scrollY = 0;
    direction = 1;
    if (reducedMotion) return;
    if (previewIframe.closest(".post")?.getBoundingClientRect().top < window.innerHeight) start();
  });

  const root = previewIframe.closest(".post");
  if (root) {
    new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0.15 }
    ).observe(root);
  }
}

function initCrossOriginScrollPreview({ viewport, viewports, speed, iframeHeight = 7200 }) {
  const targets = viewports ? [...viewports] : viewport ? [viewport] : [];
  targets.forEach((vp) => initCrossOriginScrollPreviewOne(vp, speed, iframeHeight));
}

function initCrossOriginScrollPreviewOne(viewport, speed, iframeHeight = 7200) {
  if (!viewport) return;

  const src = viewport.dataset.previewSrc;
  if (!src) return;

  const scaler = document.createElement("div");
  scaler.className = "work__preview-scaler";
  const previewIframe = document.createElement("iframe");
  previewIframe.className = "work__preview-iframe";
  previewIframe.src = src;
  previewIframe.title = "";
  previewIframe.tabIndex = -1;
  previewIframe.loading = "lazy";
  previewIframe.height = iframeHeight;
  scaler.appendChild(previewIframe);
  viewport.appendChild(scaler);

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let scrollY = 0;
  let direction = 1;
  let rafId = null;
  let running = false;

  const updateScale = () => {
    const scale = viewport.clientWidth / 1280;
    viewport.style.setProperty("--preview-scale", String(scale));
    return scale;
  };

  let scale = updateScale();
  window.addEventListener("resize", () => { scale = updateScale(); });

  const tick = () => {
    if (!running) return;
    const max = Math.max(0, iframeHeight - viewport.clientHeight / scale);
    scrollY += direction * (reducedMotion ? 0 : speed);
    if (scrollY >= max) { scrollY = max; direction = -1; }
    if (scrollY <= 0) { scrollY = 0; direction = 1; }
    scaler.style.transform = `scale(${scale}) translateY(${-scrollY}px)`;
    rafId = requestAnimationFrame(tick);
  };

  const start = () => {
    if (reducedMotion) return;
    if (running) return;
    scale = updateScale();
    running = true;
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(tick);
  };

  const stop = () => {
    running = false;
    cancelAnimationFrame(rafId);
  };

  previewIframe.addEventListener("load", () => {
    scrollY = 0;
    direction = 1;
    scale = updateScale();
    scaler.style.transform = `scale(${scale}) translateY(0)`;
    if (reducedMotion) return;
    if (viewport.closest(".work")?.getBoundingClientRect().top < window.innerHeight) start();
  });

  const root = viewport.closest(".work");
  if (root) {
    new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0.15 }
    ).observe(root);
  }
}

function initBlogHandshakeVideo() {
  const video = document.querySelector(".post__thumb-video");
  if (!video) return;

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  const applyReducedMotion = () => {
    if (!motionQuery.matches) {
      video.hidden = false;
      return;
    }

    video.autoplay = false;
    video.loop = false;
    video.pause();

    if (video.dataset.posterReady) return;
    video.dataset.posterReady = "1";

    const showPoster = () => {
      if (!video.videoWidth) return;
      const poster = document.createElement("img");
      poster.className = "post__thumb-poster";
      poster.alt = "";
      poster.setAttribute("aria-hidden", "true");
      poster.loading = "lazy";
      poster.decoding = "async";
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d").drawImage(video, 0, 0);
      poster.src = canvas.toDataURL("image/jpeg", 0.82);
      video.parentElement?.appendChild(poster);
      video.hidden = true;
    };

    if (video.readyState >= 2) showPoster();
    else {
      video.preload = "auto";
      video.addEventListener("loadeddata", showPoster, { once: true });
      video.load();
    }
  };

  applyReducedMotion();
  motionQuery.addEventListener("change", applyReducedMotion);
}
