import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { IoChevronBackSharp, IoChevronForwardSharp, IoStar } from 'react-icons/io5';
import Typography from '~@components/Typography';
import withTMDBImage from '~@lib/HoC/withTMDBImage';

interface SlideTileProps {
  index: number;
  backdrop_path: string;
  title: string;
  stars: number;
  overview: string;
  articleRef: React.RefObject<HTMLElement>;
  hovered: boolean;
  setHovered: React.Dispatch<React.SetStateAction<number>>;
  cardNumber: number;
}

type EntitiesProps = Omit<SlideTileProps, 'cardNumber' | 'articleRef' | 'hovered' | 'setHovered'>[];

function SliderContainer({
  title,
  entities,
  cardNumber = 5,
  gapSize = 1.5,
  pSize = 7,
}: {
  title: string;
  entities: EntitiesProps;
  cardNumber?: number;
  gapSize?: number;
  pSize?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState<number>(-1);

  useEffect(() => {
    let callback;

    if (!containerRef.current) return;
    const container = containerRef.current;

    container.classList.remove('group/slider');

    if (hovered !== -1) {
      container.classList.add('group/slider');
    }

    if (articleRef.current) {
      const article = articleRef.current;
      callback = () => {
        article.classList.remove('opacity-0');
        article.classList.add('opacity-100');
      };
    }

    const timeoutIndex = callback && setTimeout(callback, 100);

    return () => {
      if (timeoutIndex) clearTimeout(timeoutIndex);
    };
  }, [containerRef, hovered]);

  // const renderEntities = useMemo(() => {
  //   console.count(`renderEntities ${title}`);
  //   return entities.map(props =>
  //     React.createElement(SliderTile, {
  //       ...props,
  //       key: props.index,
  //       articleRef,
  //       hovered: hovered === props.index,
  //       setHovered,
  //     }),
  //   );
  // }, [entities, hovered, title]);

  return (
    <>
      <style>
        {`.group\\/${title} {
          --card-number: ${cardNumber};
          --padding-size: ${pSize}rem;
          --gap-size: ${gapSize}rem;
          --card-width: calc(((100vw - var(--padding-size)*2 - var(--gap-size)*${
            cardNumber - 1
          }) / var(--card-number)*1));
        }`}
      </style>
      <div ref={containerRef} className={`group/${title}`}>
        <section className="mb-24 box-border">
          <div className="mx-[var(--padding-size)] mb-12 flex justify-between p-2">
            <Typography component="h2" variant="display" size="small" className="capitalize">
              {title.replace(/([A-Z])/g, ' $1').trim()}
            </Typography>
            <div className="flex shrink items-center gap-2 p-2">
              <div className="h-px w-8 border-2 border-brutal-primary"></div>
              <div className="h-px w-8 border-2 border-brutal-secondary/25"></div>
              <div className="h-px w-8 border-2 border-brutal-secondary/25"></div>
            </div>
          </div>
          <div
            className="group/sliderWrapper grid grid-cols-[repeat(2,calc(var(--padding-size)-var(--gap-size)))] grid-rows-[1fr] justify-between overflow-hidden group-hover/slider:mt-[-150px] group-hover/slider:mb-[-500px]"
            style={{
              gridTemplateAreas: '"left right"',
              gridTemplateColumns: `repeat( 2, calc(${pSize}rem - ${gapSize}rem))`,
            }}
          >
            <button
              className="z-10 m-0 grid cursor-pointer items-center justify-center rounded-r-2xl bg-brutal-black/25 p-0 text-3xl text-white opacity-0 transition-[opacity,font-size,background] hover:bg-brutal-black/50 hover:text-6xl group-hover/slider:mt-[150px] group-hover/sliderWrapper:opacity-100"
              style={{ gridArea: 'left', height: `calc(var(--card-width) * 0.5625)` }}
            >
              <IoChevronBackSharp />
            </button>
            <ul
              className="col-[left-start/right-end] row-[1] flex translate-x-[calc(var(--slider-scroll)*-100%)] flex-row items-start overflow-x-scroll scroll-smooth p-[0_var(--padding-size)] transition-transform duration-300 group-hover/slider:z-10 group-hover/slider:pt-[150px] group-hover/slider:pb-[500px]"
              style={{ '--slider-scroll': 0, scrollbarWidth: 'none' }}
            >
              {entities.map(props => (
                <li key={props.title} className="mr-6 flex h-full flex-col justify-center">
                  <SliderTile
                    {...props}
                    cardNumber={cardNumber}
                    articleRef={hovered === props.index ? articleRef : { current: null }}
                    hovered={hovered === props.index}
                    setHovered={setHovered}
                  />
                </li>
              ))}
            </ul>
            <button
              className="z-10 m-0 grid cursor-pointer items-center justify-center rounded-l-2xl bg-brutal-black/25 p-0 text-3xl text-white opacity-0 transition-[opacity,font-size,background] hover:bg-brutal-black/50 hover:text-6xl group-hover/slider:mt-[150px] group-hover/sliderWrapper:opacity-100"
              style={{ gridArea: 'right', height: 'calc(var(--card-width) * 0.5625)' }}
            >
              <IoChevronForwardSharp />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

const SliderTile = ({
  articleRef,
  hovered,
  setHovered,
  index,
  backdrop_path,
  title,
  stars,
  overview,
  cardNumber,
}: SlideTileProps) => {
  const TMDBImage = withTMDBImage(Image);

  const handleMouseEnter = useCallback(() => {
    setHovered(index);
  }, [setHovered, index]);

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
          <Link passHref href="/slider">
            <a className="absolute inset-0" role="link">
              {title}
            </a>
          </Link>
          <div className="aspect-video h-full w-full">
            <TMDBImage src={backdrop_path} alt={title} layout="fill" />
          </div>
        </div>
        {hovered && (
          <article
            ref={articleRef}
            className={clsx(
              'absolute flex w-[calc(24rem*1.25)] flex-col rounded-b-2xl bg-brutal-secondary p-12 pt-0 text-brutal-on-secondary opacity-0 transition-opacity duration-500',
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
      <div className="min-h-[1rem] px-12">&nbsp;</div>
    </article>
  );
};

export default SliderContainer;
export { SliderTile };
