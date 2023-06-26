import { TTextEmphasis, TTextSize, TTextVariant } from '~@types/components/Typography';
import { App } from '~@types/_app';

const typographyClasses: Record<TTextVariant, Record<TTextSize, string>> = {
  display: {
    large: 'text-8xl font-normal tracking-[0] leading-[7.25rem]',
    // large: 'text-6xl font-normal tracking-[0] leading-[64px]',
    medium: 'text-7xl font-normal tracking-[0] leading-[5.5rem]',
    // medium: 'text-5xl font-normal tracking-[0] leading-[52px]',
    small: 'text-6xl font-normal tracking-[0] leading-[4.5rem]',
    // small: 'text-4xl font-normal tracking-[0] leading-[44px]',
  },
  heading: {
    large: 'text-5xl font-normal tracking-[0] leading-[3.25rem]',
    // large: 'text-3xl font-normal tracking-[0] leading-10',
    medium: 'text-4xl font-normal tracking-[0] leading-10',
    // medium: 'text-2xl font-normal tracking-[0] leading-9',
    small: 'text-3xl font-normal tracking-[0] leading-9',
    // small: 'text-xl font-normal tracking-[0] leading-8',
  },
  title: {
    large: 'text-2xl font-normal tracking-[0] leading-7',
    // large: 'text-lg font-normal tracking-[0] leading-7',
    medium: 'text-xl font-medium tracking-[.15] leading-6',
    // medium: 'text-base font-medium tracking-[.15] leading-6',
    small: 'text-lg font-normal tracking-[0] leading-7',
    // small: 'text-sm font-medium tracking-[.1] leading-5',
  },
  body: {
    large: 'text-lg font-normal tracking-[.5] leading-7',
    // large: 'text-base font-normal tracking-[.5] leading-6',
    medium: 'text-base font-normal tracking-[.5] leading-6',
    // medium: 'text-sm font-normal tracking-[.25] leading-5',
    small: 'text-sm font-normal tracking-[.25] leading-5',
    // small: 'text-xs font-normal tracking-[.4] leading-4',
  },
  label: {
    large: 'text-sm font-medium tracking-widest leading-5',
    medium: 'text-xs font-medium tracking-[.5] leading-4',
    small: 'text-[11px] font-medium tracking-[.5] leading-4',
  },
};

const typographyEmphasisClasses: Record<TTextEmphasis, string> = {
  normal:
    'relative w-max before:absolute before:-inset-1 before:top-1/2 before:left-1/2 before:block before:skew-y-3',
  full: 'relative before:absolute before:-inset-1 before:block before:skew-y-3',
};

const typographyEmphasisColorClasses: Record<App.TThemeColors, string> = {
  primary: 'before:bg-brutal-primary',
  'primary-variant': 'before:bg-brutal-primary-variant',
  secondary: 'before:bg-brutal-secondary',
  'secondary-variant': 'before:bg-brutal-secondary-variant',
};

// const typographyEmphasisClasses: Record<TTextEmphasis, string> = {
//   normal:
//     'relative w-max before:absolute before:-inset-1 before:top-1/2 before:left-1/2 before:block before:skew-y-3 before:bg-brutal-seafoam',
//   full: 'relative before:absolute before:-inset-1 before:block before:skew-y-3 before:bg-brutal-seafoam',
// };

export { typographyClasses, typographyEmphasisClasses, typographyEmphasisColorClasses };
