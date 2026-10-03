// Optional JS for smooth intro animation

window.addEventListener("load", () => {
    const hero = document.querySelector(".hero-banner");
    hero.classList.add("visible");
    const nav = document.querySelector(".navbar");

    nav.style.opacity = "0";
    nav.style.transform = "translateY(-15px)";

    setTimeout(() => {
        nav.style.transition = "all 0.8s ease";
        nav.style.opacity = "1";
        nav.style.transform = "translateY(0)";

    }, 200);

});
