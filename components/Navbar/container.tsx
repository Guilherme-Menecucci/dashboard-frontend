import clsx from 'clsx';
import { forwardRef } from 'react';

const NavbarContainer = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; submenu?: boolean }
>(({ children, submenu = false }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(
        'pointer-events-auto z-40 w-full min-w-[10rem] max-w-fit rounded-xl bg-brutal-background',
        submenu ? 'pb-2' : 'px-8',
      )}
    >
      <ol className="flex h-nav w-full items-stretch justify-between gap-4">{children}</ol>
    </div>
  );
});

NavbarContainer.displayName = 'NavbarContainer';

export default NavbarContainer;
