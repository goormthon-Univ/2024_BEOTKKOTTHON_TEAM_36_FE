import { create } from 'apisauce';
import axios from 'axios';

export const baseURL = 'https://maeilmail.site/';

// {
//   "user_id" : 1,
//   "sender" : "홍길동",
//   "sender_info" : "컴퓨터공학과 21학번",
//   "receiver" : "김철수",
//   "receiver_info" : "교수님",
//   "purpose" : "시험 문의"

// }

const setInterceptors = (instance) => {
  instance.interceptors.request.use(
    async (config) => {
      // 여기서 헤더에 토큰 추가
      return config;
      // throw new axios.Cancel();
    },

    (error) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },

    async (error) => {
      return error.response;
    },
  );
  return instance;
};

export const createInstance = (url = baseURL) => {
  const instance = axios.create({ baseURL: url });
  return setInterceptors(instance);
};

export const BB = create({ axiosInstance: createInstance() });
