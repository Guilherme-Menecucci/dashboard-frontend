import Head from 'next/head';
import Link from 'next/link';

import { App } from '~@types/_app';
import { ILoginProps } from '~@types/pages/login';

import { providers } from '~@data/providers';
import loginFields from '~@data/fields/loginFields';

import { Login } from '~@layouts';

import Form from '~@components/Form';
import Typography from '~@components/Typography';
import Providers from '~@components/Providers';

const SignIn: App.TNextPageWithLayout<ILoginProps> = ({ providers }) => {
  const handleSubmit = () => {
    // Perform for submission
  };

  return (
    <>
      <Head>
        <title>Log in</title>
      </Head>
      <div className="w-full bg-inherit pb-8">
        <Typography component="h2" variant="display" size="large" emphasis="normal">
          Log in
        </Typography>
        <div className="flex items-center gap-2">
          <Typography component="div" variant="body" size="small" className="my-4">
            New to Dashboard?
          </Typography>
          <Link href="/register" passHref legacyBehavior>
            <Typography
              variant="body"
              size="small"
              component="a"
              className="my-4 underline"
              emphasis="full"
            >
              Sign Up
            </Typography>
          </Link>
        </div>

        <Form
          fields={loginFields}
          submitProps={{
            children: 'Login',
            fullWidth: true,
          }}
          onSubmit={handleSubmit}
        />

        <Link href="/register" passHref legacyBehavior>
          <Typography
            variant="body"
            size="small"
            component="a"
            emphasis="full"
            className="z-10 my-4 w-max underline"
          >
            Forgot your password?
          </Typography>
        </Link>
        <div className="relative my-4 flex justify-center overflow-hidden">
          <div className="absolute top-3 right-0 left-2/3 block border-t-2 border-neutral-900/20" />
          <Typography
            component="span"
            size="large"
            variant="body"
            className="inline-block px-5 align-baseline"
          >
            or
          </Typography>
          <div className="absolute top-3 left-0 right-2/3 block border-t-2 border-neutral-900/20" />
        </div>
        <Providers providers={providers} />
      </div>
    </>
  );
};

export default SignIn;
SignIn.getLayout = page => <Login>{page}</Login>;

export async function getServerSideProps() {
  return {
    props: {
      providers,
    },
  };
}
