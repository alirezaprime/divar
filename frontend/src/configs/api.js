import axios from "axios";
// import { request } from "axios";
import { getNewTokens } from "services/token";
import { setCookie } from "src/utils/cookie";
import { getCookie } from "utils/cookie";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      request.headers["Authorization"] = `bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    // console.log(originalRequest);
    if (error.response.status === 401 && !request._retry) {
      originalRequest._retry = true;

      const res = await getNewTokens();
      if (!res?.response) return;
      setCookie(res.response.data);
      console.log(res);

      return api(originalRequest);
    }
  }
);
export default api;
