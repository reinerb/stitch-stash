import Head from 'next/head';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type RootLayoutProps = {
  title: string;
  children?: React.ReactNode;
  className?: string;
};

export default function RootLayout({
  title,
  children,
  className,
}: RootLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={twMerge('flex min-h-screen flex-col', className)}>
        {children}
      </main>
    </>
  );
}
