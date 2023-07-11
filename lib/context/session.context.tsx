'use client';
import { deleteCookie } from 'cookies-next';
import React, { createContext, useContext, useCallback, useState, useEffect } from 'react';
import { account_v1 } from '~@types/utils/fetch/api/account/v1';
import { MainApi } from '~@lib/utils/fetch/api';
// import { useCookies } from 'react-cookie';

import { TData, TSessionContextData, TSessionProviderProps } from '~@types/context/session.context';

const SessionContext = createContext({} as TSessionContextData);

const SessionProvider = ({ children, cookieStore }: TSessionProviderProps) => {
  const [data, setData] = useState<TData>(() => {
    const cookiesData = {
      refreshToken: '',
      session: null,
    };

    const refreshToken = cookieStore['refreshToken'];
    const session = cookieStore['session'];

    if (!refreshToken || refreshToken === '') {
      return cookiesData;
    }

    if (!session || session === '') {
      return cookiesData;
    }

    cookiesData['refreshToken'] = refreshToken;
    cookiesData['session'] = JSON.parse(session);

    return cookiesData;
  });

  useEffect(() => {
    const refreshToken = cookieStore['refreshToken'];

    if (!refreshToken) {
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('session');
      deleteCookie('session');
      return;
    }

    if (!cookieStore['session']) {
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('session');
      deleteCookie('session');
      return;
    }

    const session = JSON.parse(cookieStore['session']);

    if (!session) {
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('session');
      deleteCookie('refreshToken');
    }

    const localAuth = localStorage.getItem('authToken');

    if (!localAuth) {
      localStorage.setItem('refreshToken', refreshToken);
    }

    const localSession = localStorage.getItem('session');

    if (!localSession) {
      localStorage.setItem('session', JSON.stringify(session));
    }
  }, [cookieStore]);

  const saveUser = useCallback((data: account_v1.Schema$CookieSession) => {
    const session = data;

    localStorage.setItem('session', JSON.stringify(session));
    localStorage.setItem('refreshToken', session.refreshToken);

    // setCookie('authToken', session.sessionToken, {
    //   domain: process.env.COOKIE_DOMAIN,
    //   secure: process.env.NODE_ENV !== 'development',
    //   // sameSite: 'none',
    //   httpOnly: false,
    //   path: '/',
    //   maxAge: data.maxAge,
    // });
    // setCookie('session', data.session, {
    //   domain: process.env.COOKIE_DOMAIN,
    //   secure: process.env.NODE_ENV !== 'development',
    //   // sameSite: 'none',
    //   httpOnly: false,
    //   path: '/',
    //   maxAge: data.maxAge,
    // });

    setData({ refreshToken: session.refreshToken, session: session });
  }, []);

  const clearUser = useCallback(async () => {
    return MainApi.getV1()
      .authentication.logout()
      .then(() => {
        deleteCookie('authToken');
        deleteCookie('session');
        setData({} as TData);
      });
  }, []);

  return (
    <SessionContext.Provider value={{ data, saveUser, clearUser }}>
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
