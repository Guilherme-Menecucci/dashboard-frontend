import { forwardRef } from 'react';
import clsx from 'clsx';

import { TToastProps } from '~@types/components/Toast';

import { statusIcons } from '~@data/statusIcons';

import Typography from '~@components/Typography';

// import styles from './style.module.css';

const styles = {
  "info": [
  "border-brutal-info",
        "text-brutal-info",
        "shadow-neubrutalism",
        "shadow-brutal-info"
  /* dark:border-info-300
        dark:text-info-300; */
],

"warning": [
  "order-brutal-warning",
        "text-brutal-warning",
        "shadow-neubrutalism",
        "shadow-brutal-warning"
  /* dark:border-warning-300
        dark:text-warning-300; */
],

"error": [
  " border-brutal-error",
        "text-brutal-error",
        "shadow-neubrutalism",
        "shadow-brutal-error"
  /* dark:border-error-300
        dark:text-error-300; */
],

"success": [
  "order-brutal-success",
        "text-brutal-success",
        "shadow-neubrutalism",
        "shadow-brutal-success"
  /* dark:border-success-300
        dark:text-success-300; */
],

}

const Toast = forwardRef<HTMLDivElement, TToastProps>(({ type, title, description }, ref) => {
  const Icon = statusIcons[type];

  return (
    <div
      ref={ref}
      className={clsx(
        'peer z-50 mt-4 mr-4 flex w-full items-start border-2 border-solid bg-brutal-white p-2 transition-all',
        'sm:m-0 sm:ml-4 sm:mb-4 sm:min-w-[350px] sm:peer-[]:mb-2',
        styles[type],
        // 'peer z-50 mt-4 mr-4 flex w-full items-center border-l-4 border-solid bg-white p-2 shadow-md shadow-black/20 transition-all',
        // 'sm:m-0 sm:ml-4 sm:mb-4 sm:min-w-[350px] sm:p-4 sm:peer-[]:mb-2',
        // styles[`toast-${type}`],
      )}
    >
      <Typography component="div" variant="heading" size="large">
        <Icon />
      </Typography>
      <div className="ml-4 inline-flex flex-col">
        {title ? (
          <Typography component="h2" variant="heading" size="medium">
            {title}
          </Typography>
        ) : null}
        <Typography component="p" variant="body" size="large">
          {description}
        </Typography>
      </div>
    </div>
  );
});

Toast.displayName = 'Toast';

export default Toast;
