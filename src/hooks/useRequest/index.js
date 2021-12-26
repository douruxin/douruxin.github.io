import { onMounted } from 'vue';
import { useRequest } from './useRequest';

// * useBook
function fetchBookList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3]);
    }, 1000);
  });
}

function useBook() {
  const { loading, error, result, fetchResource } = useRequest(fetchBookList);

  onMounted(() => {
    fetchResource({ page: 1 });
  });

  return {
    loading,
    error,
    list: result,
  };
}

// * useUser
function fetchUserList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const payload = {
        code: 200,
        data: [11, 22, 33],
        msg: 'success',
      };
      resolve(payload);
    }, 1000);
  });
}

function useUser() {
  const { loading, error, result, fetchResource } = useRequest((params) => {
    // 封装请求返回值
    return fetchUserList(params).then((res) => {
      if (res.code === 200) {
        return res.data;
      }
      return [];
    });
  });

  return {
    loading,
    error,
    result,
    fetchResource,
  };
}

export default {
  useBook,
  useUser,
};
