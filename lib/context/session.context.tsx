import React, { createContext, useContext, useCallback } from 'react';
import { useCookies } from 'react-cookie';
import { Api } from '~@types/_api';

import {
  TData,
  TSessionContextData,
  TSessionProviderProps,
} from '~@types/lib/context/session.context';

const SessionContext = createContext({} as TSessionContextData);

const SessionProvider = ({ children }: TSessionProviderProps) => {
  const [cookies, setCookie, removeCookie] = useCookies<keyof TData, TData>([
    'session',
    'authToken',
  ]);

  const saveSession = useCallback(
    (data: Api.TSessionApi) => {
      setCookie('authToken', data.session.authToken, {
        domain: process.env.COOKIE_DOMAIN,
        secure: process.env.NODE_ENV !== 'development',
        // sameSite: 'none',
        httpOnly: false,
        path: '/',
        maxAge: data.maxAge,
      });
      setCookie('session', data.session, {
        domain: process.env.COOKIE_DOMAIN,
        secure: process.env.NODE_ENV !== 'development',
        // sameSite: 'none',
        httpOnly: false,
        path: '/',
        maxAge: data.maxAge,
      });
    },
    [setCookie],
  );

  const clearSession = useCallback(() => {
    removeCookie('authToken');
    removeCookie('session');
  }, [removeCookie]);

  return (
    <SessionContext.Provider value={{ data: cookies, saveSession, clearSession }}>
      {children}
    </SessionContext.Provider>
  );
};

function useSession() {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error('useSession must be used within a SessionProvider');
  }

  return context;
}

export { SessionProvider, useSession };
