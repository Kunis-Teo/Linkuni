import axios from "axios";

const API_BASE_URL = "http://3.38.1.118:8080";
const TEMP_TOKEN =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyYzlmYTE2MjgyZTMzYzJhMDE4MmUzM2YzMjM3MDAwMSIsImlzcyI6InVybCBhcHAiLCJpYXQiOjE2NjE2Njk5NjgsImV4cCI6MTY2MTc1NjM2OH0.FeOKpZexQt3-NGDZx1cLxEvXEcYroyk2DKI8kNWF2SQNYs3l1dnw8kdgiFJN9xigDkMB50c_UMLzKq_f1bk1CA";

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
