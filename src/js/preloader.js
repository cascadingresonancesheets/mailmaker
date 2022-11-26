import { enableScroll, disableScroll } from "./global.js";

disableScroll();
export default function preloadDone() {
  const preloader = document.querySelector(".preloader");

  enableScroll();
  preloader.style.opacity = 0;
  preloader.addEventListener("transitionend", () => {
    preloader.classList.add("hidden");
  });
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
