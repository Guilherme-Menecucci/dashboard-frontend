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
  poster_path: string;
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
  poster_path,
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
    <li
      className={clsx(
        'mr-6 flex h-[var(--card-height)] flex-col justify-center',
        hovered
          ? 'w-[calc(var(--card-expanded-width))] transition-[width] duration-500'
          : 'w-[calc(var(--card-height)*.66667)] transition-[width] duration-500',
      )}
    >
      <article
        className={clsx(
          'relative flex h-full flex-col overflow-hidden rounded-2xl',
          hovered
            ? 'w-[calc(var(--card-expanded-width))] transition-[width] duration-500'
            : 'w-[calc(var(--card-height)*.66667)] transition-[width] duration-500',
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="relative flex h-[var(--card-height)] w-[var(--card-expanded-width)] bg-no-repeat text-inherit after:pointer-events-none after:absolute after:inset-0 after:bg-gradient-to-r after:from-brutal-black/20 after:to-brutal-black/20 after:opacity-0"
          style={{
            backgroundSize: hovered ? 'contain' : 0,
            backgroundPosition: 0,
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${backdrop_path}')`,
          }}
        >
          <div className="relative aspect-[2/3] h-full overflow-hidden rounded-2xl opacity-100 transition-opacity duration-500">
            <Link
              href="/slider"
              role="link"
              className={clsx('absolute inset-0', hovered ? 'opacity-0' : 'opacity-100')}
            >
              {hovered ? (
                title
              ) : (
                <div className="relative h-full">
                  <TMDBImage src={poster_path} alt={title} fill style={{ objectFit: 'cover' }} />
                </div>
              )}
            </Link>
          </div>
        </div>
      </article>
    </li>
  );
}
