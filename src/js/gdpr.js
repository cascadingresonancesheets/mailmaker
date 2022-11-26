export default function gdprAnim() {
  const title = document.querySelector(".gdpr__title");
  const descr = document.querySelector(".gdpr__descr");
  const cards = document.querySelector(".gdpr__features");
  const list = document.querySelector(".gdpr__list");

  const options = {
    root: null,
    rootMargin: "0px 0px -30% 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      title.classList.add("visible");
      descr.classList.add("visible");
      cards.classList.add("visible");
      list.classList.add("visible");
      observer.unobserve(entries[0].target);
    }
  }, options);

  observer.observe(descr);
}
