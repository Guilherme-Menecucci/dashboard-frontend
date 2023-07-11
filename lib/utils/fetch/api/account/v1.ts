import { AxiosPromise } from 'axios';
import { Api } from '~@types/_api';
import { account_v1 } from '~@types/utils/fetch/api/account/v1';
import { MainApi } from '~@lib/utils/fetch/api';

export interface Resources$Account {
  register(data: Partial<account_v1.Schema$Register>): AxiosPromise<account_v1.Schema$Return>;
  register(data: Partial<account_v1.Schema$Register>): void;

  getSession(): AxiosPromise<Api.TSessionApi>;
  getSession(): void;
}

export function Resources$Account(this: typeof MainApi): Resources$Account {
  return {
    register: data => {
      return this.mountFetchCall({
        url: '/account/register',
        method: 'POST',
        data: data,
      });
    },
    getSession: () => {
      return this.mountFetchCall({
        url: '/account/session',
        method: 'GET',
      });
    },
  };
}
