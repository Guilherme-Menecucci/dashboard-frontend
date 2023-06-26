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

interface BaseComponentStandardHeroProps {
  component: BASECOMPONENTS_INHERIT.STANDARD_HERO;
  containers: {
    entities: HeroProps;
  };
}

interface BaseComponentStandardCarouselProps {
  component: BASECOMPONENTS_INHERIT.STANDARD_CAROUSEL;
  containers: {
    title: string;
    entities: StandardCarouselProps;
  };
}

interface BaseComponentSuperCarouselProps {
  component: BASECOMPONENTS_INHERIT.SUPER_CAROUSEL;
  containers: {
    title: string;
    entities: SuperCarouselProps;
  };
}

type BaseComponentProps =
  | BaseComponentStandardHeroProps
  | BaseComponentStandardCarouselProps
  | BaseComponentSuperCarouselProps;

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
