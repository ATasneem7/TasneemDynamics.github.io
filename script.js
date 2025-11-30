// Optional JS for smooth intro animation

window.addEventListener("load", () => {
  const intro = document.querySelector(".intro-text");
  intro.classList.add("visible");
});

/* ✨✨ ADDED OPTIONAL NAVBAR ANIMATION ✨✨ */
window.addEventListener("load", () => {
  const nav = document.querySelector(".nav-bar");
  nav.style.opacity = "0";
  nav.style.transform = "translateY(-15px)";
  setTimeout(() => {
    nav.style.transition = "all 0.8s ease";
    nav.style.opacity = "1";
    nav.style.transform = "translateY(0)";
  }, 200);
});

// Smooth scroll for nav links (optional but recommended)
document.querySelectorAll('.right-nav__item a').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // move focus for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    }
  });
});


