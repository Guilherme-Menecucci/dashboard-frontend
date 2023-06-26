import React, { PropsWithChildren } from 'react';

import { navOptions } from '~@data/navOptions';

import NavbarComponent from '~@components/Navbar';
import Link from 'next/link';

const getNav = async () => {
  return navOptions;
};

export default async function Layout({ children }: PropsWithChildren) {
  const nav = await getNav();
  return (
    <>
      <NavbarComponent isSticky navMenus={nav} />
      <div className="flex min-h-nav-screen w-full flex-col">
        <main>{children}</main>
        <footer className="mt-auto flex w-full justify-center p-8">
          <Link className="mr-2 text-brutal-primary-variant underline" href="/help/privacy">
            Terms of Use
          </Link>
          <Link className="mr-4 text-brutal-primary-variant underline" href="/help/privacy">
            Privacy Policy
          </Link>
          <span>Localhost Dashboard</span>
        </footer>
      </div>
    </>
  );
}
