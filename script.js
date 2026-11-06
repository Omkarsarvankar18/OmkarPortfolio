
// =========================================
// TYPING ANIMATION
// =========================================

const words = [
    "Java Full Stack Developer",
    "Spring Boot Developer",
    "Backend Developer",
    "Software Developer",
    "REST API Developer"
];

const typedElement = document.getElementById("typed");

const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    typedElement.textContent = currentWord.substring(0, charIndex);

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        setTimeout(typeEffect, 1500);
        return;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    charIndex += deleting ? -1 : 1;

    setTimeout(typeEffect, deleting ? 45 : 85);
}

if (reducedMotion) {
    typedElement.textContent = words[0];
} else {
    typeEffect();
}


// =========================================
// MOBILE NAVIGATION
// =========================================

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("open");

    const isOpen = navbar.classList.contains("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});


// Close menu after clicking a navigation link

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});


// =========================================
// ACTIVE NAVIGATION ON SCROLL
// =========================================

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            navLinks.forEach(link => {
                link.classList.remove("active");

                if (
                    link.getAttribute("href") ===
                    "#" + entry.target.id
                ) {
                    link.classList.add("active");
                }
            });

        }

    });

}, {
    rootMargin: "-30% 0px -60% 0px"
});

sections.forEach(section => observer.observe(section));


// =========================================
// HEADER SCROLL EFFECT
// =========================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.style.boxShadow =
            "0 8px 30px rgba(0,0,0,0.25)";
    } else {
        header.style.boxShadow = "none";
    }

});


// =========================================
// FOOTER YEAR
// =========================================

document.getElementById("year").textContent =
    new Date().getFullYear();

