import React from 'react';
import { IconType } from 'react-icons/lib';
import { TThemeColors } from '~@types/_app';

type TButtonVariants = 'text' | 'outlined' | 'contained';

interface IButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  color?: TThemeColors;
  icon: IconType;
  variant?: TButtonVariants;
}

interface IButtonTextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  color?: TThemeColors;
  icon?: IconType;
  children: React.ReactNode;
  variant?: TButtonVariants;
}

type TButtonProps = IButtonIconProps | IButtonTextProps;

export { TButtonVariants, TButtonProps, IButtonIconProps, IButtonTextProps };
