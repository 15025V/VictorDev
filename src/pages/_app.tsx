import '../styles/globals.css';
import type { AppProps } from 'next/app';


function MyApp({ Component, pageProps, router }: AppProps) {
  return (

      <Component key={router.route} {...pageProps} />
   
  );
}

export default MyApp;