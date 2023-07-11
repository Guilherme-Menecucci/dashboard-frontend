import { MainApi } from '~@lib/utils/fetch/api';

export interface Resources$User {
  list(): void;
}

export function Resources$User(this: typeof MainApi): Resources$User {
  return {
    list: () => {
      return null;
    },
  };
}
