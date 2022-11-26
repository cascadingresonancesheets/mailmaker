export default function partnersAnim() {
  const partners = document.querySelector(".partners");
  const topBorder = document.querySelector(".partners__top");
  const bottomBorder = document.querySelector(".partners__bottom");
  const items = document.querySelectorAll(".partners-item");

  function startAnimation() {
    topBorder.classList.add("visible");
    bottomBorder.classList.add("visible");

    bottomBorder.addEventListener("transitionend", () => {
      let i = 1;
      items.forEach((item) => {
        setTimeout(() => item.classList.add("visible"), 90 * i++);
      });
    });
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      startAnimation();
      observer.unobserve(entries[0].target);
    }
  }, options);

  observer.observe(partners);
}
