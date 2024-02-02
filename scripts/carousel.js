export default class Carousel {
  slideWidth = 0;
  containerWidth = 0;
  slideQuantity = 0;
  visibleIndex = 0;
  interval = null;
  container = null;
  slideList = null;
  counter = null;
  numberSlides = null;

  constructor({ container, slideList, counter, numberSlides }) {
    this.container = container;
    this.slideList = slideList;
    this.counter = counter;
    this.numberSlides = numberSlides;

    this.serContainerWidth();
    this.setSlideWidth();
    this.setSlideQuantity();
    this.writeCounter();
    this.writeLength();
    this.changeInterval();
  }

  changeInterval() {
    this.interval && clearInterval(this.interval);
    this.interval = setInterval(() => this.changeSlides(1), 4000);
  }

  serContainerWidth() {
    if (!this.container) return;
    this.containerWidth = this.container.getBoundingClientRect().width ?? 0;
  }

  setSlideWidth() {
    if (!this.slideList || !this.slideList[0]) return;
    this.slideWidth = this.slideList[0].getBoundingClientRect().width ?? 0;
  }

  setSlideQuantity() {
    this.slideQuantity = Math.round(this.containerWidth / this.slideWidth);
  }

  writeCounter() {
    this.setSlideQuantity();

    this.counter.innerHTML = String(this.visibleIndex + this.slideQuantity);
  }

  writeLength() {
    this.numberSlides.innerHTML = "" + this.slideList.length;
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
      !this.slideList ||
      !this.slideList[0] ||
      this.slideList.length <= this.slideQuantity
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
      this.visibleIndex = this.slideList.length - this.slideQuantity;
    }

    if (dir > 0 && increment < this.slideList.length) {
      this.visibleIndex = increment;
    }

    if (dir > 0 && increment === this.slideList.length) {
      this.visibleIndex = 0;
    }

    if (dir > 0 && increment > this.slideList.length) {
      this.visibleIndex = 0;
    }

    setTimeout(() => this.writeCounter(), 300);
  }

  scrollToStart() {
    this.visibleIndex = 0;
    this.container.scroll(0, 0);
  }

  changeSlides(dir) {
    if (
      (dir !== 1 && dir !== -1) ||
      !this.slideList ||
      !this.slideList[0] ||
      this.slideList.length <= this.slideQuantity
    ) {
      return;
    }

    this.changeInterval();
    this.setVisibleIndex(dir);
    this.container.scroll(this.visibleIndex * this.slideWidth, 0);
  }
}
