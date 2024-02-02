import Carousel from "./carousel.js";

const slider4Control = () => {
  const container = document.querySelector(`[data-slider4-list]`);
  const slideList = container.querySelectorAll(`.slider4-slide`);
  const leftBtn = document.querySelector(`[data-slider4-left]`);
  const rightBtn = document.querySelector(`[data-slider4-right]`);
  const counter = document.querySelector(`[data-slider4-counter]`);
  const numberSlides = document.querySelector(`[data-slider4-length]`);

  if (
    !container ||
    !slideList ||
    !slideList.length ||
    !numberSlides ||
    !counter
  ) {
    return;
  }

  const slider4 = new Carousel({
    container,
    slideList,
    counter,
    numberSlides,
  });

  const onClick = (dir) => slider4.changeSlides(dir);

  window.addEventListener("resize", () => slider4.onResize());

  leftBtn.addEventListener("click", () => onClick(-1));
  rightBtn.addEventListener("click", () => onClick(1));

  slider4.changeInterval();
};

export default slider4Control;
