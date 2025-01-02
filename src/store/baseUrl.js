import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://print.trendline.marketing/api",
});

baseUrl.interceptors.request.use(
  (config) => {
    const lang = localStorage.getItem("i18nextLng");
    if (lang) {
      config.headers["x-lang"] = lang;
    }
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default baseUrl;
