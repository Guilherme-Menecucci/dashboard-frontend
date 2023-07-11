import { AxiosPromise } from 'axios';
import { user_v1 } from '~@lib/types/lib/utils/fetch/api/user/v1';
import { MainApi } from '~@lib/utils/fetch/api';

export interface Resources$User {
  list(): AxiosPromise<user_v1.Schema$Users>;
  list(): void;
}

export function Resources$User(this: typeof MainApi): Resources$User {
  return {
    list: () => {
      return this.mountFetchCall({
        url: '/user',
        method: 'GET',
      });
    },
  };
}
