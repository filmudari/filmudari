// Shared prototype behaviour. Each variant supplies its own markup; this file only fills and wires it.
(() => {
  const FD = window.FD;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  // lv-LV leaves 4-digit numbers ungrouped; the copy writes "4 380 €".
  const eur = (n) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " €";
  const pad = (n) => String(n).padStart(2, "0");
  const remaining = FD.goal - FD.raised;
  const pct = (FD.raised / FD.goal) * 100;
  const pctText = (p) => p.toLocaleString("lv-LV", { maximumFractionDigits: 1 }) + " %";

  const filmFields = (f) => ({
    num: pad(f.n),
    title: f.title,
    idea: f.idea,
    total: eur(f.total),
    supporters: String(f.supporters),
    reference: "Ziedojums – " + f.title,
    note: "Tavs ziedojums tiks atzīmēts kā atbalsts filmai „" + f.title + "”."
  });

  function fill(root, fields) {
    root.querySelectorAll("[data-f]").forEach((el) => {
      const v = fields[el.dataset.f];
      if (v !== undefined) el.textContent = v;
    });
  }

  // Lists rendered from a <template>: data-render="films" | "supporters", data-template="#id".
  document.querySelectorAll("[data-render]").forEach((host) => {
    const tpl = document.querySelector(host.dataset.template);
    const kind = host.dataset.render;
    const items = kind === "films" ? FD.films : FD.supporters;
    items.forEach((item, i) => {
      const node = tpl.content.cloneNode(true);
      const el = node.firstElementChild;
      if (kind === "films") {
        el.style.setProperty("--accent", item.accent);
        el.style.setProperty("--i", i);
        fill(node, filmFields(item));
        node.querySelectorAll("[data-href]").forEach((a) => (a.href = "film.html?n=" + item.n));
      } else {
        fill(node, { name: item ?? "Anonīms ziedotājs" });
        if (item === null) el.dataset.anonymous = "";
      }
      host.appendChild(node);
    });
  });

  // Film detail page: ?n=1..10, defaults to film 01.
  const filmRoot = document.querySelector("[data-film-page]");
  if (filmRoot) {
    const n = Number(new URLSearchParams(location.search).get("n")) || 1;
    const film = FD.films.find((f) => f.n === n) ?? FD.films[0];
    document.documentElement.style.setProperty("--accent", film.accent);
    document.title = film.title + " · FilmuDari";
    // Skip [data-render] lists so other films' cards keep their own fields.
    document.querySelectorAll("[data-f]").forEach((el) => {
      const v = filmFields(film)[el.dataset.f];
      if (v !== undefined && !el.closest("[data-render]")) el.textContent = v;
    });
  }

  // Progress battery: [data-progress] gets --fill (0..1) after first paint; numbers count up.
  document.querySelectorAll("[data-progress]").forEach((bar) => {
    bar.style.setProperty("--target", pct / 100);
    bar.setAttribute("role", "progressbar");
    bar.setAttribute("aria-valuemin", "0");
    bar.setAttribute("aria-valuemax", String(FD.goal));
    bar.setAttribute("aria-valuenow", String(FD.raised));
    bar.setAttribute("aria-valuetext", eur(FD.raised) + " no " + eur(FD.goal));
    requestAnimationFrame(() => requestAnimationFrame(() => bar.classList.add("is-charged")));
  });
  const numbers = { raised: [FD.raised, eur], goal: [FD.goal, eur], remaining: [remaining, eur], percent: [pct, pctText] };
  document.querySelectorAll("[data-num]").forEach((el) => {
    const [value, fmt] = numbers[el.dataset.num];
    const animate = !reduced && el.dataset.num !== "goal";
    if (!animate) return void (el.textContent = fmt(value));
    const start = performance.now(), dur = 1600;
    const tick = (t) => {
      const k = Math.min(1, (t - start) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = fmt(el.dataset.num === "percent" ? Math.round(value * e * 10) / 10 : value * e);
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });

  // Donation form: preset buttons [data-amount], custom input [name=custom], label [data-donate-label].
  document.querySelectorAll("form[data-donate]").forEach((form) => {
    const presets = form.querySelectorAll("[data-amount]");
    const custom = form.querySelector("[name=custom]");
    const submit = form.querySelector("[type=submit]");
    const label = form.querySelector("[data-donate-label]");
    const render = (amount) => {
      const ok = Number.isFinite(amount) && amount >= 2;
      label.textContent = ok ? "Ziedot " + eur(amount) : "Ziedot";
      submit.disabled = !ok;
      custom.setAttribute("aria-invalid", String(custom.value !== "" && !ok));
    };
    presets.forEach((b) =>
      b.addEventListener("click", () => {
        presets.forEach((o) => o.setAttribute("aria-pressed", String(o === b)));
        custom.value = "";
        render(Number(b.dataset.amount));
      })
    );
    custom.addEventListener("input", () => {
      presets.forEach((o) => o.setAttribute("aria-pressed", "false"));
      render(parseFloat(custom.value.replace(",", ".")));
    });
    form.addEventListener("submit", (e) => e.preventDefault());
    render(Number(form.querySelector("[data-amount][aria-pressed=true]")?.dataset.amount ?? NaN));
  });

  // Copy buttons: data-copy="#id-of-element-with-text".
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const text = document.querySelector(btn.dataset.copy).textContent.trim();
      try { await navigator.clipboard.writeText(text); } catch { return; }
      btn.dataset.copied = "";
      setTimeout(() => delete btn.dataset.copied, 1600);
    });
  });

  // Video facade: [data-video-open] opens dialog#video; the real build loads youtube-nocookie on click.
  const dialog = document.querySelector("dialog#video");
  if (dialog) {
    document.querySelectorAll("[data-video-open]").forEach((b) => b.addEventListener("click", () => dialog.showModal()));
    dialog.querySelectorAll("[data-video-close]").forEach((b) => b.addEventListener("click", () => dialog.close()));
    dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });
  }
})();
