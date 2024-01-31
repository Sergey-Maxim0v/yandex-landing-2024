const slider = document.querySelector(`[data-slider3]`);
const leftBtn = document.querySelector(`[data-slider3-left]`);
const rightBtn = document.querySelector(`[data-slider3-right]`);
const dotListContainer = document.querySelector(`[data-slide3-dotlist]`);
const dotList = dotListContainer?.querySelectorAll("li");
const plane = document.querySelector(`[data-slider3-img]`);

const PLANE_ACTIVE_CLASSNAME = "_animate";
const ACTIVE_CLASSNAME = "_active";
const WIDTH_SLIDE = 370;

let isScroll = false;

const flyPlane = () => {
  if (isScroll) return;

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

const animateDots = () => {
  if (!dotList || !dotList.length) return;

  const scrollWidth = slider.scrollLeft;
  const activeNum = Math.floor((scrollWidth + WIDTH_SLIDE / 2) / WIDTH_SLIDE);

  dotList.forEach((dot) => dot.classList.remove(ACTIVE_CLASSNAME));
  dotList[activeNum] && dotList[activeNum].classList.add(ACTIVE_CLASSNAME);
};

const onScroll = (event) => {
  if (!event) {
    return;
  }

  flyPlane();
  animateDots();
};

const slider3Control = () => {
  if (!slider) {
    return;
  }

  slider.addEventListener("scroll", (event) => onScroll(event));
};

export default slider3Control;
