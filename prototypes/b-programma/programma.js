// Variant-specific wiring on top of ../shared/fd.js.
(() => {
  const FD = window.FD;
  const pad = (n) => String(n).padStart(2, "0");

  document.querySelectorAll(".entries > .entry").forEach((li, i) => (li.id = "f-" + pad(i + 1)));
  [".index-list a", ".cover-list a"].forEach((sel) => document.querySelectorAll(sel).forEach((a, i) => (a.href = "#f-" + pad(i + 1))));

  const page = document.querySelector("[data-film-page]");
  if (!page) return;
  const n = Number(new URLSearchParams(location.search).get("n")) || 1;
  const i = Math.max(0, FD.films.findIndex((f) => f.n === n));
  document.documentElement.style.setProperty("--i", i);
  const link = (el, film) => {
    el.href = "film.html?n=" + film.n;
    el.querySelector("[data-pf=num]").textContent = pad(film.n);
    el.querySelector("[data-pf=title]").textContent = film.title;
  };
  const count = FD.films.length;
  link(document.querySelector("[data-prev]"), FD.films[(i - 1 + count) % count]);
  link(document.querySelector("[data-next]"), FD.films[(i + 1) % count]);
})();
