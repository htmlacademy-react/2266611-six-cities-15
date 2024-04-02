import axios, { AxiosInstance } from 'axios';
import { API_URL, REQUEST_TIMEOUT } from '../const';
import { getToken } from '../token';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: API_URL as string,
    timeout: REQUEST_TIMEOUT as number,
  });

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['X-Token'] = token;
    }

    return config;
  }
  );

  return api;
};
