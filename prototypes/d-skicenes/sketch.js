// Hand-drawn layer for D "Skicenes". Runs after ../shared/fd.js has rendered films and supporters.
// Everything here is decoration: without rough.js the page keeps its CSS borders and plain colour washes.
(() => {
  const NS = "http://www.w3.org/2000/svg";
  const rough = window.rough;
  const root = document.documentElement;
  if (rough) root.classList.add("rough");

  const css = (name, el = root) => getComputedStyle(el).getPropertyValue(name).trim();
  const color = (v, el) => (v && v.startsWith("--") ? css(v, el) : v);
  const svgEl = (tag, attrs = {}) => {
    const el = document.createElementNS(NS, tag);
    for (const k in attrs) el.setAttribute(k, attrs[k]);
    return el;
  };

  // ---------- Film doodles: ink in one round marker stroke, colour as wash + hatch ----------
  // viewBox 240x180. fills: r = rect [x,y,w,h], e = ellipse [cx,cy,w,h], p = polygon points.
  const DOODLES = {
    1: { // last train at a night station
      ink: "M10 152 Q120 148 230 153 M24 160 L28 152 M60 160 L62 151 M100 159 L101 150 M140 159 L140 150 M180 160 L178 151 M216 160 L214 152 M40 70 Q37 104 42 134 L177 136 Q181 102 177 67 Q108 57 40 70 Z M34 71 Q108 50 184 66 M55 86 L79 85 L80 108 L56 109 Z M93 85 L118 84 L118 107 L93 108 Z M132 84 L157 83 L158 106 L133 107 Z M70 142 m-10 0 a10 10 0 1 0 20 0 a10 10 0 1 0 -20 0 M150 143 m-10 0 a10 10 0 1 0 20 0 a10 10 0 1 0 -20 0 M206 150 L204 84 M195 84 Q205 72 215 83 M206 24 A15 15 0 1 0 216 51 A11 11 0 1 1 206 24",
      fills: [{ p: [[40, 70], [177, 66], [177, 136], [42, 134]] }, { e: [205, 92, 30, 18] }]
    },
    2: { // fisherman's boat
      ink: "M38 110 L202 106 Q190 138 152 141 L86 143 Q54 140 38 110 Z M118 108 L121 28 M124 34 L178 94 L125 97 Z M121 28 L138 35 L121 42 M10 154 q15 -10 30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 M24 168 q12 -7 24 0 t24 0 M150 168 q12 -7 24 0 t24 0 M46 46 m-13 0 a13 13 0 1 0 26 0 a13 13 0 1 0 -26 0 M46 20 L46 26 M20 46 L26 46 M28 28 L32 32 M64 28 L60 32",
      fills: [{ p: [[38, 110], [202, 106], [190, 136], [152, 141], [86, 143], [54, 140]] }, { p: [[124, 34], [178, 94], [125, 97]] }]
    },
    3: { // family at one table
      ink: "M28 100 Q120 95 212 99 M32 101 L35 122 Q120 117 206 121 L210 100 M46 122 L48 152 M194 121 L192 152 M14 152 L17 76 M17 112 L32 112 M32 112 L31 152 M226 152 L223 76 M223 112 L208 112 M208 112 L209 152 M114 97 L114 72 L126 71 L126 97 M120 64 q-7 -8 0 -17 q7 9 0 17 M120 0 L120 20 M98 40 Q120 12 142 40 Z M62 96 q8 -10 18 0 M160 95 q8 -10 18 0",
      fills: [{ p: [[32, 101], [210, 100], [206, 121], [35, 122]] }, { p: [[98, 40], [120, 18], [142, 40]] }]
    },
    4: { // a garden where nothing grows
      ink: "M8 152 Q120 140 232 153 M150 148 Q145 112 152 80 M151 106 Q130 92 118 70 M152 92 Q172 78 184 54 M152 82 Q149 60 158 36 M126 82 L112 78 M176 68 L192 64 M156 50 L168 44 M40 118 L77 117 L72 146 L45 146 Z M77 126 L100 106 M49 118 Q58 98 68 117 M104 112 L107 121 M110 106 L116 114 M98 116 L99 124",
      fills: [{ e: [150, 151, 96, 22] }, { p: [[40, 118], [77, 117], [72, 146], [45, 146]] }]
    },
    5: { // two brothers lost in a forest
      ink: "M58 26 L38 70 L50 68 L28 110 L45 108 L22 148 L94 148 L72 108 L88 110 L67 68 L78 70 Z M58 148 L58 160 M182 20 L160 66 L173 64 L150 106 L167 104 L144 146 L220 146 L197 104 L213 106 L190 64 L202 66 Z M182 146 L183 160 M8 162 Q120 156 232 163 M110 114 m-6 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M110 120 L110 140 M110 140 L104 154 M110 140 L116 154 M110 126 L122 132 M132 120 m-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0 M132 125 L132 142 M132 142 L127 154 M132 142 L137 154 M132 130 L122 132",
      fills: [{ p: [[58, 26], [22, 148], [94, 148]] }, { p: [[182, 20], [144, 146], [220, 146]] }]
    },
    6: { // one night in a hospital waiting room
      ink: "M120 46 m-24 0 a24 24 0 1 0 48 0 a24 24 0 1 0 -48 0 M120 46 L120 30 M120 46 L132 53 M26 122 Q120 117 214 122 M32 121 L32 86 Q50 80 68 86 L68 121 M94 120 L94 85 Q112 79 130 85 L130 120 M156 120 L156 86 Q174 80 192 86 L192 121 M36 122 L34 150 M120 120 L120 150 M206 122 L208 150 M8 154 Q120 150 232 156 M190 18 L228 17 L229 56 L191 57 Z M210 18 L210 56 M191 37 L229 36 M24 40 l0 0 M40 24 l0 0",
      fills: [{ e: [120, 46, 48, 48] }, { p: [[94, 85], [130, 85], [130, 120], [94, 120]] }]
    },
    7: { // an actress and her mirror
      ink: "M110 22 C 140 22 156 50 155 82 C 154 116 136 140 110 140 C 82 140 64 114 65 80 C 66 48 82 22 110 22 Z M110 140 L110 158 M80 160 Q110 156 140 160 M98 72 l0 3 M122 72 l0 3 M98 98 Q110 108 122 98 M44 40 m-6 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M40 82 m-6 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M44 124 m-6 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M176 40 m-6 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M180 82 m-6 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M176 124 m-6 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0",
      fills: [{ e: [110, 81, 86, 114] }]
    },
    8: { // back to the home town
      ink: "M8 92 Q120 86 232 90 M78 176 Q110 132 116 92 M178 176 Q138 132 126 92 M128 168 L127 156 M124 140 L123 130 M122 116 L121 108 M170 89 L170 60 L186 45 L203 60 L203 89 M182 89 L182 74 L191 74 L191 89 M30 92 A22 22 0 0 1 74 92 M52 60 L52 52 M28 70 L22 64 M76 70 L82 64 M196 52 L196 40 L201 40 L201 56",
      fills: [{ p: [[170, 60], [186, 45], [203, 60], [203, 89], [170, 89]] }, { e: [52, 92, 44, 40] }]
    },
    9: { // wind from the sea, empty resort
      ink: "M8 60 q14 -8 28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 M8 76 q14 -8 28 0 t28 0 t28 0 M120 76 q14 -8 28 0 t28 0 t28 0 t28 0 M8 120 Q120 112 232 122 M70 162 L84 38 M84 38 L72 96 L92 98 Z M182 162 L181 48 M181 52 L224 62 L222 76 L181 70 M110 30 Q138 22 160 32 M128 44 q18 -6 32 2 M112 152 L140 124 M140 124 L160 152 M120 144 L150 144",
      fills: [{ p: [[84, 38], [72, 96], [92, 98]] }, { p: [[181, 52], [224, 62], [222, 76], [181, 70]] }]
    },
    10: { // first snow, childhood friends
      ink: "M42 52 Q34 28 62 28 Q72 8 100 20 Q122 6 138 28 Q168 24 162 52 Z M184 26 l0 16 M176 34 l16 0 M178 28 l12 12 M190 28 l-12 12 M206 66 l0 12 M200 72 l12 0 M30 84 l0 12 M24 90 l12 0 M8 152 Q60 140 120 148 T232 146 M90 98 m-9 0 a9 9 0 1 0 18 0 a9 9 0 1 0 -18 0 M90 107 L90 132 M90 132 L82 148 M90 132 L98 148 M90 114 L110 122 M140 98 m-9 0 a9 9 0 1 0 18 0 a9 9 0 1 0 -18 0 M140 107 L140 132 M140 132 L132 148 M140 132 L148 148 M140 114 L110 122 M84 108 L96 108 L100 118 M60 70 l0 1 M150 66 l0 1 M178 104 l0 1 M48 120 l0 1 M208 120 l0 1 M120 72 l0 1",
      fills: [{ p: [[42, 52], [36, 30], [62, 28], [100, 18], [138, 28], [164, 32], [162, 52]] }, { e: [120, 152, 230, 18] }]
    }
  };

  const shape = (rc, f, opts) =>
    f.r ? rc.rectangle(...f.r, opts) : f.e ? rc.ellipse(...f.e, opts) : rc.polygon(f.p, opts);
  const plainShape = (f) =>
    f.r ? svgEl("rect", { x: f.r[0], y: f.r[1], width: f.r[2], height: f.r[3] })
      : f.e ? svgEl("ellipse", { cx: f.e[0], cy: f.e[1], rx: f.e[2] / 2, ry: f.e[3] / 2 })
      : svgEl("polygon", { points: f.p.map((p) => p.join(",")).join(" ") });

  function drawDoodle(svg, n, accent, seed) {
    const d = DOODLES[n];
    if (!d) return;
    svg.setAttribute("viewBox", "0 0 240 180");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    svg.replaceChildren();
    const wash = svgEl("g", { fill: accent, "fill-opacity": "0.3" });
    d.fills.forEach((f) => wash.append(plainShape(f)));
    svg.append(wash);
    if (rough) {
      const rc = rough.svg(svg);
      d.fills.forEach((f, i) =>
        svg.append(shape(rc, f, { seed: seed + i, stroke: "none", fill: accent, fillStyle: i ? "cross-hatch" : "hachure", hachureGap: 6.5, fillWeight: 2.4, hachureAngle: -38 + i * 20, roughness: 1.4 }))
      );
    }
    const ink = svgEl("path", { d: d.ink, fill: "none", stroke: css("--ink"), "stroke-width": "4.6", "stroke-linecap": "round", "stroke-linejoin": "round" });
    svg.append(ink);
  }

  // ---------- Hero video scene: a sketched film camera throwing light ----------
  function drawScene(svg) {
    svg.setAttribute("viewBox", "0 0 320 180");
    svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
    svg.setAttribute("aria-hidden", "true");
    const pink = css("--m-pink"), yellow = css("--m-yellow");
    const beam = [[196, 84], [318, 26], [318, 168], [196, 112]];
    const reels = [{ e: [92, 52, 54, 54] }, { e: [152, 46, 62, 62] }];
    const body = { p: [[58, 76], [176, 72], [178, 124], [60, 126]] };
    const wash = svgEl("g");
    const beamPoly = plainShape({ p: beam });
    beamPoly.setAttribute("fill", yellow);
    beamPoly.setAttribute("fill-opacity", "0.55");
    wash.append(beamPoly);
    [...reels, body].forEach((f) => { const s = plainShape(f); s.setAttribute("fill", pink); s.setAttribute("fill-opacity", "0.3"); wash.append(s); });
    svg.append(wash);
    if (rough) {
      const rc = rough.svg(svg);
      svg.append(rc.polygon(beam, { seed: 7, stroke: "none", fill: yellow, fillStyle: "zigzag", hachureGap: 9, fillWeight: 3, hachureAngle: 20, roughness: 1.6 }));
      reels.forEach((f, i) => svg.append(shape(rc, f, { seed: 11 + i, stroke: "none", fill: pink, fillStyle: "hachure", hachureGap: 5.5, fillWeight: 2, hachureAngle: -40 })));
      svg.append(shape(rc, body, { seed: 21, stroke: "none", fill: pink, fillStyle: "cross-hatch", hachureGap: 8, fillWeight: 1.6 }));
    }
    svg.append(svgEl("path", {
      d: "M58 76 Q118 70 176 72 Q180 98 178 124 Q120 128 60 126 Q55 100 58 76 Z M92 52 m-27 0 a27 27 0 1 0 54 0 a27 27 0 1 0 -54 0 M152 46 m-31 0 a31 31 0 1 0 62 0 a31 31 0 1 0 -62 0 M92 52 m-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0 M152 46 m-6 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M176 86 L198 78 L198 118 L177 110 M100 126 L72 172 M118 127 L118 174 M136 126 L164 172 M8 174 Q160 168 312 175 M72 92 L100 92 M72 104 L90 104",
      fill: "none", stroke: css("--ink"), "stroke-width": "3.6", "stroke-linecap": "round", "stroke-linejoin": "round"
    }));
  }

  // ---------- [data-rough] hosts: redrawn to their box on every resize ----------
  let seedCounter = 1;
  function drawHost(host) {
    if (!rough) return;
    host.querySelector(":scope > .rough-layer")?.remove();
    const kind = host.dataset.rough;
    const seed = (host.dataset.seed ||= String(seedCounter++ * 37)) * 1;
    const pad = 14;
    let w = host.offsetWidth, h = host.offsetHeight;
    if (kind === "hatch") w = host.parentElement.clientWidth - 14; // battery fill spans the full body; .fd-fill clips it
    if (!w || !h) return;
    const svg = svgEl("svg", { class: "rough-layer", "aria-hidden": "true", width: w + pad * 2, height: h + pad * 2 });
    svg.style.left = svg.style.top = -pad + "px";
    const rc = rough.svg(svg);
    const ink = css("--ink");
    const fill = color(host.dataset.fill, host);
    const base = { seed, roughness: 1.25, bowing: 1.1, stroke: ink, strokeWidth: 2.6 };

    if (kind === "box") {
      if ("shadow" in host.dataset)
        svg.append(rc.rectangle(pad + 7, pad + 8, w, h, { ...base, stroke: "none", fill: ink, fillStyle: "hachure", hachureGap: 4.5, fillWeight: 1.5, hachureAngle: -45, roughness: 1.6 }));
      svg.append(rc.rectangle(pad, pad, w, h, { ...base, fill: fill || css("--sheet"), fillStyle: "solid", strokeLineDash: "dash" in host.dataset ? [10, 8] : undefined }));
    } else if (kind === "circle") {
      svg.style.zIndex = 1;
      svg.append(rc.ellipse(pad + w / 2, pad + h / 2, w + 6, h + 2, { ...base, stroke: fill || css("--m-pink"), strokeWidth: 3.6, roughness: 1.8, bowing: 2 }));
    } else if (kind === "highlight") {
      // one scribble per rendered text line, so wrapped headings are marked on every line
      const range = document.createRange();
      range.selectNodeContents(host);
      const box = host.getBoundingClientRect();
      const lines = [...range.getClientRects()].filter((r) => r.width > 4);
      const merged = [];
      lines.forEach((r) => {
        const last = merged.at(-1);
        if (last && Math.abs(last.top - r.top) < 4) { last.left = Math.min(last.left, r.left); last.right = Math.max(last.right, r.right); }
        else merged.push({ top: r.top, left: r.left, right: r.right, height: r.height });
      });
      merged.forEach((r, i) => svg.append(rc.rectangle(pad + r.left - box.left - 6, pad + r.top - box.top + r.height * 0.52, r.right - r.left + 12, r.height * 0.4,
        { seed: seed + i, stroke: "none", fill, fillStyle: "zigzag", hachureGap: 5, fillWeight: 6, hachureAngle: -12, roughness: 2.2 })));
    } else if (kind === "hatch") {
      svg.style.left = svg.style.top = -pad + "px";
      svg.append(rc.rectangle(pad + 2, pad + 2, w - 4, h - 4, { seed, stroke: "none", fill: fill || ink, fillStyle: "zigzag", hachureGap: 7, fillWeight: 3.2, hachureAngle: 60, roughness: 1.8 }));
    } else if (kind === "battery") {
      svg.append(rc.rectangle(pad, pad, w, h, { ...base, strokeWidth: 3.4, fill: css("--sheet"), fillStyle: "solid" }));
    }
    host.prepend(svg);
  }

  function drawArrow(svg) {
    if (!rough) { svg.innerHTML = '<path d="M8 60 Q40 6 92 22 M80 10 L94 22 L78 32" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>'; return; }
    const rc = rough.svg(svg);
    const o = { seed: 5, stroke: css("--ink"), strokeWidth: 3.4, roughness: 1.2 };
    svg.append(rc.curve([[8, 62], [30, 24], [62, 14], [92, 22]], o));
    svg.append(rc.linearPath([[78, 9], [94, 22], [77, 33]], o));
  }

  // ---------- Wire up ----------
  document.querySelectorAll(".film").forEach((card, i) => {
    const film = window.FD.films[i];
    drawDoodle(card.querySelector(".doodle"), film.n, film.accent, 100 + i * 10);
    const more = card.querySelector(".more");
    if (more) more.setAttribute("aria-label", film.title + " — " + more.textContent.trim());
  });
  document.querySelectorAll("svg.doodle[data-film-doodle]").forEach((svg) => {
    const n = Number(new URLSearchParams(location.search).get("n")) || 1;
    const film = window.FD.films.find((f) => f.n === n) ?? window.FD.films[0];
    drawDoodle(svg, film.n, film.accent, 400);
  });
  document.querySelectorAll("svg.scene").forEach(drawScene);
  document.querySelectorAll("svg.hero-arrow").forEach(drawArrow);

  const hosts = [...document.querySelectorAll("[data-rough]")];
  const pending = new Set();
  let raf = 0;
  const ro = new ResizeObserver((entries) => {
    entries.forEach((e) => pending.add(e.target));
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => { pending.forEach(drawHost); pending.clear(); });
  });
  hosts.forEach((h) => { drawHost(h); if (h.dataset.rough !== "hatch") ro.observe(h); });
  // the battery hatch spans its parent's width (its own width animates), so it redraws when the parent resizes
  const hatchByParent = new Map(hosts.filter((h) => h.dataset.rough === "hatch").map((h) => [h.parentElement, h]));
  if (hatchByParent.size) {
    const ro2 = new ResizeObserver((entries) => entries.forEach((e) => drawHost(hatchByParent.get(e.target))));
    hatchByParent.forEach((_, p) => ro2.observe(p));
  }
  document.fonts?.ready.then(() => hosts.forEach(drawHost));

  // Floating ZIEDOT appears once the hero's own button scrolls away.
  const floatBtn = document.querySelector(".float-give");
  const heroBtn = document.querySelector("[data-hero-give]");
  const giveSection = document.querySelector("#ziedot");
  if (floatBtn && heroBtn) {
    let heroVisible = true, giveVisible = false;
    const sync = () => floatBtn.classList.toggle("is-on", !heroVisible && !giveVisible);
    new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; sync(); }).observe(heroBtn);
    if (giveSection) new IntersectionObserver(([e]) => { giveVisible = e.isIntersecting; sync(); }).observe(giveSection);
  }
})();
