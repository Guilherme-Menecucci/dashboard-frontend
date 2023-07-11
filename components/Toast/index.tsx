import { forwardRef } from 'react';
import clsx from 'clsx';

import { TToastProps } from '~@types/components/Toast';

import { statusIcons } from '~@data/statusIcons';

import Typography from '~@components/Typography';

import styles from './style.module.css';

const Toast = forwardRef<HTMLDivElement, TToastProps>(({ type, title, description }, ref) => {
  const Icon = statusIcons[type];

  return (
    <div
      ref={ref}
      className={clsx(
        'peer relative z-50 mr-4 mt-4 w-full shadow-2xl shadow-brutal-background transition-all',
        'sm:m-0 sm:mb-4 sm:ml-4 sm:min-w-[350px] sm:peer-[]:mb-4',
        styles[`toast-${type}`],
      )}
    >
      <div className="absolute -top-2 left-0 h-0 w-0 scale-100 border-y-[0.5rem] border-r-[0.5rem] border-transparent" />
      <div className="absolute inset-y-0 left-0 w-2 scale-x-100" />
      <div className="absolute inset-x-0 bottom-0 h-2 scale-y-100" />
      <div className="absolute -right-2 bottom-0 h-0 w-0 scale-100 border-x-[0.5rem] border-t-[0.5rem] border-transparent" />
      <div className="flex h-full w-full -translate-y-2 translate-x-2 items-start border-2 bg-brutal-surface p-2">
        <Typography component="div" variant="heading" size="small">
          <Icon />
        </Typography>
        <div className="ml-4 inline-flex flex-col">
          {title ? (
            <Typography component="h2" variant="title" size="large">
              {title}
            </Typography>
          ) : null}
          <Typography component="p" variant="body" size="large">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
});

Toast.displayName = 'Toast';

export default Toast;
