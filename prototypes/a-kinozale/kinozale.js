(() => {
  const reel = document.getElementById("reel");
  if (!reel) return;
  const buttons = document.querySelectorAll("[data-reel]");
  const step = () => (reel.firstElementChild?.getBoundingClientRect().width ?? 300) + parseFloat(getComputedStyle(reel).columnGap || 0);
  const sync = () => {
    const max = reel.scrollWidth - reel.clientWidth - 2;
    buttons.forEach((b) => (b.disabled = b.dataset.reel < 0 ? reel.scrollLeft <= 2 : reel.scrollLeft >= max));
  };
  buttons.forEach((b) =>
    b.addEventListener("click", () => reel.scrollBy({ left: Number(b.dataset.reel) * step() * 2, behavior: "smooth" }))
  );
  reel.addEventListener("scroll", sync, { passive: true });
  addEventListener("resize", sync);
  sync();
})();
