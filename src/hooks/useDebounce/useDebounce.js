import { ref } from 'vue';

// * useDebounce 与 useThrottle，实现了去抖和节流，并思考了hook化的代码风格与常规的 util 代码风格，以及是否有必要将所有的东西都 hook 化
export function debounce(cb, delay = 100) {
  const timer = ref(null);

  const handler = (...args) => {
    clearTimeout(timer.value);
    timer.value = setTimeout(() => {
      cb.apply(this, args);
    }, delay);
  };

  const cancel = () => {
    clearTimeout(timer);
    timer.value = null;
  };

  return {
    handler,
    cancel,
  };
}
