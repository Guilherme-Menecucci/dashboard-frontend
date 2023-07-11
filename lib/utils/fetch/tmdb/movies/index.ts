import { Movies as Movies_v3, Resources$Movies as Resources$Movies_v3 } from './v3';
// import { Movies as Movies_v4, Resources$Movies as Resources$Movies_v4 } from './v4';

// type TVersions = 'v3' | 'v4';
type TVersions = 'v3';

export type TReturnVersions = {
  v3: { movies: Resources$Movies_v3 };
  // v4: Resources$Movies_v4;
};

export const VERSIONS = {
  v3: Resources$Movies_v3,
  // v4: Resources$Movies_v4,
};

/**
 *
 * @param version Which version of the API will be used
 *
 * @returns Links related with the version used
 * @throws Error if passed a version not developed
 */
export function movies<V extends TVersions = 'v3'>(version: V): TReturnVersions[V];
export function movies(version = 'v3') {
  switch (version) {
    case 'v3':
      return Movies_v3();
    // case 'v4':
    //   return Movies_v4().movies;
    // default:
    // throw new Error({ title: 'Not implemented yet', statusCode: 400 });
  }
}
