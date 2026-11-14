// Variant-specific wiring. Runs after ../shared/fd.js has rendered lists and set --target.
(() => {
  const FD = window.FD;
  const MOTIFS = 5;

  // Battery: one cell per film, filled in that film's ink.
  document.querySelectorAll("[data-progress] .cells").forEach((cells) => {
    const charged = (FD.raised / FD.goal) * FD.films.length;
    FD.films.forEach((f, i) => {
      const cell = document.createElement("span");
      cell.className = "cell";
      if (i === Math.floor(charged)) cell.classList.add("is-partial");
      cell.style.setProperty("--i", i);
      cell.style.setProperty("--c", f.accent);
      cell.innerHTML = '<span class="cell-fill"></span><span class="n">' + String(f.n).padStart(2, "0") + "</span>";
      cells.appendChild(cell);
    });
  });

  // Each film keeps the same key-visual motif everywhere it appears.
  document.querySelectorAll("[data-render=films]").forEach((host) => {
    [...host.children].forEach((card, i) => (card.dataset.motif = i % MOTIFS));
  });
  const filmPage = document.querySelector("[data-film-page]");
  if (filmPage) {
    const n = Number(new URLSearchParams(location.search).get("n")) || 1;
    const film = FD.films.find((f) => f.n === n) ?? FD.films[0];
    document.querySelectorAll("[data-own-motif]").forEach((el) => (el.dataset.motif = (film.n - 1) % MOTIFS));
    // fd.js fills every [data-f] on this page with the current film, the rendered strip included,
    // so restore each card's own fields; the strip then skips the film on screen.
    document.querySelectorAll(".more-films [data-render=films] > li").forEach((li, i) => {
      const f = FD.films[i];
      if (f.n === film.n) return li.remove();
      li.querySelector("[data-f=num]").textContent = String(f.n).padStart(2, "0");
      li.querySelector("[data-f=title]").textContent = f.title;
      li.querySelector("[data-f=idea]").textContent = f.idea;
    });
  }

  // Floating ZIEDOT sticker: shown once the hero is gone, hidden while the form is on screen.
  const float = document.querySelector(".float-cta");
  const hero = document.querySelector("[data-hero]");
  const form = document.querySelector("#ziedot");
  if (float && hero && form) {
    const seen = new Map();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => seen.set(e.target, e.isIntersecting));
      float.classList.toggle("is-on", !seen.get(hero) && !seen.get(form));
    });
    io.observe(hero);
    io.observe(form);
  }
})();
