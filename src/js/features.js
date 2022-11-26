export default function featuresAnim() {
  const featuresTitle = document.querySelector(".features__title");
  const features = document.querySelector(".features");

  const options = {
    root: null,
    rootMargin: "0px 0px -25% 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      features.classList.add("visible");
      observer.unobserve(entries[0].target);
    }
  }, options);

  observer.observe(featuresTitle);
}
