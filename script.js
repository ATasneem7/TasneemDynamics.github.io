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


// script.js — add/replace with this code

function alignIntroWithLogo() {
  const logo = document.querySelector('.logo');
  const rightPanel = document.querySelector('.right-panel');
  const navbar = document.querySelector('.navbar');

  if (!logo || !rightPanel) return;

  // Get top coordinates relative to the viewport
  const logoRect = logo.getBoundingClientRect();
  const rightRect = rightPanel.getBoundingClientRect();

  // Distance from top of right-panel to top of logo (px)
  let desiredPadding = logoRect.top - rightRect.top;

  // If there is a navbar inside the right-panel, ensure the intro doesn't end up UNDER it.
  // The navbar is absolutely positioned at right-panel top, so make padding at least navbar height + small margin
  const navbarHeight = (navbar && navbar.offsetHeight) ? navbar.offsetHeight : 0;
  const minPadding = navbarHeight + 8; // 8px margin so text isn't jammed under navbar

  // Use whichever is larger (so navbar doesn't hide the intro)
  if (desiredPadding < minPadding) desiredPadding = minPadding;

  // Apply as inline style (overrides CSS static padding)
  rightPanel.style.paddingTop = Math.round(desiredPadding) + 'px';

  // Optional: also set CSS variable for debugging or future use
  document.documentElement.style.setProperty('--right-panel-top-offset', Math.round(desiredPadding) + 'px');
}

// Run on load and on resize (debounced to avoid thrashing)
window.addEventListener('load', () => {
  // existing intro animation (if you have) — keep it
  const intro = document.querySelector(".intro-text");
  if (intro) intro.classList.add("visible");

  // Run alignment after a tiny delay to allow images/fonts to load
  setTimeout(alignIntroWithLogo, 60);
});

let resizeTimer = null;
window.addEventListener('resize', () => {
  if (resizeTimer) clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    alignIntroWithLogo();
  }, 100);
});



