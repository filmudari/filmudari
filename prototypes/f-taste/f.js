// The play control is a link (the kit's film hero hides a bare button); fd.js opens dialog#video on click,
// so the link must not also jump to #video.
document.querySelectorAll("a[data-video-open]").forEach((a) => a.addEventListener("click", (e) => e.preventDefault()));

// Film page: each film's stand-in key visual (replaced by the team's own material in January).
const filmPhoto = document.querySelector("[data-film-photo]");
if (filmPhoto) {
  const photos = { 1: "f84836658", 2: "f153855336", 3: "f146121088", 4: "f38788172-960", 5: "f29988865-960", 6: "f50291800", 7: "f201947391", 8: "f18531604", 9: "f57206114", 10: "f141373292-960" };
  const n = Number(new URLSearchParams(location.search).get("n")) || 1;
  filmPhoto.src = "assets/img/photo-" + (photos[n] ?? photos[1]) + ".webp";
  if (n === 6) filmPhoto.style.objectPosition = "80% 50%";
}
