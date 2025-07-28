import type { AppProps } from 'next/app';

import { HeroUIProvider } from '@heroui/system';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';

import { AppUtilsProvider } from '@/lib/context/AppUtils';
import { fontSans, fontMono } from '@/config/fonts';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider enableSystem attribute="class" defaultTheme="dark" forcedTheme="dark">
        <AppUtilsProvider>
          <Toaster position="bottom-center" reverseOrder={false} />
          <Component {...pageProps} />
        </AppUtilsProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
