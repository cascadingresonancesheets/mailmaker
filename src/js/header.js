import { enableScroll, disableScroll } from "./global.js";

export default function headerInit() {
  // Burger Logic Start
  const header = document.querySelector(".header");
  const menuWrapper = document.querySelector(".menu-wrapper");

  const backDrop = document.createElement("div");
  backDrop.setAttribute("class", "backdrop");

  function openMenu() {
    menuWrapper.classList.add("visible");
    menuWrapper.insertAdjacentElement("beforebegin", backDrop);
    setTimeout(() => {
      backDrop.classList.add("visible");
    }, 1);
  }

  function closeMenu() {
    menuWrapper.classList.remove("visible");
    backDrop.classList.remove("visible");
    setTimeout(() => {
      backDrop.remove();
    }, 300);
  }

  document.addEventListener("click", (e) => {
    if (e.target.closest(".menu-btn")) {
      openMenu();
      disableScroll();
    }
    if (e.target.closest(".menu-wrapper__close-btn")) {
      closeMenu();
      enableScroll();
    }
    if (e.target === backDrop) {
      closeMenu();
      enableScroll();
    }
  });
  // Burger Logic End

  // Header Scroll Class Start
  headerScrollClass();

  window.onscroll = () => {
    headerScrollClass();
  };

  function headerScrollClass() {
    window.scrollY ? header.classList.add("scrolled") : header.classList.remove("scrolled");
  }
  // Header Scroll Class End

  // ScrollTo Start
  const menuItemSolutions = document.querySelector("#solutions-link");
  const sectionSolutions = document.querySelector(".solutions");
  scrollToElement(menuItemSolutions, sectionSolutions);

  const menuItemFeatures = document.querySelector("#features-link");
  const sectionFeatures = document.querySelector(".gdpr");
  scrollToElement(menuItemFeatures, sectionFeatures);

  const menuItemTestimonials = document.querySelector("#testimonials-link");
  const sectionTestimonials = document.querySelector(".testimonials");
  scrollToElement(menuItemTestimonials, sectionTestimonials);

  function scrollToElement(link, section) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      if (menuWrapper.classList.contains("visible")) {
        closeMenu();
        enableScroll();
      }

      const box = section.getBoundingClientRect();
      let y = box.top + window.pageYOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    });
  }
  // ScrollTo End
}
