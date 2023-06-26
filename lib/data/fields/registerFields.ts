import { Fields } from '~@types/components/Form';

type RegisterFieldsData = 'username' | 'email' | 'confirm-email' | 'password' | 'confirm-password';

const registerFields: Fields[] = [
  {
    id: 'username',
    name: 'username',
    type: 'text',
    icon: 'Person',
    variant: 'outlined',
    focusIn: 500,
    required: true,
    fullWidth: true,
    placeholder: 'Username',
    autoComplete: 'username',
  },
  {
    id: 'email',
    name: 'email',
    type: 'text',
    icon: 'Mail',
    variant: 'outlined',
    required: true,
    fullWidth: true,
    placeholder: 'E-mail',
    autoComplete: 'email',
  },
  {
    id: 'confirm-email',
    name: 'confirm-email',
    type: 'text',
    icon: 'Mail',
    variant: 'outlined',
    required: true,
    fullWidth: true,
    placeholder: 'Confirm Email',
    autoComplete: 'email',
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    icon: 'Key',
    variant: 'outlined',
    color: 'primary',
    required: true,
    fullWidth: true,
    placeholder: 'Password',
    autoComplete: 'new-password',
  },
  {
    id: 'confirm-password',
    name: 'confirm-password',
    type: 'password',
    icon: 'Key',
    variant: 'outlined',
    color: 'primary',
    required: true,
    fullWidth: true,
    placeholder: 'Confirm Password',
    autoComplete: 'new-password',
  },
];

export default registerFields;
export type { RegisterFieldsData };
