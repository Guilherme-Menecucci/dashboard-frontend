import axios, { AxiosPromise } from 'axios';
import { users_v1 } from '~@types/lib/utils/api/api/users/v1';
import { env } from '~@env/client.mjs';
import { Api } from '~@types/_api';

const fetch = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
});

export const Users = () => {
  return {
    users: Resources$Users(),
  };
};

export interface Resources$Users {
  register(user: Partial<users_v1.Schema$User>): AxiosPromise<Api.TSessionApi>;
  register(user: Partial<users_v1.Schema$User>): void;

  login(user: Partial<users_v1.Schema$User>): AxiosPromise<Api.TSessionApi>;
  login(user: Partial<users_v1.Schema$User>): void;
}

export function Resources$Users(): Resources$Users {
  return {
    register(user) {
      return fetch.post('user/register', user);
    },
    login(user) {
      return fetch.post('user/login', user);
    },
  };
}
