import '@/styles/globals.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

/** Next.js imports  **/
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: '400', style: ['normal'], subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <style jsx global>
          {`
            html {
              font-family: ${roboto.style.fontFamily};
            }
          `}
        </style>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
