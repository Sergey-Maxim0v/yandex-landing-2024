const button2 = document.querySelector(`[data-button-section2]`);
const button4 = document.querySelector(`[data-button-section4]`);
const section2 = document.querySelector(`[data-section2]`);
const section4 = document.querySelector(`[data-section4]`);

const scrollButtons = () => {
  const onClick = (dir) => {
    if (!section2 || !section4) {
      return;
    }

    const scrollSize =
      dir === 2
        ? section2.getBoundingClientRect().top
        : section4.getBoundingClientRect().top;

    window.scroll({
      top: scrollSize ?? 0,
      left: 0,
      behavior: "smooth",
    });
  };

  button2.addEventListener("click", () => onClick(2));
  button4.addEventListener("click", () => onClick(4));
};

export default scrollButtons;
