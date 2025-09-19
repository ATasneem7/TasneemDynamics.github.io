// Optional JS for smooth intro animation
window.addEventListener("load", () => {
  const intro = document.querySelector(".intro-text");
  intro.style.opacity = 0;
  intro.style.transform = "translateY(20px)";
  
  setTimeout(() => {
    intro.style.transition = "all 1s ease";
    intro.style.opacity = 1;
    intro.style.transform = "translateY(0)";
  }, 300);
});
