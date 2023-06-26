import clsx from 'clsx';
import React, { forwardRef } from 'react';

import { TRowProps } from '~@types/components/Row';

const Row = forwardRef<HTMLElement, TRowProps>(
  ({ children, flex = false, className = '', style, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={clsx(!flex && 'grid grid-cols-12', className)}
        style={style}
        {...props}
      >
        {children}
      </section>
    );
  },
);

Row.displayName = 'Row';

export default Row;
