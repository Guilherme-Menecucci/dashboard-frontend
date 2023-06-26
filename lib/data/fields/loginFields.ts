import { Fields } from '~@types/components/Form';

const loginFields: Fields[] = [
  {
    id: 'username',
    name: 'username',
    type: 'text',
    icon: 'Person',
    variant: 'outlined',
    focusIn: 500,
    required: true,
    fullWidth: true,
    placeholder: 'Username / Email',
    autoComplete: 'username',
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    icon: 'Key',
    color: 'primary',
    variant: 'outlined',
    required: true,
    fullWidth: true,
    placeholder: 'Password',
    autoComplete: 'current-password',
  },
];

export default loginFields;
