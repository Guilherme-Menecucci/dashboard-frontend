import type { Metadata } from 'next';

import ContextProvider from '~@lib/context/index.context';

import MainContainer from '~@components/MainComponent';
import { syneFont, bebasNeueFont, karlaFont } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Plan-O-Rama',
  description:
    'From its intuitive interface to its comprehensive features, Plan-O-Rama empowers you to navigate your productivity landscape with ease. Say goodbye to scattered plans and hello to a breathtakingly organized life. Welcome to Plan-O-Rama, where planning becomes a panoramic masterpiece.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt"
      className={`${syneFont.variable} ${bebasNeueFont.variable} ${karlaFont.variable}`}
    >
      <body className="overflow-hidden">
        <ContextProvider>
          <MainContainer>{children}</MainContainer>
        </ContextProvider>
      </body>
    </html>
  );
}
