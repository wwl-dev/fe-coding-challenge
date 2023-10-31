import Axios from 'axios';

// import type { RootState } from '@redux/store';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosError, AxiosRequestConfig } from 'axios';

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

interface QueryArgs {
  /**
   * relative API endpoint path
   */
  url: string;
  /**
   * API request method
   */
  method: AxiosRequestConfig['method'];
  /**
   * data that will be sent
   */
  data?: AxiosRequestConfig['data'];
  /**
   * queries that will be added to the request url
   */
  params?: AxiosRequestConfig['params'];
  /**
   * Custom request headers will be added to the request
   */
  headers?: AxiosRequestConfig['headers'];
  /**
   * time in millisecond that the request will be waited before sending
   */
  delay?: number;
}

export const baseApiQuery: BaseQueryFn<QueryArgs, unknown, unknown> = async ({ delay, url, method, data, params, headers }/* api */) => {
  try {
    if (delay !== undefined && delay > 0) {
      await new Promise((resolve) => setTimeout(resolve, delay));
    }

    const requestHeaders: AxiosRequestConfig['headers'] = headers ?? {};

    // const token = (api.getState() as RootState)?.auth?.token;

    // if (token) {
    //   requestHeaders['Authorization'] = `Bearer ${token}`;
    // }

    const result = await axios.request({
      url,
      method,
      data,
      params,
      headers: requestHeaders
    });
    return { data: result.data };
  } catch (ex) {
    const error = ex as AxiosError<{ message: string }>;

    const errorCode = error.code === 'ERR_NETWORK' ? 500 : error.response?.status || 0;
    let errorMessage = '';

    if (error.response && error.response.data) {
      if (Array.isArray(error.response.data)) {
        errorMessage = error.response.data[0].message;
      } else {
        errorMessage = error.response.data.message;
      }
    }

    if (errorCode === 403) {
      errorMessage = errorMessage || "You don't have the permissions for that action.";
    } else if (errorCode === 400) {
      errorMessage = errorMessage || 'There was a problem with that request.';
    } else if (errorCode === 500 || error.code === 'ERR_NETWORK') {
      errorMessage = errorMessage || 'There was a server error.';
    } else if (error.message?.includes('timeout')) {
      errorMessage = errorMessage || 'The request timed out.';
    }

    return {
      error: {
        status: errorCode,
        data: error.response?.data,
        meta: errorMessage
      }
    };
  }
};
