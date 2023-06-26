'use client';
import { useRef } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

import { StateData } from '~@types/components/Form';

import registerFields, { RegisterFieldsData } from '~@data/fields/registerFields';

import { MainApi } from '~@lib/utils/api/api';
import { useSession } from '~@lib/context/session.context';

import Form from '~@components/Form';
import Typography from '~@components/Typography';

export const metadata: Metadata = {
  title: 'Register',
};

export default function Page() {
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

      <div className="flex items-center gap-2">
        <Typography variant="body" size="small" component="div">
          Already have an account?
        </Typography>
        <Typography
          variant="body"
          size="small"
          component={Link}
          className="my-4 underline"
          emphasis="full"
          href="/login"
        >
          Sign-In
        </Typography>
      </div>

      <Form
        fields={registerFields}
        submitProps={{
          fullWidth: true,
          children: 'Sign-Up',
        }}
        onSubmit={handleSubmit}
        onValidate={handleValidate}
      />
    </div>
  );
}
