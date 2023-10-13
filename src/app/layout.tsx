/* global React */
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SideBar from '@/components/SideBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Edu-Bridge',
  description: '에듀브릿지',
};

const login = false;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex w-full h-full shadow-lg rounded-3xl'>
          {login && (
            <header className='bg-pink-50 w-1/12'>
              <SideBar />
            </header>
          )}

          <main className='w-full'>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
