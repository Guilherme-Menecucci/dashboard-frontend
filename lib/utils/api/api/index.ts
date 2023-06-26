import { TReturnVersions as TUsersVersions, VERSIONS as usersVersions, users } from './users';

type TApiVersionsUsers = keyof TUsersVersions;

export interface APIList {
  [index: string]: { [index: string]: unknown };
}

export const APIS: APIList = {
  users: usersVersions,
};

function GeneratedAPIs<V extends TApiVersionsUsers>(version: V): TUsersVersions[V] {
  return users(version);
}

// class GeneratedAPIs {
//   users;

//   constructor(version: 'v1') {
//     this.users = users(version).users;
//   }
// }

const MainApi = (() => {
  let v1: TUsersVersions['v1'] | null;

  return {
    getV1: () => {
      if (!v1) v1 = GeneratedAPIs('v1');

      return v1;
    },
  };
})();

// class MainApi {
//   private static v1: GeneratedAPIs | null;

//   static getV1() {
//     if (!this.v1) {
//       this.v1 = new GeneratedAPIs('v1');
//     }

//     return this.v1;
//   }
// }

export { MainApi };
