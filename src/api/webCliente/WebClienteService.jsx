import axios from 'axios';
import {
  requestInterceptorMiddleware,
  requestErrorHandler,
  responseInterceptorMiddleware,
  responseErrorHandler,
} from './middleware/middlewareReqRes';

// Instância base do axios com configurações padrao
export const axiosInstance = axios.create({
  baseURL: '',
  timeout: 15000 // Timeout de 5 segundos
});

//Interceptors
axiosInstance.interceptors.request.use(requestInterceptorMiddleware, requestErrorHandler);
axiosInstance.interceptors.response.use(responseInterceptorMiddleware, responseErrorHandler);

// Função para configurar o token de autorização
export const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
};

// Função genérica GET
export const get = async (url, config = {}) => {
  const response = await axiosInstance.get(url, config);
  return response.data;
};

// Função genérica POST
export const post = async (url, data, config = {}) => {
  const response = await axiosInstance.post(url, data, config);
  return response.data;
};

// Função genérica PUT
export const put = async (url, data, config = {}) => {
  const response = await axiosInstance.put(url, data, config);
  return response.data;
};

// Função genérica DELETE
export const del = async (url, config = {}) => {
  const response = await axiosInstance.delete(url, config);
  return response.data;
};
