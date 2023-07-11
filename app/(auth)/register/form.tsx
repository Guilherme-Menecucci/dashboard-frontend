'use client';
import { StateData } from '~@types/components/Form';

import { MainApi } from '~@lib/utils/fetch/api';
import { useSession } from '~@lib/context/session.context';
import { useToast } from '~@lib/context/toast.context';

import registerFields, { RegisterFieldsData } from '~@data/fields/registerFields';

import Form from '~@components/Form';

export default function FormComponent() {
  const { addToast } = useToast();
  const { saveUser } = useSession();

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
      .account.register({
        email: data.email,
        password: data.password,
        name: data.username,
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
