'use client';
import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';

import Typography from '~@components/Typography';

import Tile, { TileProps } from './tile';

type EntitiesProps = Omit<TileProps, 'cardNumber' | 'articleRef' | 'hovered' | 'setHovered'>[];

export interface StandardCarouselProps {
  title: string;
  entities: EntitiesProps;
  cardNumber?: number;
  gapSize?: number;
  pSize?: number;
}

export default function StandardCarousel({
  title,
  entities,
  cardNumber = 5,
  gapSize = 1.5,
  pSize = 7,
}: StandardCarouselProps) {
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
        <section className="mb-12 box-border">
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
            className="group/sliderWrapper grid grid-cols-[repeat(2,calc(var(--padding-size)-var(--gap-size)))] grid-rows-[1fr] justify-between overflow-hidden group-hover/slider:mb-[-500px] group-hover/slider:mt-[-150px]"
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
              className="col-[left-start/right-end] row-[1]  flex translate-x-[calc(var(--slider-scroll)*-100%)] flex-row items-start overflow-x-scroll scroll-smooth p-[0_var(--padding-size)] transition-transform duration-300 group-hover/slider:z-10 group-hover/slider:pb-[500px] group-hover/slider:pt-[150px] webkitScrollbar:hidden"
              style={
                {
                  '--slider-scroll': 0,
                  scrollSnapType: 'x proximity',
                  scrollbarWidth: 'none',
                } as CSSProperties
              }
            >
              {entities.map(props => (
                <li key={props.title} className="mr-6 flex h-full flex-col justify-center">
                  <Tile
                    {...props}
                    cardNumber={cardNumber}
                    articleRef={hovered === props.id ? articleRef : { current: null }}
                    hovered={hovered === props.id}
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
