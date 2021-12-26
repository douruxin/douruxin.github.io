const map = new WeakMap();

// * useModel 实现了在多个组件共享同一个 hook 状态，展示了一种除 vuex、provide/inject 函数之外跨组件共享数据的方案
export default function useModel(hook) {
  if (!map.get(hook)) {
    const ans = hook();
    map.set(hook, ans);
  }
  return map.get(hook);
}
