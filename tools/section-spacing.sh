#!/usr/bin/env bash
# Usage: f-spacing.sh [width] [height] [session]
# Prints each top-level section's height, content extent and empty space above/below content,
# lists broken images, and checks horizontal overflow on prototypes/f-taste/index.html.
W=${1:-1440}; H=${2:-900}; export CHROME_DEVTOOLS_AXI_SESSION=${3:-main}
A=chrome-devtools-axi
$A resize "$W" "$H" >/dev/null 2>&1
$A open "http://127.0.0.1:8765/prototypes/f-taste/index.html?nc=$RANDOM" >/dev/null
$A wait 3000 >/dev/null
$A eval "(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += innerHeight) { scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); }
  scrollTo(0, 0);
  const secs = [...document.querySelectorAll('body > header, main > *, body > footer')];
  const rows = secs.map(s => {
    const r = s.getBoundingClientRect();
    let lo = 1e9, hi = -1e9;
    s.querySelectorAll('h1,h2,h3,p,img,picture,figure,form,ul,ol,dl,a,button,input').forEach(k => {
      const b = k.getBoundingClientRect();
      if (b.height > 0 && b.width > 0) { lo = Math.min(lo, b.top); hi = Math.max(hi, b.bottom); }
    });
    return (s.id || s.tagName.toLowerCase() + '.' + String(s.className).split(' ')[0]).padEnd(22) +
      ' h=' + Math.round(r.height) + ' content=' + Math.round(hi - lo) +
      ' emptyTop=' + Math.round(lo - r.top) + ' emptyBottom=' + Math.round(r.bottom - hi);
  });
  const broken = [...document.images].filter(i => i.complete && i.naturalWidth === 0).map(i => i.currentSrc || i.src);
  return rows.join('\n') + '\nbroken images: ' + (broken.join(', ') || 'none') +
    '\noverflow: ' + innerWidth + '/' + document.documentElement.scrollWidth +
    '\npage height: ' + document.body.scrollHeight;
})()" | sed -n 's/^result: //p' | sed 's/^"//; s/"$//; s/\\\\n/\n/g; s/\\n/\n/g; s/\\"/"/g'
