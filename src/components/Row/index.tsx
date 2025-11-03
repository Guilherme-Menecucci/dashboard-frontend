import clsx from 'clsx';
import React, { forwardRef } from 'react';

import { TRowProps } from '~@types/components/Row';

const columnsSpanGrid = [
  'col-span-1',
  'col-span-2',
  'col-span-3',
  'col-span-4',
  'col-span-5',
  'col-span-6',
  'col-span-7',
  'col-span-8',
  'col-span-9',
  'col-span-10',
  'col-span-11',
  'col-span-12',
];

const rowsSpanGrid = [
  'row-span-1',
  'row-span-2',
  'row-span-3',
  'row-span-4',
  'row-span-5',
  'row-span-6',
  'row-span-7',
  'row-span-8',
  'row-span-9',
  'row-span-10',
  'row-span-11',
  'row-span-12',
];

const Row = forwardRef<HTMLElement, TRowProps>(
  ({ children, flex = false, className = '', style, rowSpan, colSpan, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={clsx(
          className,
          !flex && 'grid grid-cols-12',
          'bg-inherit',
          columnsSpanGrid[colSpan - 1],
          rowsSpanGrid[rowSpan - 1],
        )}
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
