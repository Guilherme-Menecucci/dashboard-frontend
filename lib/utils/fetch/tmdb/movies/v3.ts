import axios, { AxiosPromise } from 'axios';
import { movies_v3 } from '~@types/lib/utils/fetch/tmdb/movies/v3';
import { env } from '~@env/server.mjs';

const fetch = axios.create({
  baseURL: env.NEXT_PUBLIC_TMDB_URL,
  params: {
    api_key: env.TMDB_V3_KEY,
    language: 'en-US',
  },
});

export const Movies = () => {
  return {
    movies: Resources$Movies(),
  };
};

export interface Resources$Movies {
  search(query: string): AxiosPromise<movies_v3.Schema$Movies>;
  search(query: string): void;

  getTrending(): AxiosPromise<movies_v3.Schema$Movies>;
  getTrending(): void;

  getLatest(): AxiosPromise<movies_v3.Schema$Movie>;
  getLatest(): void;

  getNowPlaying(): AxiosPromise<movies_v3.Schema$Movies>;
  getNowPlaying(): void;

  getPopular(): AxiosPromise<movies_v3.Schema$Movies>;
  getPopular(): void;

  getTopRated(): AxiosPromise<movies_v3.Schema$Movies>;
  getTopRated(): void;

  getUpcoming(): AxiosPromise<movies_v3.Schema$Movies>;
  getUpcoming(): void;
}

export function Resources$Movies(): Resources$Movies {
  return {
    search(query) {
      return fetch.get('3/search/movie', { params: { query } });
    },

    getTrending() {
      return fetch.get('3/trending/movie/week');
    },

    getLatest() {
      return fetch.get('3/movie/latest');
    },

    getNowPlaying() {
      return fetch.get('3/movie/now_playing');
    },

    getPopular() {
      return fetch.get('3/movie/popular');
    },

    getTopRated() {
      return fetch.get('3/movie/top_rated');
    },

    getUpcoming() {
      return fetch.get('3/movie/upcoming');
    },
  };
}
