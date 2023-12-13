import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Framer Motion | Arthur',
  description:
    'This site is intended to index some UI animated with Framer Motion',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt'>
      <body
        className={clsx(
          inter.className,
          'antialiases h-screen overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500'
        )}
      >
        {children}
      </body>
    </html>
  );
}
