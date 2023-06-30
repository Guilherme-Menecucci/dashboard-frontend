import { ReactNode } from 'react';
import { cookies } from 'next/headers';

import { SessionProvider } from './session.context';
import { ToastProvider } from './toast.context';
// import { CookiesProvider } from 'react-cookie';
// import { NavbarProvider } from './navbar.context';

export default function ContextProvider({ children }: { children: ReactNode }) {
  const cookieStore: { [x: string]: string } = {};
  cookies()
    .getAll()
    .map(cookie => {
      cookieStore[cookie.name] = cookie.value;
    });

  return (
    // <ThemeProvider enableSystem={true} attribute="class">
    // <CookiesProvider>
    <SessionProvider cookieStore={cookieStore}>
      {/* <NavbarProvider> */}
      <ToastProvider>{children}</ToastProvider>
      {/* </NavbarProvider> */}
    </SessionProvider>
    // </CookiesProvider>
    // </ThemeProvider>
  );
}
