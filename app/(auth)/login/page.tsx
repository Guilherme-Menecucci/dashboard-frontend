import Link from 'next/link';
import { Metadata } from 'next';

import loginFields from '~@data/fields/loginFields';

import Form from '~@components/Form';
import Typography from '~@components/Typography';

export const metadata: Metadata = {
  title: 'Log in',
};

export default async function Page() {
  return (
    <div className="w-full bg-inherit pb-8">
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

      <Form
        fields={loginFields}
        submitProps={{
          children: 'Login',
          fullWidth: true,
        }}
        // onSubmit={handleSubmit}
      />

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
    </div>
  );
}
