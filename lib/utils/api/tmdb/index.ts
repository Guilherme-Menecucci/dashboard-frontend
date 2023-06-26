import { TReturnVersions as TMoviesVersions, VERSIONS as moviesVersions, movies } from './movies';

type TApiVersionsMovies = keyof TMoviesVersions;

export interface APIList {
  [index: string]: { [index: string]: unknown };
}

export const APIS: APIList = {
  movies: moviesVersions,
};

function GeneratedAPIs<V extends TApiVersionsMovies>(version: V): TMoviesVersions[V] {
  return movies(version);
}

// class GeneratedAPIs<V extends TApiVersionsMovies> {
//   movies: TMoviesVersions[V];

//   constructor(version: V) {
//     this.movies = movies(version);
//   }
// }

const TMDbApi = (() => {
  let v3: TMoviesVersions['v3'] | null;
  // let v4: TMoviesVersions['v4'] | null;

  return {
    getV3: () => {
      if (!v3) v3 = GeneratedAPIs('v3');

      return v3;
    },

    // getV4: function () {
    //   if (v4) return v4;

    //   v4 = GeneratedAPIs('v4');
    // },
  };
})();

// class TMDbApi {
//   private static v3: GeneratedAPIs<'v3'> | null;
//   private static v4: GeneratedAPIs<'v4'> | null;

//   static getV3() {
//     if (!this.v3) {
//       this.v3 = new GeneratedAPIs('v3');
//     }

//     return this.v3;
//   }

//   static getV4() {
//     if (!this.v4) {
//       this.v4 = new GeneratedAPIs('v4');
//     }

//     return this.v4;
//   }
// }

export { TMDbApi };
