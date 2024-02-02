import Carousel from "./carousel.js";
import throttle from "./throttle.js";

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

  const onOptimizedResize = throttle(() => slider4.onResize(), 150);

  window.addEventListener("resize", () => onOptimizedResize());

  leftBtn.addEventListener("click", () => onClick(-1));
  rightBtn.addEventListener("click", () => onClick(1));

  slider4.changeInterval();
};

export default slider4Control;
