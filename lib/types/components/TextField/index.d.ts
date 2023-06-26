import React, { InputHTMLAttributes } from 'react';
import { App } from '~@types/_app';

type TInputTypes = 'email' | 'text' | 'password' | 'search' | 'url' | 'tel';

type TInputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  type: TInputTypes;
  name: string;
  icon?: string;
  color?: App.TThemeColors;
  focusIn?: number | boolean | undefined;
  variant?: App.TThemeVariants;
  fullWidth?: boolean;
  placeholder: string;
  onActionClick?: React.MouseEventHandler<HTMLButtonElement>;
  iconActionButton?: string;
};

export { TInputTypes, TInputProps };
