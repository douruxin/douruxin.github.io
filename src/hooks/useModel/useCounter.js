import { ref } from 'vue';
import useModel from './useModel';

function counter() {
  const count = ref(0);
  const decrement = () => {
    count.value -= 1;
  };
  const increment = () => {
    count.value += 1;
  };

  return {
    count,
    decrement,
    increment,
  };
}

export function useCounter() {
  return useModel(counter);
}

/**
 * * 在多个组件调用
 * const { count, decrement, increment } = useCounter();
 */
