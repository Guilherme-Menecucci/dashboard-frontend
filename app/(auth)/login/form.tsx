'use client';
import { StateData } from '~@types/components/Form';

import { MainApi } from '~@lib/utils/fetch/api';
import { useSession } from '~@lib/context/session.context';
import loginFields from '~@lib/data/fields/loginFields';

import { RegisterFieldsData } from '~@data/fields/registerFields';

import Form from '~@components/Form';
import { useToast } from '~@lib/context/toast.context';

export default function FormComponent() {
  const { addToast } = useToast();
  const { saveUser } = useSession();

  function handleSubmit(data: StateData<RegisterFieldsData>) {
    MainApi.getV1()
      .authentication.login({
        email: data.email,
        password: data.password,
      })
      .then(response => {
        const { message, data } = response.data;

        addToast({
          type: 'success',
          description: message,
        });

        saveUser(data);
      })
      .catch(() => {
        addToast({
          type: 'error',
          description: 'Something went wrong.',
        });
      });
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
