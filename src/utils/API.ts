import axios from "axios";

const API_BASE_URL = "http://3.38.1.118:8080";
// user 3의 토큰
const TEMP_TOKEN =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyYzlmYTE2MjgyZTMzYzJhMDE4MmUzM2YzMjM3MDAwMSIsImlzcyI6InVybCBhcHAiLCJpYXQiOjE2NjE3NzU2MTEsImV4cCI6MTY2MTg2MjAxMX0.dwhh_fs92D3S-tHTWWH32JGH9QAKPR07AgYydwKBUAsJQLKhoXIJpQoNJMtjJ6qMcehxN1gi5k_-hEHo7nAFrg";

const API = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

API.interceptors.request.use(
  (config) => {
    // 임시로 토큰 껴넣었음
    const token = sessionStorage.getItem("_token") ?? TEMP_TOKEN;
    if (token) {
      // eslint-disable-next-line
      config.headers!["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
