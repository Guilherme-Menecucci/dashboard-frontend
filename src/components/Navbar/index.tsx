import React, { useMemo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { IoLogOutOutline } from 'react-icons/io5';

import { env } from '~@env/client.mjs';

import { useSession } from '~@lib/context/session.context';

import { navOptions } from '~@data/navOptions';

import Typography from '~@components/Typography';
import { NavIconItem, NavItem } from '~@components/Navbar/NavItem';

const NavComponent: React.FunctionComponent = () => {
  const {
    data: { session },
  } = useSession();

  const { asPath } = useRouter();

  const renderNavs = useMemo(
    () =>
      navOptions.map(({ icon: Icon, title, href }) => (
        <NavIconItem key={title} href={href} Icon={Icon} title={title} active={href === asPath} />
      )),
    [asPath],
  );

  return (
    <>
      <div className="hidden h-full w-2/12 overflow-x-hidden border-r-2 border-brutal-black bg-brutal-surface p-4 transition-[width] lg:flex lg:w-28 lg:flex-col group-[.nav-open]/layout:lg:w-4/12 2xl:w-3/12 min-[1792px]:w-2/12">
        <div className="mx-auto flex h-full w-full flex-col sm:w-[4.5rem] group-[.nav-open]/layout:sm:w-full 2xl:w-full">
          <Typography
            component="div"
            variant="heading"
            size="large"
            className="text-shadow-neubrutalism relative h-16 self-center px-4 text-center tracking-widest text-brutal-primary"
            emphasis="full"
            emphasisColor="secondary"
          >
            <span className="sm:hidden group-[.nav-open]/layout:sm:block 2xl:block">Dashboard</span>
            <span className="sm:block group-[.nav-open]/layout:sm:hidden 2xl:hidden">D</span>
          </Typography>
          <nav className="mt-5 flex h-full w-full flex-col items-stretch gap-2">
            <div className="border-t-2 border-brutal-black" />
            {session && (
              <>
                <ul>
                  <NavItem>
                    <span className="relative aspect-square h-10 border-2 border-brutal-white shadow-neubrutalism shadow-brutal-white">
                      <Image
                        src={`${env.NEXT_PUBLIC_API_URL}/profile/${session.id}`}
                        alt={session.displayName}
                        layout="fill"
                      />
                    </span>
                    <div className="sm:hidden group-[.nav-open]/layout:sm:block 2xl:block">
                      <Typography component="h2" variant="title" size="large">
                        {session.displayName}
                      </Typography>
                      <Typography component="h2" variant="label" size="large">
                        {session.login}
                      </Typography>
                    </div>
                  </NavItem>
                </ul>
                <div className="border-t-2 border-brutal-black" />
              </>
            )}
            <ul>{renderNavs}</ul>
            <div className="mt-auto border-t-2 border-brutal-black" />
            <ul>
              <NavIconItem
                Icon={IoLogOutOutline}
                title="Logout"
                href="/logout"
                className="cursor-pointer text-brutal-red"
                isHover={false}
              />
            </ul>
          </nav>
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-brutal-black bg-brutal-surface pt-2 pb-4 lg:hidden">
        <nav className="flex w-full flex-col gap-6">
          <ul className="flex justify-around">{renderNavs}</ul>
        </nav>
      </div>
    </>
  );
};

export default NavComponent;
