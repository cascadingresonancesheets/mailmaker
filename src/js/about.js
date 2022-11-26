export default function aboutAnim() {
  function percentCounterAnim(elem, speed) {
    let startPercent = 0;
    const finalPercent = elem.innerText;
    elem.innerText = startPercent;

    let i = startPercent;
    setInterval(() => {
      if (i <= finalPercent) {
        elem.innerText = i++;
      }
    }, speed);
  }

  const aboutPercents = document.querySelector(".about-stats__percents");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      percentCounterAnim(document.querySelector("#first-percent"), 7);
      percentCounterAnim(document.querySelector("#second-percent"), 3);
      observer.unobserve(entries[0].target);
    }
  }, options);

  observer.observe(aboutPercents);
}
