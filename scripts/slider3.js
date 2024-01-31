import onIntersection from "/scripts/onIntersection.js";

const slider = document.querySelector(`[data-slider3]`);
const slideList = slider.getElementsByClassName("slider3-slide");
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

const animateBtns = () => {
  if (!leftBtn || !rightBtn) {
    return;
  }

  onIntersection({
    element: slideList[0],
    visibleCallback: () => leftBtn.classList.remove(ACTIVE_CLASSNAME),
    hiddenCallback: () => leftBtn.classList.add(ACTIVE_CLASSNAME),
    threshold: 0.6,
  });

  onIntersection({
    element: slideList[slideList.length - 1],
    visibleCallback: () => rightBtn.classList.remove(ACTIVE_CLASSNAME),
    hiddenCallback: () => rightBtn.classList.add(ACTIVE_CLASSNAME),
    threshold: 0.6,
  });
};

const onScroll = (event) => {
  if (!event) {
    return;
  }

  flyPlane();
  animateDots();
  animateBtns();
};

const onClick = (dir) => {
  if (dir !== 1 && dir !== -1) {
    return;
  }
  const scrollWidth = slider.scrollLeft;

  if (dir < 0) {
    slider.scroll(scrollWidth - WIDTH_SLIDE, 0);
  } else {
    slider.scroll(scrollWidth + WIDTH_SLIDE, 0);
  }
};

const slider3Control = () => {
  if (!slider || !leftBtn || !rightBtn) {
    return;
  }

  slider.addEventListener("scroll", (event) => onScroll(event));

  leftBtn.addEventListener("click", () => onClick(-1));
  rightBtn.addEventListener("click", () => onClick(1));
};

export default slider3Control;
