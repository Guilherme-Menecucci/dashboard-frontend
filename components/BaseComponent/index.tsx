import React, { lazy } from 'react';
import { StandardCarouselProps } from '~@components/StandardCarousel';
import { HeroProps } from '~@components/StandardHero';
import { SuperCarouselProps } from '~@components/SuperCarousel';

const StandardCarousel = lazy(() => import('~@components/StandardCarousel'));
const SuperCarousel = lazy(() => import('~@components/SuperCarousel'));
const StandardHero = lazy(() => import('~@components/StandardHero'));

export enum BASECOMPONENTS_INHERIT {
  STANDARD_HERO = 'StandardHero',
  STANDARD_CAROUSEL = 'StandardCarousel',
  SUPER_CAROUSEL = 'SuperCarousel',
}

export interface BaseComponentStandardHeroProps {
  component: BASECOMPONENTS_INHERIT.STANDARD_HERO;
  containers: HeroProps;
}

export interface BaseComponentStandardCarouselProps {
  component: BASECOMPONENTS_INHERIT.STANDARD_CAROUSEL;
  containers: {
    title: string;
  } & StandardCarouselProps;
}

export interface BaseComponentSuperCarouselProps {
  component: BASECOMPONENTS_INHERIT.SUPER_CAROUSEL;
  containers: {
    title: string;
  } & SuperCarouselProps;
}

export type BaseComponentProps = { id?: string } & (
  | BaseComponentStandardHeroProps
  | BaseComponentStandardCarouselProps
  | BaseComponentSuperCarouselProps
);

export default function BaseComponent({ component, containers }: BaseComponentProps) {
  switch (component) {
    case BASECOMPONENTS_INHERIT.STANDARD_HERO:
      return <StandardHero entities={containers.entities} />;
    case BASECOMPONENTS_INHERIT.SUPER_CAROUSEL:
      return <SuperCarousel title={containers.title} entities={containers.entities} />;
    default:
      return <StandardCarousel title={containers.title} entities={containers.entities} />;
  }
}
