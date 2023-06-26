'use client';
import React, { FocusEvent, forwardRef } from 'react';
import clsx from 'clsx';

import { TButtonProps } from '~@types/components/Button';

import Ripple from '~@components/Ripple';
import Typography from '~@components/Typography';

// import styles from './style.module.css';

const Button = forwardRef<HTMLButtonElement, TButtonProps>((props, ref) => {
  const {
    fullWidth = false,
    // color = 'primary',
    // variant = 'text',
    children,
    icon: Icon,
    onClick: customHandleClick,
    disabled,
    className,
    ...rest
  } = props;

  const handleFocus = (e: FocusEvent<HTMLButtonElement>) => {
    const container = e.currentTarget;

    container.classList.toggle('focus');
  };

  return (
    <button
      className={clsx(
        'relative inline-flex min-w-[calc(100%-1rem)] cursor-pointer items-center justify-center overflow-hidden text-center', // transition-colors',
        'rounded-full border-2 bg-brutal-black shadow-none shadow-transparent transition-all duration-500',
        // TODO: Dont do hover on disabled
        'hover:-translate-x-1 hover:-translate-y-1 hover:border-brutal-black hover:bg-brutal-seafoam hover:text-brutal-black hover:shadow-neubrutalism hover:shadow-brutal-black',
        !children ? `h-9 w-9 px-0 sm:min-w-0` : 'h-10 px-6 sm:min-w-[9.25rem]',
        // styles[`btn-${variant}-${color}`],
        fullWidth && 'w-full',
        !className?.includes('text-') && 'text-white',
        !className?.includes('border-') && 'border-transparent',
        className,
      )}
      onClick={customHandleClick}
      onBlur={handleFocus}
      onFocus={handleFocus}
      disabled={disabled}
      ref={ref}
      {...rest}
    >
      <Ripple disabled={disabled} />

      {Icon ? (
        <Typography
          variant="heading"
          size="large"
          component="div"
          className={clsx(children ? 'mr-2' : className)}
        >
          <Icon />
        </Typography>
      ) : null}

      {children ? (
        <Typography variant="label" size="large" component="span" className="inline">
          {children}
        </Typography>
      ) : null}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
