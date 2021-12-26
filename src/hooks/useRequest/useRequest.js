import { ref } from 'vue';

// * useRequest 用于统一管理网络请求相关状态，而无需在每次网络请求中重复处理 loading、error 等逻辑
export function useRequest(api) {
  const loading = ref(false);
  const result = ref(null);
  const error = ref(null);

  const fetchResource = (params) => {
    loading.value = true;
    return api(params)
      .then((data) => {
        // 按照约定，api 返回的结果直接赋值给 result
        result.value = data;
      })
      .catch((err) => {
        error.value = err;
      })
      .finally(() => {
        loading.value = false;
      });
  };

  return {
    loading,
    error,
    result,
    fetchResource,
  };
}
