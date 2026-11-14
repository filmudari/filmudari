// Variant H: horizon placeholders, the expanding giving panel, and the mobile ZIEDOT dock.
(() => {
  const FD = window.FD;
  // Horizon height per film n (1..10), so each placeholder sits differently but stays calm.
  const horizon = [46, 62, 34, 70, 52, 40, 58, 30, 66, 44];
  const setHorizon = (el, n) => el.style.setProperty("--h", horizon[n - 1] + "%");

  document.querySelectorAll(".films .film").forEach((li, i) => setHorizon(li, FD.films[i].n));
  const page = document.querySelector("[data-film-page]");
  if (page) {
    const n = Number(new URLSearchParams(location.search).get("n")) || 1;
    const current = FD.films.find((f) => f.n === n) ? n : 1;
    setHorizon(document.documentElement, current);
    document.querySelectorAll(".others a").forEach((a) => {
      if (a.getAttribute("href").endsWith("n=" + current)) a.setAttribute("aria-current", "page");
    });
  }

  const panel = document.getElementById("panel");
  const opener = document.querySelector("[data-open-panel]");
  const open = () => {
    if (!panel || panel.classList.contains("is-open")) return;
    panel.classList.add("is-open");
    opener.setAttribute("aria-expanded", "true");
    opener.hidden = true;
    (panel.querySelector("[aria-pressed=true]") ?? panel.querySelector("button, input"))?.focus({ preventScroll: true });
  };
  opener?.addEventListener("click", open);

  const dock = document.querySelector(".dock");
  const rail = document.querySelector(".rail");
  if (dock && rail) {
    const button = dock.querySelector("[data-dock]");
    let railVisible = true, footVisible = false;
    const sync = () => {
      const show = !railVisible && !footVisible;
      dock.classList.toggle("is-shown", show);
      dock.setAttribute("aria-hidden", String(!show));
      button.tabIndex = show ? 0 : -1;
    };
    new IntersectionObserver(([e]) => { railVisible = e.isIntersecting; sync(); }).observe(rail);
    const foot = document.querySelector(".foot");
    if (foot) new IntersectionObserver(([e]) => { footVisible = e.isIntersecting; sync(); }).observe(foot);
    button.addEventListener("click", () => {
      rail.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      open();
    });
  }
})();
