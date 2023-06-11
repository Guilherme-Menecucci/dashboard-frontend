import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

import { IoStar } from 'react-icons/io5';

import { App } from '~@types/_app';
import { IDashboardProps } from '~@types/pages/dashboard';

import { promiseSettled } from '~@types/lib/utils/promiseSettled';
import { TMDbApi } from '~@lib/utils/api/tmdb';

import Hero from '~@components/Hero';
import HeroTile from '~@components/HeroTile';
import Typography from '~@components/Typography';
import withTMDBImage from '~@lib/HoC/withTMDBImage';
import HoverComponent from '~@components/HoverComponent';

const Dashboard: App.TNextPageWithLayout<IDashboardProps> = ({ movies }) => {
  const { nowPlaying } = movies;

  const TMDBImage = withTMDBImage(Image);

  return (
    <>
      <Head>
        <title>Dashboard - Home</title>
      </Head>
      {nowPlaying ? (
        <Hero total={nowPlaying.length}>
          {nowPlaying.map(({ title, overview, poster_path, backdrop_path }, i) => (
            <HeroTile
              key={title}
              title={title}
              color={i % 2 ? 'primary' : 'secondary'}
              description={overview}
              poster={poster_path}
              backdrop={backdrop_path}
            />
          ))}
        </Hero>
      ) : null}
      <div className="h-20" />
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
      <section>
        <Typography
          component="h2"
          variant="display"
          size="large"
          className="mb-8 w-max px-4"
          emphasis="full"
        >
          Movies
        </Typography>
        {Object.entries(movies).map(([key, value], i) => (
          <div
            key={key}
            className="group relative w-full border-t-2 border-brutal-black pt-8 even:bg-brutal-primary"
          >
            <Typography
              component="h3"
              variant="display"
              size="small"
              className="ml-8 w-max px-4 capitalize tracking-widest text-brutal-on-primary group-odd:bg-brutal-background group-odd:text-brutal-on-background"
            >
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </Typography>
            <div className="flex h-[25vh] gap-6 self-stretch overflow-x-auto overscroll-x-contain py-4 px-8">
              {value
                ? value.map(movie => (
                    // TODO: Movie list - vertical on mobile
                    // TODO: Componentization
                    <HoverComponent
                      key={movie.id}
                      className="group/movie-card aspect-[20/7.55] h-full"
                      color="black"
                    >
                      <div className="flex h-full cursor-pointer bg-brutal-surface text-brutal-on-surface">
                        <div className="relative h-full w-2/3 border-r-2 border-brutal-black">
                          <TMDBImage
                            src={movie.backdrop_path}
                            alt={movie.title}
                            layout="fill"
                            placeholder="blur"
                            blurDataURL={`https://image.tmdb.org/t/p/w92/${movie.backdrop_path}`}
                          />
                        </div>
                        <div className="relative flex h-full w-1/3 flex-col overflow-hidden group-even:bg-dotted">
                          <Typography
                            component="h2"
                            variant="title"
                            size="large"
                            className="h-[4.65rem] overflow-hidden bg-brutal-surface p-4 pb-2"
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
                          <div className="flex w-max items-center bg-brutal-surface p-4 pt-2 text-brutal-yellow">
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
                    </HoverComponent>
                  ))
                : 'No movies found'}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export async function getServerSideProps() {
  const movies = await promiseSettled({
    trending: TMDbApi.getV3()
      .movies.getTrending()
      .then(data => data.data.results),
    nowPlaying: TMDbApi.getV3()
      .movies.getNowPlaying()
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

  if (!movies) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movies,
    },
  };
}

export default Dashboard;
