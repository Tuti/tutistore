import '@/styles/globals.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

/** Next.js imports  **/
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import CartID from '@/components/cart/cartID';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CartID />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster />
      </QueryClientProvider>
    </>
  );
}
