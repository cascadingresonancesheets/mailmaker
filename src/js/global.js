const body = document.querySelector("body");
const header = document.querySelector(".header");

export function disableScroll() {
  body.classList.add("no-scroll");
}

export function enableScroll() {
  body.classList.remove("no-scroll");
}

export function scrollbarOffset(bool) {
  if (bool) {
    body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + "px";
    header.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + "px";
  } else {
    body.style.paddingRight = 0;
    header.style.paddingRight = 0;
  }
}
