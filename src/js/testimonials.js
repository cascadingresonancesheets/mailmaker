const slider = new Swiper(".testimonials-slider", {
  loop: true,

  navigation: {
    prevEl: ".testimonials-slider__btn_prev",
    nextEl: ".testimonials-slider__btn_next",
  },

  pagination: {
    el: ".testimonials-pagination",
    bulletClass: "testimonials-pagination__bullet",
    bulletActiveClass: "testimonials-pagination__bullet_active",
  },
});
