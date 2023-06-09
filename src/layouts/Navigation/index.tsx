import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { IoMenuOutline, IoSearchOutline } from 'react-icons/io5';

import { TDefaultLayoutProps } from '~@types/layouts';

import { useNavbar } from '~@lib/context/navbar.context';

import MainContainer from '~@components/MainComponent';
import Row from '~@components/Row';
import Typography from '~@components/Typography';
import TextField from '~@components/TextField';
import NavComponent from '~@components/Navbar';

const Navigation = ({ children }: TDefaultLayoutProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string | string[]>('');
  const { toggleNavClass } = useNavbar();

  const handleToggleNav = () => {
    toggleNavClass();
  };

  useEffect(() => {
    if (!router.isReady) return;

    // Search not updating search value
    setSearchValue(router.query.s || '');
  }, [router, router.query.s]);

  return (
    <div className="flex h-screen w-full flex-row overflow-hidden">
      <NavComponent />
      <MainContainer>
        <Row className="fixed inset-x-0 top-0 z-50 h-[6.2rem] items-center border-b-4 border-b-brutal-black bg-brutal-surface px-4 transition-[left] lg:left-28 group-[.nav-open]/layout:lg:left-1/3 2xl:left-auto 2xl:w-9/12 min-[1792px]:w-10/12">
          <Typography
            component="div"
            variant="heading"
            size="large"
            className="col-span-1 hidden h-24 cursor-pointer p-4 lg:block group-[.nav-open]/layout:lg:col-span-2 2xl:hidden"
            onClick={handleToggleNav}
          >
            <IoMenuOutline size="100%" />
          </Typography>
          <div className="col-span-10 col-start-2 bg-inherit px-4 lg:col-span-6 lg:col-start-4">
            <TextField
              id="search"
              name="search"
              type="search"
              value={searchValue}
              variant="outlined"
              fullWidth
              placeholder="Search"
              iconActionButton={IoSearchOutline}
              onChange={event => setSearchValue(event.target.value)}
              onActionClick={event => {
                const { currentTarget } = event;

                const value = currentTarget.closest('label')?.querySelector('input')?.value;

                if (value && value !== '') {
                  router.query.s = value;
                  router.pathname = '/search';
                  router.push(router);
                }
              }}
              onKeyDown={event => {
                const { key, currentTarget } = event;

                if (key === 'Enter') {
                  router.query.s = currentTarget.value;
                  router.pathname = '/search';
                  router.push(router);
                }
              }}
            />
          </div>
        </Row>
        <div className="relative min-h-screen">{children}</div>
      </MainContainer>
    </div>
  );
};

export default Navigation;
