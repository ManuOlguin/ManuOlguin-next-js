import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { AppContextProvider } from '@/contexts/AppContext';
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Head>
      <link rel="icon" href="/assets/icon.png" type="image/x-icon" sizes="16x16 32x32"/>
      <title>MARVEL HYPER ... WIKI</title>

      </Head>
      <main className={`${inter.className}`}>
        <Component {...pageProps} />
      </main>
    </AppContextProvider>
  );
}