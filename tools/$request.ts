import axios from "axios";
import { AxiosResponse } from "axios";
import { AxiosError } from "axios";
import { AxiosRequestHeaders } from "axios";

const $request = axios.create({
  // baseURL: "http://123.57.206.230:5000/api/v3/",
  baseURL: "https://wenlan-pavilion.top:5000/api/v3/",
});

$request.interceptors.request.use(
  function (config: AxiosRequestHeaders) {
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  },
);

$request.interceptors.response.use(
  function (response: AxiosResponse) {
    // 对响应数据进行操作
    return response.data;
  },
  function (error: AxiosError) {
    // 对响应错误进行操作
    return Promise.reject(error);
  },
);

export default $request;
