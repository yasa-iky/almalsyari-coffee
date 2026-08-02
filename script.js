const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when nav link is clicked
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

// =======================================
// PINDAHKAN LOGO HERO KHUSUS MOBILE
// =======================================

window.addEventListener("load", () => {

    // hanya untuk HP
    if (window.innerWidth <= 900) {

        const heroDetails = document.querySelector(".hero-details");
        const title = document.querySelector(".hero-details .title");
        const heroLogo = document.querySelector(".hero-image-wrapper");

        // jika elemen ditemukan
        if (heroDetails && title && heroLogo) {

            // pindahkan logo tepat setelah title
            title.insertAdjacentElement("afterend", heroLogo);

        }

    }

});