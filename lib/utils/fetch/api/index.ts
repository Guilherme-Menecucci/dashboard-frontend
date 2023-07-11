/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { env } from '~@lib/env/client.mjs';

import { TReturnVersions as TAccountVersions, account } from './account';
import { TReturnVersions as TAuthenticationVersions, authentication } from './authentication';
import { TReturnVersions as TUserVersions, user } from './user';

type TApiVersions = keyof TUserVersions | keyof TAccountVersions;

export interface APIList<V extends TApiVersions> {
  user: TUserVersions[V];
  account: TAccountVersions[V];
  authentication: TAuthenticationVersions[V];
}

function generateAPIs<V extends TApiVersions>(version: V): APIList<V> {
  return {
    user: user.bind(MainApi)(version),
    account: account.bind(MainApi)(version),
    authentication: authentication.bind(MainApi)(version),
  };
}

const MainApi = (function () {
  let v1: APIList<'v1'> | null;
  let fetch: AxiosInstance | null;

  function createAxiosInstance() {
    const fetch = axios.create({
      baseURL: env.NEXT_PUBLIC_API_URL,
      withCredentials: true,
    });

    // Request interceptor to log verbose information before each request
    fetch.interceptors.request.use(
      config => {
        console.table([
          { type: 'Request:', data: config.method?.toUpperCase() + ' - ' + config.url },
          { type: 'Headers:', data: config.headers },
          { type: 'Data:', data: config.data },
        ]);
        return config;
      },
      error => {
        console.error('Request Error:', error);
        return Promise.reject(error);
      },
    );

    // Response interceptor to log verbose information after each response
    fetch.interceptors.response.use(
      response => {
        console.table([
          { type: 'Response:', data: response.status + ' ' + response.config.url },
          { type: 'Response Data:', data: response.data },
        ]);
        return response;
      },
      error => {
        console.error('Response Error:', error);
        return Promise.reject(error);
      },
    );

    return fetch;
  }

  return {
    pathname: '',
    getV1(): APIList<'v1'> {
      if (!v1) v1 = generateAPIs('v1');

      return v1;
    },
    mountFetchCall(options: AxiosRequestConfig) {
      if (!fetch) {
        fetch = createAxiosInstance();
      }

      return fetch(options);
    },
  };
})();

export { MainApi };
