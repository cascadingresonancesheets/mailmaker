window.addEventListener("load", () => {
  const observer = new IntersectionObserver((entry) => {
    if (entry[0].isIntersecting && !animIsTriggered) {
      heroAnim();
    }
  });
  observer.observe(document.querySelector(".hero__title"));
});

let animIsTriggered = false;

function heroAnim() {
  animIsTriggered = true;
  const speed = 28;
  let timeout = 450;

  // Title start
  const title = document.querySelector(".hero__title");
  const titleParts = title.querySelectorAll("span");
  title.style.opacity = 1;

  titleParts.forEach((span) => {
    span.style.opacity = 0;
  });

  titleParts.forEach((span) => {
    const spanSplited = span.innerHTML.split("");

    setTimeout(() => {
      const finalSpan = document.createElement("span");
      span.insertAdjacentElement("beforebegin", finalSpan);
      const spanSplited = span.innerHTML.split("");

      const spanText = span.innerText;
      let i = 0;
      setInterval(() => {
        let spanSlicedText = spanText;

        if (i < spanSplited.length) {
          finalSpan.innerHTML += spanSplited[i++];
          span.innerHTML = spanSlicedText.slice(i);
        }
      }, speed);
    }, timeout);

    timeout += spanSplited.length * speed;
  });
  // Title end

  // Descr start
  const descr = document.querySelector(".hero__descr");
  timeout += 200;

  setTimeout(() => {
    descr.classList.add("visible");
    titleParts.forEach((span) => {
      span.remove();
    });
  }, timeout);
  // Descr end

  // Form start
  const form = document.querySelector(".hero-form");
  const formInput = form.querySelector(".hero-form__input");
  timeout += 200;

  setTimeout(() => {
    form.classList.add("visible");
    formInput.disabled = false;
  }, timeout);
  // Form end

  // Img start
  const img = document.querySelector(".hero__img");
  timeout += 200;

  setTimeout(() => {
    img.classList.add("visible");
  }, timeout);
  // Img end
}
