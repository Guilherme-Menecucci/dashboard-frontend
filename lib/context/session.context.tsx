'use client';
import { deleteCookie, setCookie } from 'cookies-next';
import React, { createContext, useContext, useCallback, useState } from 'react';
// import { useCookies } from 'react-cookie';
import { Api } from '~@types/_api';

import {
  TData,
  TSessionContextData,
  TSessionProviderProps,
} from '~@types/lib/context/session.context';

const SessionContext = createContext({} as TSessionContextData);

const SessionProvider = ({
  children,
  cookieStore,
}: TSessionProviderProps & { cookieStore: { [x: string]: string } }) => {
  // const [cookies, setCookie, removeCookie] = useCookies<keyof TData, TData>([
  //   'session',
  //   'authToken',
  // ]);
  const [data, setData] = useState<TData>(() => {
    const cookiesData = {} as TData;

    const session = cookieStore['session'];
    const authToken = cookieStore['authToken'];

    if (authToken && authToken !== '') {
      cookiesData['authToken'] = authToken;
    }

    if (session && session !== '') {
      cookiesData['session'] = JSON.parse(session);
    }

    return cookiesData;
  });

  const saveSession = useCallback((data: Api.TSessionApi) => {
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

    setData({ authToken: data.session.authToken, session: data.session });
  }, []);

  const clearSession = useCallback(() => {
    deleteCookie('authToken');
    deleteCookie('session');
    setData({} as TData);
  }, []);

  return (
    <SessionContext.Provider value={{ data, saveSession, clearSession }}>
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
