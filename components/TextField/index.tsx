import React, { ChangeEvent, FocusEvent, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { TInputProps } from '~@types/components/TextField';

import Typography from '~@components/Typography';

import styles from './styles.module.css';
import iconData from '~@lib/data/icons';

const TextField = (props: TInputProps) => {
  const {
    fullWidth = false,
    focusIn = false,
    color = 'primary',
    placeholder,
    value,
    onChange: customHandleChange,
    iconActionButton,
    id,
    disabled,
    icon,
    onActionClick: handleActionClick,
    type,
    variant = 'variant',
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    if (!focusIn || focusIn === 0) return;

    const TIME_TIMEOUT = typeof focusIn === 'boolean' ? 1 : focusIn;

    const idTimeout = setTimeout(() => {
      setIsFocus(true);
    }, TIME_TIMEOUT);

    return () => {
      clearTimeout(idTimeout);
    };
  }, [focusIn]);

  useEffect(() => {
    if (!isFocus) return;

    inputRef.current?.focus();
  }, [isFocus]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { parentElement: container, value },
    } = e;

    if (!container) {
      return;
    }

    container.classList.remove(styles['valid']);

    if (!container.classList.contains('') && value !== '') {
      container.classList.add(styles['valid']);
    }

    customHandleChange && customHandleChange(e);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    const container = e.currentTarget.parentElement;

    if (!container) {
      return;
    }
  };

  return (
    <label
      htmlFor={id}
      className={clsx(
        'group relative inline-block h-12 w-full',
        fullWidth ? 'max-w-[calc(100%-0.5rem)]' : 'max-w-xs',
        disabled ? 'cursor-not-allowed select-none' : 'cursor-text',
        value && value !== '' && styles['valid'],
        // variant === 'outlined' ? 'bg-inherit' : '',
        styles[`textField-${variant}`],
      )}
    >
      <input
        id={id}
        ref={inputRef}
        type={type}
        value={value}
        onBlur={handleFocus}
        onFocus={handleFocus}
        onChange={handleChange}
        className={clsx(
          'peer absolute bottom-0 left-0 m-0 w-full rounded-t-xl border-0 text-base transition-[height,padding] duration-500',
          'disabled:cursor-not-allowed disabled:select-none',
          styles[`textField-input-${color}`],
          icon ? 'pl-10' : 'pl-4',
          iconActionButton ? 'pr-12' : 'pr-4',
        )}
        disabled={disabled}
        {...rest}
      />
      {icon && (
        <div
          className={clsx(
            'absolute top-1/2 -translate-y-1/3 px-2 text-2xl text-brutal-black transition-colors duration-500',
            'peer-disabled:select-none peer-disabled:text-opacity-40',
          )}
        >
          {React.createElement(iconData[icon])}
        </div>
      )}
      <Typography
        component="span"
        variant="label"
        size="large"
        className={clsx(
          'absolute top-1/2 -translate-y-1/2 px-1 text-xl capitalize text-brutal-black transition-[top,font-size,left,color] duration-500',
          icon ? 'left-9' : 'left-4',
        )}
      >
        {placeholder}
      </Typography>
      {iconActionButton && (
        <button
          type="button"
          className={clsx(
            'absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full p-1 text-2xl text-brutal-black',
            'peer-disabled:select-none peer-disabled:text-opacity-40',
          )}
          onClick={handleActionClick}
          disabled={disabled}
        >
          {React.createElement(iconData[iconActionButton])}
        </button>
      )}
    </label>
  );
};

TextField.displayName = 'TextField';

export default TextField;
