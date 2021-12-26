import { onMounted } from 'vue';
import { EventBus } from './eventBus';

// 事件总线，全局单例
const bus = new EventBus();

// * useEventBus 实现了在组件卸载时自动取消当前组件监听的事件，无需重复编写 onUnmounted 代码，这个思路也可以用于 DOM 事件、定时器、网络请求等注册和取消
export default function useEventBus() {
  const eventMap = new Map();

  const instance = {
    eventMap: new Map(),
    // 复用 eventBus 事件收集相关逻辑
    on: bus.on,
    once: bus.once,
    // 清空 eventMap
    clear() {
      this.eventMap.forEach((list, key) => {
        list.forEach((cb) => {
          bus.off(key, cb);
        });
      });
      eventMap.clear();
    },
  };

  // 劫持两个监听方法，收集当前组件对应的事件
  const on = (key, cb) => {
    instance.on(key, cb);
    bus.on(key, cb);
  };

  const once = (key, cb) => {
    instance.once(key, cb);
    bus.once(key, cb);
  };

  onMounted(() => {
    instance.clear();
  });

  return {
    on,
    once,
    off: bus.off.bind(this),
    emit: bus.emit.bind(this),
  };
}
