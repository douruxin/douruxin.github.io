export function useThrottle(cb, duration = 100) {
  let start = Date.now();
  return (...args) => {
    const now = Date.now();
    if (now - start >= duration) {
      cb.apply(this, args);
      start = now;
    }
  };
}
