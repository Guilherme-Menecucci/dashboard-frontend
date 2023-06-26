import { NextPage } from 'next';
import { AppContext, AppProps } from 'next/app';
import { IconType } from 'react-icons/lib';

declare namespace App {
  export type TNextPageWithLayout<TP = object, TIP = TP> = NextPage<TP, TIP> & {
    getLayout?: ((page: React.ReactElement) => React.ReactNode) | undefined;
  };

  export type TAppPropsWithLayout = Omit<AppProps, 'Component' | 'cookies'> & {
    Component: TNextPageWithLayout;
    cookies?: string | undefined;
    getLayout?: ((page: React.ReactElement) => React.ReactNode) | undefined;
  };

  export type TAppContextWithLayout = Omit<AppContext, 'Component'> & {
    Component: TNextPageWithLayout;
  };

  export type TColors =
    | TThemeColors
    | 'blue'
    | 'orange'
    | 'red'
    | 'yellow'
    | 'green'
    | 'lime-green'
    | 'seafoam'
    | 'purple'
    | 'pink-flamingo'
    | 'black';

  export type TThemeColors = 'primary' | 'primary-variant' | 'secondary' | 'secondary-variant';
  export type TStatus = 'error' | 'warning' | 'info' | 'success';
  export type TTextVariants = 'display' | 'heading' | 'title' | 'body' | 'label';
  export type TThemeVariants = 'contained' | 'outlined' | 'text' | 'variant';
  export type TSizes = 'large' | 'medium' | 'small';

  export type TIcons = { [x in TStatus]: IconType };
}
