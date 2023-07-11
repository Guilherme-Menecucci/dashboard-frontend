import { MainApi } from '..';
import { Resources$Authentication as Resources$Authentication_v1 } from './v1';

type TVersions = 'v1';

export type TReturnVersions = {
  v1: Resources$Authentication_v1;
};

export const VERSIONS = {
  v1: Resources$Authentication_v1,
};

/**
 *
 * @param version Which version of the API will be used
 *
 * @returns Links related with the version used
 * @throws Error if passed a version not developed
 */
export function authentication<V extends TVersions = 'v1'>(
  this: typeof MainApi,
  version: 'v1',
): TReturnVersions[V];
export function authentication(this: typeof MainApi, version = 'v1') {
  switch (version) {
    case 'v1':
      return Resources$Authentication_v1.bind(this)();
    // default:
    //   throw new Error({ title: 'Not implemented yet', statusCode: 400 });
  }
}
