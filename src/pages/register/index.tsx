import { useRef } from 'react';
import clsx from 'clsx';

import Head from 'next/head';
import Link from 'next/link';

import { App } from '~@types/_app';
import { IRegisterProps } from '~@types/pages/register';

import { providers } from '~@data/providers';

import { Login } from '~@layouts';

import { MountAnimation } from '~@components/MountAnimation';
import Form from '~@components/Form';
import Typography from '~@components/Typography';
import Providers from '~@components/Providers';
import registerFields, { RegisterFieldsData } from '~@data/fields/registerFields';
import { MainApi } from '~@lib/utils/api/api';
import { StateData } from '~@types/components/Form';
import { useSession } from '~@lib/context/session.context';

const Register: App.TNextPageWithLayout<IRegisterProps> = ({ providers }) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  const { saveSession } = useSession();

  const handleValidate = (data: StateData<RegisterFieldsData>) => {
    // Matching emails
    if (data.email !== data['confirm-email']) return false;

    // Checking password size
    if (data.password.length < 8 || data.password.length > 20) return false;

    // Matching passwords
    if (data.password !== data['confirm-password']) return false;

    return true;
  };

  const handleSubmit = (data: StateData<RegisterFieldsData>) => {
    MainApi.getV1()
      .users.register({
        email: data.email,
        password: data.password,
        name: data.username,
      })
      .then(data => saveSession(data.data));
  };

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <MountAnimation nodeRef={nodeRef}>
        <div ref={nodeRef} className="w-full bg-inherit pb-8">
          <Typography
            variant="display"
            size="medium"
            component="h2"
            className="mb-4 w-min sm:w-max"
            emphasis="normal"
          >
            Register
          </Typography>

          <Form
            fields={registerFields}
            submitProps={{
              fullWidth: true,
              children: 'Sign-Up',
            }}
            onSubmit={handleSubmit}
            onValidate={handleValidate}
          />
          {/* <form>
            <TextField
              ref={inputRef}
              id="username"
              name="username"
              type="text"
              icon={IoPersonOutline}
              value={data.email}
              required
              onChange={handleChange}
              fullWidth
              placeholder="Username"
              autoComplete="username"
            />
            <TextField
              id="email"
              name="email"
              type="text"
              icon={IoMailOutline}
              value={data.email}
              required
              onChange={handleChange}
              fullWidth
              placeholder="E-mail"
              autoComplete="email"
            />
            <TextField
              id="confirm-email"
              name="confirm-email"
              type="text"
              icon={IoMailOutline}
              value={data.confirmEmail}
              required
              onChange={handleChange}
              fullWidth
              placeholder="Confirm Email"
              autoComplete="email"
            />
            <TextField
              id="password"
              name="password"
              type="password"
              icon={IoKeyOutline}
              color="primary"
              value={data.password}
              required
              onChange={handleChange}
              fullWidth
              placeholder="Password"
              autoComplete="new-password"
            />
            <TextField
              id="confirm-password"
              name="confirm-password"
              type="password"
              icon={IoKeyOutline}
              color="primary"
              value={data.password}
              required
              onChange={handleChange}
              fullWidth
              placeholder="Confirm Password"
              autoComplete="new-password"
            />
            <Button type="button" variant="contained" className="self-end" fullWidth>
              Sign-Up
            </Button>
          </form> */}
          <div className="relative my-4 flex justify-center overflow-hidden">
            <Typography
              component="span"
              size="large"
              variant="body"
              className={clsx(
                'inline-block px-5 align-baseline',
                'before:absolute before:top-3 before:right-0 before:left-2/3 before:block before:border-t-2 before:border-neutral-900/20',
                'after:absolute after:left-0 after:right-2/3 after:top-3 after:block after:border-t-2 after:border-neutral-900/20',
              )}
            >
              or
            </Typography>
          </div>

          <Providers providers={providers} />
          <div className="mt-8 flex items-center justify-center gap-2">
            <Typography variant="body" size="small" component="div">
              Already have an account?
            </Typography>
            <Link href="/login" passHref legacyBehavior>
              <Typography
                variant="body"
                size="small"
                component="a"
                className="my-4 underline"
                emphasis="full"
              >
                Sign-In
              </Typography>
            </Link>
          </div>
        </div>
      </MountAnimation>
    </>
  );
};

export default Register;
Register.getLayout = page => {
  return <Login>{page}</Login>;
};

export async function getServerSideProps() {
  return {
    props: {
      providers,
    },
  };
}

// const Providers = () => {
//   return (
//     <div className="flex w-full flex-wrap justify-around gap-4">
//       {images.map(image => (
//         <button
//           // onClick={() => signIn(provider.id)}
//           // Redirect to Github Login page
//           // Then github comes back and send data to backend
//           key={image.id}
//           className={clsx(
//             'relative aspect-square overflow-hidden rounded-md p-4 backdrop-blur-sm transition-colors duration-500 sm:rounded-xl',
//             'bg-neutral-900/10',
//             'shadow-md shadow-neutral-100/10',
//           )}
//         >
//           <div className="relative h-12 w-12">
//             <Image alt={'Log with ' + image.id} src={image.src} layout="fill" objectFit="contain" />
//           </div>
//         </button>
//       ))}
//     </div>
//   );
// };
