import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

import { IoStar } from 'react-icons/io5';

import { promiseSettled } from '~@types/lib/utils/promiseSettled';
import { movies_v3 } from '~@types/lib/utils/api/tmdb/movies/v3';

import Hero, { Hero2 } from '~@components/Hero';
import Typography from '~@components/Typography';
import { abortApiController as AbortTMDB, fetchTMDBApi } from '~@lib/utils/tmdbApi';

export default async function Page() {
  const movies = await promiseSettled({
    trending: await fetchTMDBApi<movies_v3.Schema$Movies>('3/trending/movie/week').then(
      data => data.results,
    ),
    nowPlaying: await fetchTMDBApi<movies_v3.Schema$Movies>('3/movie/now_playing').then(
      data => data.results,
    ),
    popular: await fetchTMDBApi<movies_v3.Schema$Movies>('3/movie/popular').then(
      data => data.results,
    ),
    topRated: await fetchTMDBApi<movies_v3.Schema$Movies>('3/movie/top_rated').then(
      data => data.results,
    ),
    upcoming: await fetchTMDBApi<movies_v3.Schema$Movies>('3/movie/upcoming').then(
      data => data.results,
    ),
  });
  const genres = await fetchTMDBApi<movies_v3.Schema$Genres>('3/genre/list').then(
    data => data.genres,
  );

  const { nowPlaying } = movies;

  return (
    <>
      <Head>
        <title>Dashboard - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {nowPlaying ? (
        <Hero2
          slideDuration={5000}
          images={nowPlaying.map((img, i) => ({
            title: img.title,
            color: i % 2 ? 'primary' : 'secondary',
            description: img.overview,
            poster: img.poster_path,
            backdrop: img.backdrop_path,
            vote_average: img.vote_average,
            release_date: img.release_date,
            genres: genres.filter(genre => img.genre_ids.includes(genre.id)),
          }))}
        />
      ) : // <Hero total={nowPlaying.length}>
      //   {nowPlaying.map(({ title, overview, poster_path, backdrop_path }, i) => (
      //     <HeroTile
      //       key={title}
      //       title={title}
      //       color={i % 2 ? 'primary' : 'secondary'}
      //       description={overview}
      //       poster={poster_path}
      //       backdrop={backdrop_path}
      //     />
      //   ))}
      // </Hero>
      null}
      <div className="bg-dotted h-20" />
      {/* TODO: Componentization */}
      {/* <Row className="gap-4 p-4">
        {cardsData &&
          cards.map(({ icon: Icon, color }, i) => {
            const { title, value, message } = cardsData[i];

            return (
              <div
                key={title}
                className={clsx(
                  'flex flex-col rounded-lg bg-white p-4',
                  'col-span-12',
                  'md:col-span-6',
                  // 'lg:col-span-3',
                  'xl:col-span-3',
                  // '2xl:col-span-2 2xl:translate-x-1/4',
                  'border-2 border-brutal-black  shadow-neubrutalism shadow-brutal-black',
                  i == 0 && '2xl:col-start-1',
                  i == 1 && '2xl:col-start-4',
                  i == 2 && '2xl:col-start-7',
                  i == 3 && '2xl:col-start-10',
                )}
              >
                <div className="flex items-center gap-2">
                  <Typography
                    component="span"
                    variant="heading"
                    size="small"
                    className={clsx('rounded-full border-2 border-brutal-black p-2', color)}
                  >
                    <Icon />
                  </Typography>
                  <Typography component="h2" variant="heading" size="small">
                    {title}
                  </Typography>
                </div>
                <Typography component="p" variant="display" size="large" className="py-8">
                  {value}
                </Typography>
                <Typography component="span" variant="title" size="small">
                  {message}
                </Typography>
              </div>
            );
          })}
      </Row> */}
      <section className="bg-dotted">
        <Typography
          component="h2"
          variant="display"
          size="large"
          className="mb-8 w-max px-4"
          emphasis="full"
        >
          Movies
        </Typography>
        {Object.entries(movies).map(([key, value]) => (
          <div
            key={key}
            className="group border-brutal-black even:bg-brutal-primary relative w-full border-t-4 pt-8"
          >
            <Typography
              component="h3"
              variant="display"
              size="small"
              className="text-brutal-on-primary group-odd:bg-brutal-background ml-8 w-max px-4 tracking-widest capitalize"
            >
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </Typography>
            <div className="flex h-[25vh] gap-6 self-stretch overflow-x-auto overscroll-x-contain px-8 py-4">
              {value
                ? value.map(movie => (
                    // TODO: Movie list - vertical on mobile
                    // TODO: Componentization
                    <div
                      key={movie.id}
                      className="group/movie-card border-brutal-black bg-brutal-surface text-brutal-on-surface hover:shadow-neubrutalism hover:shadow-brutal-black flex aspect-[20/7.55] h-full cursor-pointer border-4 transition-all"
                    >
                      <div className="border-brutal-black relative h-full w-2/3 border-r-4">
                        <Image
                          src={'https://image.tmdb.org/t/p/original/' + movie.backdrop_path}
                          alt={movie.title}
                          fill
                          className="scale-100 transition-transform group-hover/movie-card:scale-150"
                          placeholder="blur"
                          blurDataURL={`https://image.tmdb.org/t/p/w92/${movie.backdrop_path}`}
                        />
                      </div>
                      <div className="group-even:bg-dotted relative flex h-full w-1/3 flex-col overflow-hidden">
                        <Typography
                          component="h2"
                          variant="title"
                          size="large"
                          className="bg-brutal-surface h-[4.65rem] overflow-hidden p-4 pb-2"
                          style={{
                            display: '-webkit-box',
                            lineClamp: 2,
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {movie.title}
                        </Typography>
                        <div className="bg-brutal-surface text-brutal-yellow flex w-max items-center p-4 pt-2">
                          <Typography
                            component="span"
                            variant="title"
                            size="large"
                            className="text-shadow-neubrutalism-border"
                          >
                            {Math.round((movie.vote_average + Number.EPSILON) * 10) / 10}
                          </Typography>
                          <IoStar
                            size="1rem"
                            className="drop-shadow-neubrutalism-border text-brutal-yellow ml-2 inline-block"
                          />
                        </div>
                      </div>
                    </div>
                  ))
                : 'No movies found'}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
