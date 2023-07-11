import type { Metadata } from 'next';

import ContextProvider from '~@lib/context/index.context';

import './globals.css';

export const metadata: Metadata = {
  title: 'Plan-O-Rama',
  description:
    'From its intuitive interface to its comprehensive features, Plan-O-Rama empowers you to navigate your productivity landscape with ease. Say goodbye to scattered plans and hello to a breathtakingly organized life. Welcome to Plan-O-Rama, where planning becomes a panoramic masterpiece.',
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
