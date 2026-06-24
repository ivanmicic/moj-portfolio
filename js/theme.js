/* ===========================================================
   theme.js — dark / light tema (localStorage)
   =========================================================== */

const ThemeManager = (() => {
  const STORAGE_KEY = "portfolio-theme";

  function current() {
    return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function apply(theme) {
    if (document.documentElement.classList.contains("is-embed")) return;

    const next = theme === "light" ? "light" : "dark";
    if (next === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem(STORAGE_KEY, next);
    syncToggle();
  }

  function syncToggle() {
    const active = current();
    document.querySelectorAll(".theme-switch__btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.theme === active);
    });
  }

  function init() {
    if (document.documentElement.classList.contains("is-embed")) return;

    document.querySelectorAll(".theme-switch__btn").forEach((btn) => {
      btn.addEventListener("click", () => apply(btn.dataset.theme));
    });
    syncToggle();
  }

  return { init, apply, current, get currentTheme() { return current(); } };
})();

window.ThemeManager = ThemeManager;
document.addEventListener("DOMContentLoaded", ThemeManager.init);
