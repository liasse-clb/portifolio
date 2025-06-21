import { Html, Head, Main, NextScript } from 'next/document';
import clsx from 'clsx';

import { fontSans } from '@/config/fonts';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={clsx(
          'h-[450px] bg-background font-sans antialiased bg-cover bg-center bg-no-repeat',
          fontSans.variable
        )}
        style={{ backgroundImage: 'url("/banner-clb.jpg")' }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
