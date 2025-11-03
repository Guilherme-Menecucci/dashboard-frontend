/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image';
import clsx from 'clsx';

import { TbPointFilled } from 'react-icons/tb';

import { App } from '~@types/_app';
import { movies_v3 } from '~@types/lib/utils/api/tmdb/movies/v3';

// import withTMDBImage from '~@lib/HoC/withTMDBImage';

import Typography from '~@components/Typography';
import Row from '~@components/Row';
import Column from '~@components/Column';
import React from 'react';

// import styles from './styles.module.css';

export type THeroTileProps = {
  title: string;
  description?: string;
  color?: App.TThemeColors;
  poster?: string;
  backdrop?: string;
  vote_average: number;
  release_date: string;
  genres: movies_v3.Schema$Genre[];
};

// export interface Schema$Movie {
//   adult: boolean;
//   backdrop_path: string;
//   genre_ids: number[];
//   id: number;
//   original_language: string;
//   original_title: string;
//   overview: string;
//   popularity: number;
//   poster_path: string;
//   release_date: string;
//   title: string;
//   video: boolean;
//   vote_average: number;
//   vote_count: number;
// }

const HeroTile = ({
  title,
  description,
  color = 'primary',
  poster = '',
  backdrop = '',
}: THeroTileProps) => {
  // const TMDBImage = withTMDBImage(Image);

  return (
    <div
      className={clsx('relative h-full w-full shrink-0 overflow-x-hidden', {
        // 'text-brutal-primary': color === 'primary',
        // 'text-brutal-primary-variant': color === 'primary-variant',
        // 'text-brutal-secondary': color === 'secondary',
        // 'text-brutal-secondary-variant': color === 'secondary-variant',
      })}
    >
      {(color || poster || backdrop) && (
        <div
          className={clsx(
            'absolute inset-0',
            'after:absolute after:inset-0',
            !poster && !backdrop
              ? {
                  'after:bg-brutal-primary': color === 'primary',
                  'after:bg-brutal-primary-variant': color === 'primary-variant',
                  'after:bg-brutal-secondary': color === 'secondary',
                  'after:bg-brutal-secondary-variant': color === 'secondary-variant',
                }
              : 'after:bg-brutal-black/50',
          )}
        >
          {backdrop ? (
            <Image
              src={'https://image.tmdb.org/t/p/original/' + backdrop}
              alt={title}
              fill
              loading="eager"
              className={clsx('object-cover xl:block', poster ? 'hidden' : 'block')}
              placeholder="blur"
              blurDataURL={`https://image.tmdb.org/t/p/w92/${backdrop}`}
            />
          ) : (
            poster && (
              <Image
                src={'https://image.tmdb.org/t/p/original/' + poster}
                alt={title}
                fill
                loading="eager"
                className={clsx('block object-cover', backdrop && 'xl:hidden')}
                placeholder="blur"
                blurDataURL={`https://image.tmdb.org/t/p/w92/${poster}`}
              />
            )
          )}
        </div>
      )}
      <div className="relative mx-auto flex h-full w-10/12 flex-col items-center justify-center">
        {/* <div className="h-20"></div> */}
        <div className="text-brutal-on-secondary mt-4 flex w-full flex-col items-center justify-center rounded-md border border-gray-500/25 bg-gray-500/10 p-8 shadow-md shadow-black/25 backdrop-blur-md sm:w-2/3">
          {poster && (
            <div
              className={clsx(
                'shadow-neubrutalismBig relative aspect-[3/5] w-2/3 max-w-xs border-4 sm:w-full',
                // {
                //   'border-brutal-primary shadow-brutal-primary': color === 'primary',
                //   'border-brutal-primary-variant shadow-brutal-primary-variant':
                //     color === 'primary-variant',
                //   'border-brutal-secondary shadow-brutal-secondary': color === 'secondary',
                //   'border-brutal-secondary-variant shadow-brutal-secondary-variant':
                //     color === 'secondary-variant',
                // },
              )}
            >
              <Image
                src={'https://image.tmdb.org/t/p/original/' + poster}
                alt={title}
                fill
                loading="eager"
                className="block object-cover backdrop-blur-md"
                placeholder="blur"
                blurDataURL={`https://image.tmdb.org/t/p/w92/${poster}`}
              />
            </div>
          )}
          <Typography
            component="h2"
            variant="display"
            size="small"
            className="drop-shadow-neubrutalism 3xl:text-4xl my-4 hidden text-center sm:block sm:text-5xl xl:text-5xl"
          >
            {title}
          </Typography>
          {description ? (
            <Typography
              component="span"
              variant="title"
              size="medium"
              className="drop-shadow-neubrutalism overflow-hidden text-justify text-ellipsis"
              style={{
                display: '-webkit-box',
                lineClamp: 6,
                WebkitLineClamp: 6,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {description}
            </Typography>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export const HeroTile2 = ({
  title,
  description,
  genres,
  vote_average,
  release_date,
  poster = '',
  backdrop = '',
}: THeroTileProps) => {
  // const TMDBImage = withTMDBImage(Image);
  const desc = description || '';

  return (
    <Row className="3xl:mt-5 h-full grid-rows-6">
      <Row className="3xl:col-span-3 3xl:col-start-3 col-span-4 col-start-2 row-span-5 row-start-1 flex items-center justify-center">
        <Column className="3xl:col-span-6 3xl:col-start-4 col-span-8 col-start-5">
          <div className="shadow-neubrutalismBig relative aspect-[2/3] w-full rounded-md border-2 border-white shadow-lg shadow-black/50">
            <Image
              src={'https://image.tmdb.org/t/p/original/' + poster || backdrop}
              alt={title}
              fill
              loading="eager"
              className="block rounded-sm object-cover backdrop-blur-md"
              placeholder="blur"
              blurDataURL={`https://image.tmdb.org/t/p/w92/${poster || backdrop}`}
            />
          </div>
        </Column>
      </Row>
      <Column rowSpan={5} colSpan={6} className="3xl:col-span-5 3xl:col-start-6 col-start-6 pt-12">
        <div className="flex h-full flex-col">
          <Typography
            component="span"
            size="large"
            variant="heading"
            className="text-brutal-primary"
          >
            {title}
          </Typography>
          <div className="mt-6 flex items-center gap-2">
            <div className="border-brutal-white flex items-center justify-center rounded-full border">
              <Typography
                component="span"
                size="medium"
                variant="body"
                className="bg-brutal-white text-brutal-on-white rounded-l-full p-1 px-3 pl-2 font-bold"
              >
                <Image
                  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
                  alt="TMDB"
                  width={50}
                  height={200}
                />
              </Typography>
              <Typography
                component="span"
                size="medium"
                variant="body"
                className="text-brutal-white px-3 pr-2"
              >
                {vote_average.toFixed(1)}
              </Typography>
            </div>
            <Typography component="span" size="small" variant="label">
              <TbPointFilled />
            </Typography>
            <Typography component="span" size="medium" variant="body">
              {new Date(release_date).toLocaleDateString()}
            </Typography>
          </div>
          <Typography component="p" size="large" variant="title" className="mt-6 text-justify">
            {desc.substring(0, 500) + (desc.length > 500 ? '...' : '')}
          </Typography>
          {genres && (
            <div className="mt-auto flex items-center gap-2">
              {genres.map((genre, i) => (
                <div
                  key={genre.id}
                  className="border-brutal-white bg-brutal-black-container text-brutal-on-black rounded-full border px-3"
                >
                  <Typography component="span" size="large" variant="label">
                    {genre.name}
                  </Typography>
                </div>
              ))}
            </div>
          )}
        </div>
      </Column>
      {/* <Column
        colSpan={6}
        className="3xl:col-span-5 3xl:col-start-6 col-start-6 row-span-3 row-start-3"
      >
        <Typography component="p" size="large" variant="title" className="text-justify">
          {desc.substring(0, 500) + (desc.length > 500 ? '...' : '')}
        </Typography>
      </Column> */}
    </Row>
  );
};

export default HeroTile;
