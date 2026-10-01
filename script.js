// ================================
// MOBILE MENU
// ================================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");

    if (navMenu.classList.contains("show-menu")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }
});


// Tutup menu setelah memilih navigasi

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show-menu");

        menuButton.textContent = "☰";

    });

});


// ================================
// ACTIVE NAVIGATION
// ================================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


// ================================
// SCROLL REVEAL ANIMATION
// ================================

const animatedElements = document.querySelectorAll(
    ".section, .hero-text, .hero-visual"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(element => {

    observer.observe(element);

});


// ================================
// PROJECT HOVER EFFECT
// ================================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});


// ================================
// DYNAMIC YEAR
// ================================

const year = new Date().getFullYear();

document.querySelector("footer p").textContent =
    `© ${year} Fadhil Ananta`;