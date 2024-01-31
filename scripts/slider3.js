const slider = document.querySelector(`[data-slider3]`);
const leftBtn = document.querySelector(`[data-slider3-left]`);
const rightBtn = document.querySelector(`[data-slider3-right]`);
const dotListContainer = document.querySelector(`[data-slide3-dotlist]`);
const dotList = dotListContainer?.querySelectorAll("button");
const plane = document.querySelector(`[data-slider3-img]`);

const PLANE_ACTIVE_CLASSNAME = "_animate";

let isScroll = false;

const onScroll = (event) => {
  if (!event) {
    return;
  }

  isScroll = true;

  plane.classList.add(PLANE_ACTIVE_CLASSNAME);

  setTimeout(
    () =>
      plane.classList.contains(PLANE_ACTIVE_CLASSNAME) &&
      plane.classList.remove(PLANE_ACTIVE_CLASSNAME),
    1000,
  );

  setTimeout(() => {
    if (isScroll) {
      isScroll = false;
    }
  }, 2100);
};

const slider3Control = () => {
  if (!slider) {
    return;
  }

  slider.addEventListener("scroll", (event) => !isScroll && onScroll(event));
};

export default slider3Control;
