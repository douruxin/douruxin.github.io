import { ref, watch, onBeforeUnmount } from 'vue';
import { debounce } from './useDebounce';

export function useAssociateSearch() {
  const keyword = ref('');

  const search = (val) => {
    console.log('search...', val);
    // mock 请求接口获取数据
  };

  // watchEffect(keyword, search) // 原始逻辑，每次都变化请求
  watch(keyword, debounce(search, 1000).handler); // 防抖，停止操作 1 秒后再请求

  onBeforeUnmount(() => {
    debounce(search).cancel();
  });

  return {
    keyword,
  };
}
