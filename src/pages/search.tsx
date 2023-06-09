import React from 'react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { IoStar } from 'react-icons/io5';

import { App } from '~@types/_app';
import { ISearchProps } from '~@types/pages/search';

import { TMDbApi } from '~@lib/utils/api/tmdb';

import Typography from '~@components/Typography';
import withTMDBImage from '~@lib/HoC/withTMDBImage';

const Dashboard: App.TNextPageWithLayout<ISearchProps> = ({ movies }) => {
  const router = useRouter();

  const TMDBImage = withTMDBImage(Image);

  return (
    <>
      <Head>
        <title>Dashboard - Searching {router.query.s}</title>
      </Head>
      <div className="h-24" />
      <section>
        <Typography
          component="h2"
          variant="display"
          size="large"
          className="relative w-min px-4 font-black tracking-widest"
        >
          Search
        </Typography>
        <div className="group relative w-full py-4">
          <div className="grid grid-cols-12 gap-4 p-4">
            {movies.length !== 0 ? (
              movies.map(movie => (
                // TODO: Movie list on mobile at vertical, (desktop horizontal?)
                // TODO: Componentization
                <div
                  key={movie.id}
                  className="group/movie-card relative col-span-4 flex cursor-pointer flex-col overflow-hidden border-2 border-brutal-black bg-brutal-surface text-brutal-on-surface shadow-none transition-all duration-200 ease-linear hover:shadow-neubrutalism hover:shadow-brutal-black xl:col-span-2"
                >
                  <div className="relative aspect-[3/4] w-full">
                    {movie.poster_path ? (
                      <TMDBImage
                        src={movie.poster_path}
                        alt={movie.title}
                        layout="fill"
                        placeholder="blur"
                        blurDataURL={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
                      />
                    ) : (
                      <div className="relative flex h-full w-full flex-col bg-brutal-black">
                        <div className="flex h-12 w-full gap-3 py-3">
                          <div className="h-full w-4 rounded-r-sm bg-brutal-background"></div>
                          <div className="h-full w-1/12 rounded-sm bg-brutal-background"></div>
                          <div className="h-full w-1/12 rounded-sm bg-brutal-background"></div>
                          <div className="h-full w-1/12 rounded-sm bg-brutal-background"></div>
                          <div className="h-full w-1/12 rounded-sm bg-brutal-background"></div>
                          <div className="h-full w-1/12 rounded-sm bg-brutal-background"></div>
                          <div className="h-full w-1/12 rounded-sm bg-brutal-background"></div>
                          <div className="h-full w-1/12 rounded-sm bg-brutal-background"></div>
                          <div className="h-full w-1/12 rounded-sm bg-brutal-background"></div>
                          <div className="h-full w-1/12 rounded-sm bg-brutal-background"></div>
                          <div className="h-full w-1/12 rounded-sm bg-brutal-background"></div>
                          <div className="h-full w-4 rounded-l-sm bg-brutal-background"></div>
                        </div>
                        <div className="flex h-full w-full gap-3 py-3">
                          <div className="h-full w-1/12 rounded-r-lg bg-brutal-background"></div>
                          <div className="text-shadow-neubrutalism-border flex h-full w-10/12 items-center justify-center rounded-lg bg-brutal-background text-2xl tracking-widest text-brutal-background">
                            Poster Not Found
                          </div>
                          <div className="h-full w-1/12 rounded-l-lg bg-brutal-background"></div>
                        </div>
                        <div className="flex h-12 w-full gap-3 py-3">
                          <div className="h-full w-4 rounded-r-sm bg-brutal-background"></div>
                          <div className="h-full w-1/12 rounded-sm bg-brutal-background"></div>
                          <div className="h-full w-1/12 rounded-sm bg-brutal-background"></div>
                          <div className="h-full w-1/12 rounded-sm bg-brutal-background"></div>
                          <div className="h-full w-1/12 rounded-sm bg-brutal-background"></div>
                          <div className="h-full w-1/12 rounded-sm bg-brutal-background"></div>
                          <div className="h-full w-1/12 rounded-sm bg-brutal-background"></div>
                          <div className="h-full w-1/12 rounded-sm bg-brutal-background"></div>
                          <div className="h-full w-1/12 rounded-sm bg-brutal-background"></div>
                          <div className="h-full w-1/12 rounded-sm bg-brutal-background"></div>
                          <div className="h-full w-1/12 rounded-sm bg-brutal-background"></div>
                          <div className="h-full w-4 rounded-l-sm bg-brutal-background"></div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex h-full w-full flex-col border-t-2 border-brutal-black bg-dotted">
                    <Typography
                      component="h2"
                      variant="title"
                      size="large"
                      className="h-24 overflow-hidden text-ellipsis bg-brutal-surface p-4"
                      style={{
                        display: '-webkit-box',
                        lineClamp: 2,
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {movie.title}
                    </Typography>
                    <div className="flex w-max items-center bg-brutal-surface px-4 pb-4 text-brutal-yellow">
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
                        className="drop-shadow-neubrutalism-border ml-2 inline-block text-brutal-yellow"
                      />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-12 m-4 border-2 border-brutal-black bg-white p-4 shadow-neubrutalism shadow-brutal-black">
                <Typography component="p" variant="display" size="medium">
                  No movies found
                </Typography>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext<{ s: string }>) {
  const { s: search } = ctx.query;

  if (!search) return { notFound: true };

  const movies = await TMDbApi.getV3()
    .movies.search(search as string)
    .then(response => response.data.results);

  return {
    props: {
      movies,
    },
  };
}

export default Dashboard;
