const throttle = (callback, wait = 100) => {
  let timeout;

  return (e = undefined) => {
    window.clearTimeout(timeout);

    timeout = setTimeout(() => callback(e), wait);
  };
};

export default throttle;
