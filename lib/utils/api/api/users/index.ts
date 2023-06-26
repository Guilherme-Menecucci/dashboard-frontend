import { Resources$Users as Resources$Users_v1, Users as Users_v1 } from './v1';

type TVersions = 'v1';

export type TReturnVersions = {
  v1: { users: Resources$Users_v1 };
};

export const VERSIONS = {
  v3: Users_v1,
};

/**
 *
 * @param version Which version of the API will be used
 *
 * @returns Links related with the version used
 * @throws Error if passed a version not developed
 */
export function users<V extends TVersions = 'v1'>(version: 'v1'): TReturnVersions[V];
export function users(version = 'v1') {
  switch (version) {
    case 'v1':
      return Users_v1();
    // default:
    //   throw new Error({ title: 'Not implemented yet', statusCode: 400 });
  }
}
