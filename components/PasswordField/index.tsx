import React, { useState } from 'react';

import { TInputProps } from '~@types/components/TextField';

import TextField from '~@components/TextField';

const PasswordField = (props: TInputProps) => {
  const [isShow, setIsShow] = useState(false);

  const handleShowPass = () => setIsShow(prevState => !prevState);

  return (
    <TextField
      {...props}
      type={isShow ? 'text' : 'password'}
      iconActionButton={isShow ? 'EyeOff' : 'Eye'}
      onActionClick={handleShowPass}
    />
  );
};

export default PasswordField;
