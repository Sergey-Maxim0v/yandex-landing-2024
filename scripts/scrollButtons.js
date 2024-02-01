const button2 = document.querySelector(`[data-button-section2]`);
const button4 = document.querySelector(`[data-button-section4]`);
const section2 = document.querySelector(`[data-section2]`);
const section4 = document.querySelector(`[data-section4]`);

const scrollButtons = () => {
  if (!button4 || !button2 || !section4 || !section2) {
    return;
  }

  button2.addEventListener("click", () =>
    section2.scrollIntoView({ behavior: "smooth" }),
  );

  button4.addEventListener("click", () =>
    section4.scrollIntoView({ behavior: "smooth" }),
  );
};

export default scrollButtons;
