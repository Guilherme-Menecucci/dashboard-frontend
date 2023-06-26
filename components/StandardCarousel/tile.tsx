import React, { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { IoStar } from 'react-icons/io5';

import withTMDBImage from '~@lib/HoC/withTMDBImage';

import Typography from '~@components/Typography';

export interface TileProps {
  index: number;
  id: number;
  backdrop_path: string;
  title: string;
  stars: number;
  overview: string;
  articleRef: React.RefObject<HTMLElement>;
  hovered: boolean;
  setHovered: React.Dispatch<React.SetStateAction<number>>;
  cardNumber: number;
}

export default function Tile({
  articleRef,
  hovered,
  setHovered,
  index,
  id,
  backdrop_path,
  title,
  stars,
  overview,
  cardNumber,
}: TileProps) {
  const TMDBImage = withTMDBImage(Image);

  const handleMouseEnter = useCallback(() => {
    setHovered(id);
  }, [setHovered, id]);

  const handleMouseLeave = useCallback(() => {
    setHovered(-1);
  }, [setHovered]);

  return (
    <article
      className={clsx(
        'relative flex h-full flex-col rounded-2xl',
        hovered ? 'overflow-visible' : 'overflow-hidden',
      )}
      style={{
        width: 'var(--card-width)',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <section className={clsx('bg-inherit text-inherit', hovered && 'z-10')}>
        <div
          className={clsx(
            'relative aspect-video overflow-hidden transition-transform',
            index % cardNumber === 0
              ? 'origin-left'
              : index % (cardNumber - 1) === 0
              ? 'origin-right'
              : 'origin-center',
            hovered && 'z-10 scale-125',
            hovered ? 'rounded-t-2xl duration-300' : 'rounded-2xl duration-150',
          )}
        >
          <Link href="/slider" className="absolute inset-0" role="link">
            {title}
          </Link>
          <TMDBImage src={backdrop_path} alt={title} fill className="aspect-video" />
        </div>
        {hovered && (
          <article
            ref={articleRef}
            className={clsx(
              'absolute flex w-[calc(24rem*1.25)] flex-col rounded-b-2xl bg-brutal-primary p-12 pt-0 text-brutal-on-primary opacity-0 transition-opacity duration-500',
              index % cardNumber === 0
                ? 'right-[-25%]'
                : index % (cardNumber - 1) === 0
                ? 'right-0'
                : 'right-[-12.5%]',
            )}
            style={{
              top: 'calc((var(--card-width)*0.5625)*1.125)',
              width: 'calc(var(--card-width)*1.25)',
            }}
          >
            <Typography
              component="h3"
              variant="title"
              size="large"
              className="mt-4 overflow-hidden text-ellipsis"
            >
              {title}
            </Typography>
            <div className="mt-4 flex w-max items-center text-brutal-yellow">
              <Typography
                component="span"
                variant="title"
                size="medium"
                className="text-shadow-neubrutalism-border"
              >
                {stars}
              </Typography>
              <IoStar
                size="1rem"
                className="drop-shadow-neubrutalism-border ml-2 inline-block text-inherit"
              />
            </div>
            <Typography
              component="div"
              variant="body"
              size="large"
              className="mt-4 overflow-hidden text-justify"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                lineHeight: '1em',
                height: '3.1em',
                // textOverflow: 'ellipsis',
              }}
            >
              {overview}
            </Typography>
          </article>
        )}
      </section>
      <div className="min-h-[1rem] px-12"> </div>
    </article>
  );
}
