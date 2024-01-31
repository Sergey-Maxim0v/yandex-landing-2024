/**
 * @see https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API
 */
const onIntersection = ({
  element,
  visibleCallback,
  hiddenCallback,
  threshold,
  rootMargin,
}) => {
  const options = {
    root: null,
    rootMargin: rootMargin ?? "0px",
    threshold: threshold ?? 0.4,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        visibleCallback();
      } else {
        hiddenCallback();
      }
    });
  }, options);

  element && observer.observe(element);
};

export default onIntersection;
