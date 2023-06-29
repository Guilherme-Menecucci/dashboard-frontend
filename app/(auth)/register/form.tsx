'use client';
import { Metadata } from 'next';

import { StateData } from '~@types/components/Form';

import { MainApi } from '~@lib/utils/api/api';
import { useSession } from '~@lib/context/session.context';

import registerFields, { RegisterFieldsData } from '~@data/fields/registerFields';

import Form from '~@components/Form';

export const metadata: Metadata = {
  title: 'Register',
};

export default function FormComponent() {
  const { saveSession } = useSession();

  function handleValidate(data: StateData<RegisterFieldsData>) {
    // Matching emails
    if (data.email !== data['confirm-email']) return false;

    // Checking password size
    if (data.password.length < 8 || data.password.length > 20) return false;

    // Matching passwords
    if (data.password !== data['confirm-password']) return false;

    return true;
  }

  function handleSubmit(data: StateData<RegisterFieldsData>) {
    MainApi.getV1()
      .users.register({
        email: data.email,
        password: data.password,
        name: data.username,
      })
      .then(data => saveSession(data.data));
  }

  return (
    <Form
      fields={registerFields}
      submitProps={{
        fullWidth: true,
        children: 'Sign-Up',
      }}
      onSubmit={handleSubmit}
      onValidate={handleValidate}
    />
  );
}
