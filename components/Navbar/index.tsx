'use client';
import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Typography from '~@components/Typography';
import iconData from '~@data/icons';
import { Api } from '~@types/_api';
import NavbarContainer from './container';
import { IoLogInSharp, IoLogOutSharp } from 'react-icons/io5';
import NavbarItem from './item';
import { useSession } from '~@lib/context/session.context';
import Image from 'next/image';
import { env } from '~@lib/env/client.mjs';

function ProfileNavbarItem() {
  const {
    data: { authToken, session },
  } = useSession();

  return (
    <NavbarItem className="ml-32">
      <div className="group relative flex h-full items-center justify-center p-4">
        {authToken ? (
          <div className="relative aspect-square h-10 overflow-hidden">
            <Image
              src={`${env.NEXT_PUBLIC_API_URL}/profile/${session.id}`}
              alt={session.displayName}
              fill
            />
          </div>
        ) : (
          React.createElement(iconData['PeopleCicle'], { size: '2.5rem' })
        )}
        <div className="absolute right-0 top-full hidden rounded-b-xl bg-brutal-background group-hover:block">
          <NavbarContainer submenu>
            {authToken ? (
              <NavbarItem>
                <Typography
                  component={Link}
                  href="/logout"
                  variant="title"
                  size="small"
                  className="flex h-full items-center justify-center gap-4"
                >
                  <IoLogOutSharp size="1.5em" />
                  Logout
                </Typography>
              </NavbarItem>
            ) : (
              <NavbarItem>
                <Typography
                  component={Link}
                  href="/login"
                  variant="title"
                  size="small"
                  className="flex h-full items-center justify-center gap-4"
                >
                  <IoLogInSharp size="1.5em" />
                  Login
                </Typography>
              </NavbarItem>
            )}
          </NavbarContainer>
        </div>
      </div>
    </NavbarItem>
  );
}

export default function NavbarComponent({
  navMenus,
  isSticky = false,
}: {
  navMenus: Api.TNavOptions;
  isSticky?: boolean;
}) {
  const navWrapperRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  const [sticky, setSticky] = useState(false);

  const addClasses = useCallback(() => {
    if (!navWrapperRef.current) return;
    if (!navContainerRef.current) return;

    navWrapperRef.current.classList.add('top-8', 'bg-transparent');
    // navContainerRef.current.classList.add('shadow-sm', 'shadow-brutal-white/10');
  }, []);

  const removeClasses = useCallback(() => {
    if (!navWrapperRef.current) return;
    if (!navContainerRef.current) return;

    navWrapperRef.current.classList.remove('top-8', 'bg-transparent');
    // navContainerRef.current.classList.remove('shadow-sm', 'shadow-brutal-white/10');
  }, []);

  useEffect(() => {
    if (sticky) {
      addClasses();
    } else {
      removeClasses();
    }
  }, [addClasses, removeClasses, sticky]);

  useEffect(() => {
    if (!isSticky) return;
    if (!document) return;

    const bodyElement = document.querySelector('#body');
    if (!bodyElement) return;

    if (bodyElement.scrollTop > 5 * 16 && navWrapperRef.current) {
      addClasses();
    }

    const handleScroll = () => {
      setSticky(bodyElement.scrollTop > 5 * 16);
    };

    bodyElement.addEventListener('scroll', handleScroll, true);

    return () => {
      bodyElement.removeEventListener('scroll', handleScroll, true);
    };
  }, [addClasses, isSticky]);

  return (
    <header className="pointer-events-none inline cursor-default">
      <div
        ref={navWrapperRef}
        className="pointer-events-none sticky top-0 z-40 flex w-full justify-center bg-brutal-background text-brutal-on-background transition-all duration-500"
      >
        <NavbarContainer ref={navContainerRef}>
          {navMenus.map(menu => (
            <NavbarItem key={menu.title}>
              <Typography
                component={Link}
                href={menu.href}
                variant="title"
                size="small"
                className="flex h-full items-center justify-center gap-4 p-4"
              >
                {React.createElement(iconData[menu.icon], { size: '1.5em' })}
                {menu.title}
              </Typography>
            </NavbarItem>
          ))}
          <ProfileNavbarItem />
        </NavbarContainer>
      </div>
    </header>
  );
}
