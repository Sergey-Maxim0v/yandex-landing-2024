/**
 * debounce
 * @param callee
 * @param timeoutMs
 */
function debounce(callee, timeoutMs = 200) {
  if (!callee) {
    return;
  }

  return function perform(...args) {
    let previousCall = this.lastCall;

    this.lastCall = Date.now();

    if (previousCall && this.lastCall - previousCall <= timeoutMs) {
      clearTimeout(this.lastCallTimer);
    }

    this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs);
  };
}

export default debounce;
