import type { Metadata } from 'next';

import ContextProvider from '~@lib/context/index.context';

import './globals.css';

export const metadata: Metadata = {
  title: 'Localhost Dashboard',
  description: 'A personal dashboard for daily activities',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="overflow-hidden bg-brutal-background text-brutal-on-background">
        <div id="body" className="relative h-screen w-full overflow-y-auto overflow-x-hidden">
          <ContextProvider>{children}</ContextProvider>
        </div>
      </body>
    </html>
  );
}
