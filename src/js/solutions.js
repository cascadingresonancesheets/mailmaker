export function solutionsTabsInit() {
  const tabs = document.querySelectorAll(".solutions-item-btn");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => {
        item.classList.remove("solutions-item-btn_active");
        item.nextElementSibling.classList.remove("solutions-item-content_active");
      });
      tab.classList.add("solutions-item-btn_active");
      tab.nextElementSibling.classList.add("solutions-item-content_active");
      if (window.innerWidth <= 1200) {
        tab.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    });
  });
}

export function solutionsAnim() {
  const title = document.querySelector(".solutions__title");
  const content = document.querySelector(".solutions-tabs");

  const options = {
    root: null,
    rootMargin: "0px 0px -25% 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      title.classList.add("visible");
      setTimeout(() => {
        content.classList.add("visible");
      }, 400);
      observer.unobserve(entries[0].target);
    }
  }, options);

  observer.observe(title);
}
