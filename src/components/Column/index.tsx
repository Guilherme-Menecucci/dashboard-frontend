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

const Column = forwardRef<HTMLElement, TRowProps>(
  ({ children, className = '', style, rowSpan, colSpan, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'col-span-1 p-5',
          columnsSpanGrid[colSpan - 1],
          rowsSpanGrid[rowSpan - 1],
          className,
        )}
        style={style}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Column.displayName = 'Column';

export default Column;
