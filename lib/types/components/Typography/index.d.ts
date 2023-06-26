import { LinkProps } from 'next/link';
import { App, TThemeColors } from '~@types/_app';

type TTypographyLinkProps = LinkProps & {
  component: React.ForwardRefExoticComponent<
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
      LinkProps & {
        children?: React.ReactNode;
      } & React.RefAttributes<HTMLAnchorElement>
  >;
};

type TTypographyHTMLProps = {
  component: 'li' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'a';
};

type TTypographyProps = TTypographyLinkProps | TTypographyHTMLProps;

type TTypography = React.HTMLAttributes<HTMLElement> &
  TTypographyProps & {
    children?: React.ReactNode;
    variant: TTextVariant;
    size: TTextSize;
    emphasis?: TTextEmphasis;
    emphasisColor?: App.TThemeColors;
    color?: TThemeColors;
  };

type TTextEmphasis = 'normal' | 'full';
type TTextVariant = 'display' | 'heading' | 'title' | 'body' | 'label';
type TTextSize = 'large' | 'medium' | 'small';

export { TTextSize, TTextVariant, TTextEmphasis, TTypographyProps, TTypography };
