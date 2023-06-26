import { ReactNode } from 'react';
import { App } from '~@types/_app';

type TToastProps = {
  type: App.TStatus;
  title?: string | ReactNode;
  description: string | ReactNode;
};

export { TToastProps };
