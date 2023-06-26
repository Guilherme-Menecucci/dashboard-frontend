import React, { PropsWithChildren } from 'react';
import { providers } from '~@lib/data/providers';
import Providers from '~@components/Providers';
import Typography from '~@components/Typography';

const getProviders = async () => {
  return providers;
};

export default async function Layout({ children }: PropsWithChildren) {
  const providers = await getProviders();

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative h-full w-full sm:h-fit sm:max-w-3xl">
        <div className="absolute -top-2 left-0 h-0 w-0 origin-[left_center_0px] scale-100 border-y-[0.5rem] border-r-[0.5rem] border-transparent border-r-brutal-primary-variant transition-transform duration-100" />
        <div className="absolute inset-y-0 left-0 w-2 origin-[0px_100%_0px] scale-x-100 bg-brutal-primary-variant transition-transform duration-100" />
        <div className="absolute inset-x-0 bottom-0 h-2 origin-[0px_100%_0px] scale-y-100 bg-brutal-primary-variant transition-transform duration-100" />
        <div className="absolute -right-2 bottom-0 h-0 w-0 origin-[center_bottom_0px] scale-100 border-x-[0.5rem] border-t-[0.5rem] border-transparent border-t-brutal-primary-variant transition-transform duration-100" />
        <div className="h-full w-full -translate-y-2 translate-x-2 border-0 border-brutal-primary-variant bg-brutal-surface px-10 py-8 text-brutal-on-surface transition-[border,transform] duration-100 sm:border-2">
          {children}

          <div className="relative my-4 flex justify-center overflow-hidden">
            <div className="absolute left-0 right-3/4 top-3 block translate-x-1/2 border-t-2 border-brutal-primary-variant" />
            <Typography
              component="span"
              size="large"
              variant="body"
              className="inline-block px-5 align-baseline"
            >
              or
            </Typography>
            <div className="absolute left-3/4 right-0 top-3 block -translate-x-1/2 border-t-2 border-brutal-primary-variant" />
          </div>

          <Providers providers={providers} />
        </div>
      </div>
    </div>
  );
}
