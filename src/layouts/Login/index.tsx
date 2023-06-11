import React from 'react';

import { TDefaultLayoutProps } from '~@types/layouts';
import MainContainer from '~@components/MainComponent';

const Login = ({ children }: TDefaultLayoutProps) => {
  return (
    <MainContainer className="flex items-center justify-center bg-gradient-to-br from-brutal-primary/40 to-brutal-secondary/40">
      <div className="h-full w-full border-0 border-brutal-black bg-brutal-background px-10 py-8 text-brutal-on-background sm:h-fit sm:max-w-3xl sm:border-2">
        {children}
      </div>
    </MainContainer>
  );
};

export default Login;
