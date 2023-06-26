import clsx from 'clsx';
import { forwardRef } from 'react';

const NavbarItem = forwardRef<
  HTMLLIElement,
  { children: React.ReactNode; className?: string; hoverable?: boolean }
>(({ children, className, hoverable = true }, ref) => {
  return (
    <li
      ref={ref}
      className={clsx(
        'h-nav w-full cursor-pointer',
        className,
        hoverable &&
          'bg-transparent transition-colors duration-150 hover:bg-brutal-white/25 hover:duration-500',
      )}
    >
      {children}
    </li>
  );
});

NavbarItem.displayName = 'NavbarItem';

export default NavbarItem;
