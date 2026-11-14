// Variant G behaviour on top of ../shared/fd.js. Loaded before fd.js so the cells exist when it adds .is-charged.
(() => {
  const { goal, raised } = window.FD;

  // One cell = 100 € on wide screens, 400 € on phones, so every cell stays wide enough to read.
  document.querySelectorAll("[data-cells]").forEach((shell) => {
    const count = matchMedia("(max-width: 640px)").matches ? 30 : 120;
    const unit = goal / count;
    const full = raised / unit;
    shell.style.setProperty("--cells", count);
    for (let i = 0; i < count; i++) {
      const cell = document.createElement("span");
      cell.className = "cell";
      cell.style.setProperty("--i", i);
      cell.style.setProperty("--f", Math.max(0, Math.min(1, full - i)));
      if (i === Math.floor(full)) cell.classList.add("is-lead");
      shell.appendChild(cell);
    }
  });

  // Phone dock: a ZIEDOT bar that hides while the hero button or the form is on screen.
  const dock = document.querySelector(".dock");
  if (dock) {
    const watched = [...document.querySelectorAll("[data-dock-hide]")];
    const visible = new Set();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
      const show = visible.size === 0;
      dock.classList.toggle("is-shown", show);
      dock.inert = !show;
    });
    watched.forEach((el) => io.observe(el));
  }

  // Return focus to the button that opened the video.
  const dialog = document.querySelector("dialog#video");
  if (dialog) {
    let opener = null;
    document.querySelectorAll("[data-video-open]").forEach((b) => b.addEventListener("click", () => (opener = b)));
    dialog.addEventListener("close", () => opener?.focus());
  }
})();
