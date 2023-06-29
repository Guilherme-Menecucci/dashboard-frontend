'use client';
import { Metadata } from 'next';

import { StateData } from '~@types/components/Form';

import { MainApi } from '~@lib/utils/api/api';
import { useSession } from '~@lib/context/session.context';
import loginFields from '~@lib/data/fields/loginFields';

import { RegisterFieldsData } from '~@data/fields/registerFields';

import Form from '~@components/Form';

export const metadata: Metadata = {
  title: 'Register',
};

export default function FormComponent() {
  const { saveSession } = useSession();

  function handleSubmit(data: StateData<RegisterFieldsData>) {
    MainApi.getV1()
      .users.login({
        email: data.email,
        password: data.password,
      })
      .then(data => saveSession(data.data));
  }

  return (
    <Form
      fields={loginFields}
      submitProps={{
        fullWidth: true,
        children: 'Login',
      }}
      onSubmit={handleSubmit}
    />
  );
}
