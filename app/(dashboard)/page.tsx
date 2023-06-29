import { Metadata } from 'next';
import React from 'react';
import { promiseSettled } from '~@types/lib/utils/promiseSettled';

import { TMDbApi } from '~@utils/api/tmdb';

import BaseComponent, {
  BASECOMPONENTS_INHERIT,
  BaseComponentProps,
} from '~@components/BaseComponent';

export const metadata: Metadata = {
  title: 'Dashboard',
};

const getMovies = async () => {
  const moviesResult = await promiseSettled({
    nowPlaying: TMDbApi.getV3()
      .movies.getNowPlaying()
      .then(data => data.data.results),
    trending: TMDbApi.getV3()
      .movies.getTrending()
      .then(data => data.data.results),
    popular: TMDbApi.getV3()
      .movies.getPopular()
      .then(data => data.data.results),
    topRated: TMDbApi.getV3()
      .movies.getTopRated()
      .then(data => data.data.results),
    upcoming: TMDbApi.getV3()
      .movies.getUpcoming()
      .then(data => data.data.results),
  });

  const entries = Object.entries(moviesResult).map<BaseComponentProps>(
    ([title, movieList], index) => {
      if (title === 'nowPlaying') {
        return {
          id: BASECOMPONENTS_INHERIT.STANDARD_HERO + '-' + title + '-' + index,
          component: BASECOMPONENTS_INHERIT.STANDARD_HERO,
          containers: {
            entities: movieList.map((movie, index) => ({
              id: movie.id,
              index: index,
              title: movie.title,
              description: movie.overview,
              poster: movie.poster_path,
              backdrop: movie.backdrop_path,
            })),
          },
        };
      }

      if (title === 'trending') {
        return {
          id: BASECOMPONENTS_INHERIT.SUPER_CAROUSEL + '-' + title + '-' + index,
          component: BASECOMPONENTS_INHERIT.SUPER_CAROUSEL,
          containers: {
            title,
            entities: movieList.map((movie, index) => ({
              index: index,
              id: movie.id,
              poster_path: movie.poster_path,
              backdrop_path: movie.backdrop_path,
              title: movie.title,
              stars: Math.round((movie.vote_average + Number.EPSILON) * 10) / 10,
              overview: movie.overview,
            })),
          },
        };
      }

      return {
        id: BASECOMPONENTS_INHERIT.STANDARD_CAROUSEL + '-' + title + '-' + index,
        component: BASECOMPONENTS_INHERIT.STANDARD_CAROUSEL,
        containers: {
          title,
          entities: movieList.map((movie, index) => ({
            index: index,
            id: movie.id,
            backdrop_path: movie.backdrop_path,
            title: movie.title,
            stars: Math.round((movie.vote_average + Number.EPSILON) * 10) / 10,
            overview: movie.overview,
          })),
        },
      };
    },
  );

  return entries;
};

export default async function Page() {
  const entries = await getMovies();

  return (
    <>
      {entries.map(entry => (
        <BaseComponent key={entry.id} component={entry.component} containers={entry.containers} />
      ))}
      <div className="h-[25vh]" />
    </>
  );
}
