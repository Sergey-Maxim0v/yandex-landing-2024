const container = document.querySelector(`[data-slider4-list]`);
const slideList = container.querySelectorAll(`.slider4-slide`);
const leftBtn = document.querySelector(`[data-slider4-left]`);
const rightBtn = document.querySelector(`[data-slider4-right]`);
const counter = document.querySelector(`[data-slider4-counter]`);
const length = document.querySelector(`[data-slider4-length]`);

class Carousel {
  slideWidth = slideList[0]?.getBoundingClientRect().width + 20 ?? 0;
  containerWidth = container?.getBoundingClientRect().width ?? 0;
  slideQuantity = 0;
  visibleIndex = 0;
  interval = null;

  constructor() {
    this.visibleIndex = 0;

    this.serContainerWidth();
    this.setSlideWidth();
    this.setSlideQuantity();
    this.writeCounter();
    this.writeLength();
    this.changeInterval();
  }

  changeInterval() {
    this.interval && clearInterval(this.interval);
    this.interval = setInterval(() => slider4.changeSlides(1), 4000);
  }

  serContainerWidth() {
    this.containerWidth = container?.getBoundingClientRect().width ?? 0;
  }

  setSlideWidth() {
    this.slideWidth = slideList[0]?.getBoundingClientRect().width ?? 0;
  }

  setSlideQuantity() {
    this.slideQuantity = Math.round(this.containerWidth / this.slideWidth);
  }

  writeCounter() {
    this.setSlideQuantity();

    counter.innerHTML = String(this.visibleIndex + this.slideQuantity);
  }

  writeLength() {
    length.innerHTML = "" + slideList.length;
  }

  onResize() {
    this.scrollToStart();
    this.setSlideWidth();
    this.serContainerWidth();
    this.writeCounter();
    this.changeInterval();
  }

  setVisibleIndex(dir = 1) {
    if (
      (dir !== 1 && dir !== -1) ||
      !slideList[0] ||
      slideList.length <= this.slideQuantity
    ) {
      return;
    }

    const increment = this.visibleIndex + this.slideQuantity;
    const decrement = this.visibleIndex - this.slideQuantity;

    if (dir < 0 && decrement > 0) {
      this.visibleIndex = decrement;
    }

    if (dir < 0 && decrement === 0) {
      this.visibleIndex = 0;
    }

    if (dir < 0 && decrement < 0) {
      this.visibleIndex = slideList.length - this.slideQuantity;
    }

    if (dir > 0 && increment < slideList.length) {
      this.visibleIndex = increment;
    }

    if (dir > 0 && increment === slideList.length) {
      this.visibleIndex = 0;
    }

    if (dir > 0 && increment > slideList.length) {
      this.visibleIndex = 0;
    }

    setTimeout(() => this.writeCounter(), 300);
  }

  scrollToStart() {
    this.visibleIndex = 0;
    container.scroll(0, 0);
  }

  changeSlides(dir) {
    if (
      (dir !== 1 && dir !== -1) ||
      !slideList[0] ||
      slideList.length <= this.slideQuantity
    ) {
      return;
    }

    this.changeInterval();
    this.setVisibleIndex(dir);
    container.scroll(this.visibleIndex * this.slideWidth, 0);
  }
}

const slider4 = new Carousel();

const slider4Control = () => {
  if (!container || !slideList || !slideList.length || !length || !counter) {
    return;
  }

  const onClick = (dir) => slider4.changeSlides(dir);

  window.addEventListener("resize", () => slider4.onResize());

  leftBtn.addEventListener("click", () => onClick(-1));
  rightBtn.addEventListener("click", () => onClick(1));

  slider4.changeInterval();
};

export default slider4Control;
