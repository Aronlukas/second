import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'

import { PT_Sans_Narrow } from '@next/font/google';

const ptSansNarrow = PT_Sans_Narrow({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pt-sans-narrow'
});




export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <main className={`${ptSansNarrow.variable} font-sans`}>
      
      <Head>
        <title>Paulin Häfner</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </main>
  )
}
