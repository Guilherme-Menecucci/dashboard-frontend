import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import { providers } from '~@lib/data/providers';

import Typography from '~@components/Typography';
import Providers from '~@components/Providers';

import FormComponent from './form';

export const metadata: Metadata = {
  title: 'Log in',
};

const getProviders = async () => {
  return providers;
};

export default async function Page() {
  const providers = await getProviders();

  return (
    <div className="flex h-screen w-full bg-inherit">
      <div className="flex w-full max-w-3xl flex-col justify-center p-8 shadow-[4px_0px_6px] shadow-brutal-secondary-variant">
        <Typography component="h2" variant="display" size="large" emphasis="normal">
          Log in
        </Typography>
        <div className="flex items-center gap-2">
          <Typography component="div" variant="body" size="small" className="my-4">
            New to Dashboard?
          </Typography>
          <Typography
            variant="body"
            size="small"
            component={Link}
            className="my-4 underline"
            emphasis="full"
            href="/register"
          >
            Sign Up
          </Typography>
        </div>

        <FormComponent />

        <Typography
          variant="body"
          size="small"
          component={Link}
          emphasis="full"
          className="z-10 my-4 w-max underline"
          href="/register"
        >
          Forgot your password?
        </Typography>
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
      <div className="relative flex-1 after:absolute after:inset-0 after:bg-brutal-white/10">
        <Image
          src="/images/background (8).png"
          fill
          className="object-cover object-left"
          alt="Movie List"
          quality={100}
        />
      </div>
    </div>
  );
}
