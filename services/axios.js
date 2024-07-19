import axios from "axios";
import { storeObject, getObject } from "../constants/utils/storage";

export const baseURL = "https://lnbllvjx-5000.asse.devtunnels.ms/";

const api = axios.create({
  baseURL: baseURL,
});

const api2 = axios.create({
  baseURL: baseURL,
});

// Axios interceptor handle access token authentication
api.interceptors.request.use(
  async function (config) {
    const token = await getObject("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token?.access_token}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Handle refreshToken
api.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const token = await getObject("token");

      const newToken = await api2.post("/refresh", {
        headers: {
          Authorization: `token ${token.refresh_token}`,
        },
      });

      token.access_token = newToken.data.access_token;
      await storeObject("token", token);

      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${newToken.data.access_token}`;

      return api(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default api;
