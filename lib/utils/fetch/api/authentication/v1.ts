import { AxiosPromise } from 'axios';
import { authentication_v1 } from '~@lib/types/lib/utils/fetch/api/authentication/v1';
import { account_v1 } from '~@lib/types/lib/utils/fetch/api/account/v1';
import { MainApi } from '~@lib/utils/fetch/api';

export interface Resources$Authentication {
  login(data: Partial<authentication_v1.Schema$Login>): AxiosPromise<account_v1.Schema$Return>;
  login(data: Partial<authentication_v1.Schema$Login>): void;

  logout(): AxiosPromise<account_v1.Schema$Return>;
  logout(): void;
}

export function Resources$Authentication(this: typeof MainApi): Resources$Authentication {
  return {
    login: data => {
      return this.mountFetchCall({
        url: '/auth/login',
        method: 'POST',
        data: data,
      });
    },

    logout: () => {
      return this.mountFetchCall({
        url: '/auth/logout',
        method: 'POST',
      });
    },
  };
}
