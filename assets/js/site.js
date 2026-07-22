/* =====================================================
   FILE: assets/js/site.js
   VerbCompass Website
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNavigation = document.querySelector(".site-navigation");

  if (!menuToggle || !siteNavigation) {
    return;
  }

  function closeMenu() {
    menuToggle.setAttribute("aria-expanded", "false");
    siteNavigation.classList.remove("navigation-open");
    document.body.classList.remove("menu-open");
  }

  function openMenu() {
    menuToggle.setAttribute("aria-expanded", "true");
    siteNavigation.classList.add("navigation-open");
    document.body.classList.add("menu-open");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  siteNavigation.addEventListener("click", event => {
    if (event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("click", event => {
    const clickedInsideNavigation = siteNavigation.contains(event.target);
    const clickedMenuToggle = menuToggle.contains(event.target);

    if (!clickedInsideNavigation && !clickedMenuToggle) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeMenu();
      menuToggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });
});
