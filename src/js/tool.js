export default function toolAnim() {
  const tool = document.querySelector(".tool");
  const toolTitle = document.querySelector(".tool__title");

  const options = {
    root: null,
    rootMargin: "0px 0px -25% 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      tool.classList.add("visible");
      observer.unobserve(entries[0].target);
    }
  }, options);

  observer.observe(toolTitle);
}
