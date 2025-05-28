
document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.className = "smoke-trail";
  trail.style.left = `${e.pageX}px`;
  trail.style.top = `${e.pageY}px`;
  document.body.appendChild(trail);

  // Randomize drift and fade
  const angle = Math.random() * 2 * Math.PI;
  const distance = Math.random() * 10;
  trail.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;

  setTimeout(() => {
    trail.remove();
  }, 1000);
});

let typed = "";
let cursorX = 0;
let cursorY = 0;

document.addEventListener("mousemove", (e) => {
  cursorX = e.pageX;
  cursorY = e.pageY;

  const trail = document.createElement("div");
  trail.className = "smoke-trail";
  trail.style.left = `${cursorX}px`;
  trail.style.top = `${cursorY}px`;
  document.body.appendChild(trail);

  const angle = Math.random() * 2 * Math.PI;
  const distance = Math.random() * 10;
  trail.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;

  setTimeout(() => {
    trail.remove();
  }, 1000);
});

document.addEventListener("keydown", (e) => {
  typed += e.key.toLowerCase();
  if (typed.length > 4) typed = typed.slice(-4);

  if (typed === "cock") {
    for (let i = 0; i < 30; i++) {
      const explosion = document.createElement("div");
      explosion.className = "explosion";
      explosion.style.left = `${cursorX}px`;
      explosion.style.top = `${cursorY}px`;
      document.body.appendChild(explosion);

      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 80;
      explosion.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;

      setTimeout(() => explosion.remove(), 800);
    }
    typed = ""; // reset to prevent retriggering too quickly
  }
});
