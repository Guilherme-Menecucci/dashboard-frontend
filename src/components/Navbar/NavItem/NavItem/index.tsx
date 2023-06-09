import React, { forwardRef } from 'react';
import clsx from 'clsx';

import { NavItemProps } from './index.d';

const NavItem = forwardRef<HTMLLIElement, NavItemProps>(
  ({ active, isHover, children, className }, ref) => {
    const textClass = !className?.includes('text-')
      ? active
        ? 'text-brutal-on-primary'
        : 'text-brutal-secondary'
      : '';

    return (
      <li
        ref={ref}
        className={clsx(
          'peer flex aspect-square flex-col items-center overflow-x-hidden border-2 p-3 shadow-neubrutalism',
          'select-none lg:aspect-auto lg:flex-row lg:gap-6 lg:peer-[]:mt-2',
          '2xl:h-auto 2xl:justify-start',
          active && 'border-brutal-black bg-brutal-primary shadow-brutal-black',
          !active && 'border-brutal-surface shadow-brutal-surface',
          !active &&
            isHover &&
            'cursor-pointer hover:border-brutal-black hover:bg-brutal-primary/50 hover:shadow-brutal-black',
          `justify-center group-[.nav-open]/layout:lg:justify-start`,
          textClass,
          className,
        )}
      >
        {children}
      </li>
    );
  },
);

NavItem.displayName = 'NavItem';

export default NavItem;
