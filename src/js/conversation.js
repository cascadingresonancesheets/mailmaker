export default function conversationAnim() {
  const conversation = document.querySelector(".conversations");
  const conversationTitle = document.querySelector(".conversations__title");

  const options = {
    root: null,
    rootMargin: "0px 0px -25% 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      conversation.classList.add("visible");
      observer.unobserve(entries[0].target);
    }
  }, options);

  observer.observe(conversationTitle);
}
