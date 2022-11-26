import { enableScroll, disableScroll, scrollbarOffset } from "./global.js";

const modal = document.querySelector(".modal");
const modalInner = modal.querySelector(".modal__inner");
const backDrop = document.querySelector(".modal .backdrop");

const singin = document.querySelector(".modal-signin");
const singinBtn = document.querySelector(".header-user-actions__signin");

const singup = document.querySelector(".modal-signup");
const singupBtn = document.querySelector(".header-user-actions__signup");

export default function modalInit() {
  setUpModal(singin, singinBtn);
  setUpModal(singup, singupBtn);
}

function setUpModal(content, btn) {
  btn.addEventListener("click", () => {
    modalInner.appendChild(content);
    content.removeAttribute("hidden");
    openModal(content);
  });

  modalInner.addEventListener("click", (e) => {
    if (!e.target.closest(".modal-sign")) {
      closeModal(content);
    }
  });

  content.querySelector(".close-btn").addEventListener("click", () => {
    closeModal(content);
  });
}

function openModal(content) {
  modal.classList.add("visible");
  setTimeout(() => {
    backDrop.classList.add("visible");
    content.classList.add("visible");
    scrollbarOffset(true);
    disableScroll();
  }, 1);
}

function closeModal(content) {
  content.classList.remove("visible");
  backDrop.classList.remove("visible");
  setTimeout(() => {
    modal.classList.remove("visible");
    modalInner.innerHTML = "";
    enableScroll();
    scrollbarOffset(false);
  }, 300);
}
