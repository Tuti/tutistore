import '@/styles/globals.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

/** Next.js imports  **/
import type { AppProps } from 'next/app';
import { Roboto, Bebas_Neue, Inter } from '@next/font/google';
import Head from 'next/head';

const roboto = Roboto({ weight: '400', style: ['normal'], subsets: ['latin'] });
const bebas_neue = Bebas_Neue({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <main className={roboto.className}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </main>
    </>
  );
}
