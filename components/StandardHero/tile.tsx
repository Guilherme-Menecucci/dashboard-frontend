import Image from 'next/image';
import clsx from 'clsx';

import { App } from '~@types/_app';

import withTMDBImage from '~@lib/HoC/withTMDBImage';

import Typography from '~@components/Typography';

import styles from './tile.module.css';

export type TileProps = {
  title: string;
  description?: string;
  color?: App.TThemeColors;
  poster?: string;
  backdrop?: string;
};

export default function Tile({
  title,
  description,
  color = 'primary',
  poster = '',
  backdrop = '',
}: TileProps) {
  const TMDBImage = withTMDBImage(Image);

  return (
    <div
      className={clsx(
        'relative h-full w-full shrink-0 overflow-x-hidden',
        styles[`HeroTile-${color}`],
      )}
    >
      {(color || poster || backdrop) && (
        <div
          className={clsx(
            'absolute inset-0',
            'after:absolute after:inset-0',
            !poster && !backdrop && styles['not-background'],
          )}
        >
          {backdrop && (
            <TMDBImage
              src={backdrop}
              alt={title}
              fill
              loading="eager"
              className={clsx('object-cover xl:block', poster ? 'hidden' : 'block')}
              placeholder="blur"
              blurDataURL={`https://image.tmdb.org/t/p/w92/${backdrop}`}
            />
          )}
          {poster && (
            <TMDBImage
              src={poster}
              alt={title}
              fill
              loading="eager"
              className={clsx('block object-cover', backdrop && 'xl:hidden')}
              placeholder="blur"
              blurDataURL={`https://image.tmdb.org/t/p/w92/${poster}`}
            />
          )}
        </div>
      )}
      <div className="relative mx-auto flex h-full w-10/12 flex-col items-center justify-center">
        <div className="h-20"></div>
        {poster && (
          <div
            className={clsx(
              'relative aspect-[2/3] w-2/3 max-w-xs sm:w-full',
              styles['HeroTile-poster'],
            )}
          >
            <div className="absolute -top-2 left-0 h-0 w-0 origin-[left_center_0px] scale-100 border-y-[0.5rem] border-r-[0.5rem] border-transparent" />
            <div className="absolute inset-y-0 left-0 w-2 origin-[0px_100%_0px] scale-x-100" />
            <div className="absolute inset-x-0 bottom-0 h-2 origin-[0px_100%_0px] scale-y-100" />
            <div className="absolute -right-2 bottom-0 h-0 w-0 origin-[center_bottom_0px] scale-100 border-x-[0.5rem] border-t-[0.5rem] border-transparent" />
            <div className="relative h-full -translate-y-2 translate-x-2 border-2">
              <TMDBImage
                src={poster}
                alt={title}
                fill
                loading="eager"
                className="block object-cover"
                placeholder="blur"
                blurDataURL={`https://image.tmdb.org/t/p/w92/${poster}`}
              />
            </div>
          </div>
        )}
        <Typography
          component="h2"
          variant="display"
          size="small"
          className="drop-shadow-neubrutalism my-4 hidden text-center sm:block sm:text-5xl lg:text-4xl xl:text-5xl"
        >
          {title}
        </Typography>
        {description ? (
          <Typography
            component="span"
            variant="title"
            size="medium"
            className="drop-shadow-neubrutalism mt-4 w-full overflow-hidden text-ellipsis text-justify text-white sm:w-2/3"
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
  );
}
