import type { AppProps } from 'next/app';
import { PageWithLayout } from '../features/layouts/types/PageWithLayout';
import './globals.css';

interface AppPropsWithLayout extends AppProps {
  Component: PageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // const getLayout = (Component as PageWithLayout).getLayout || ((page) => page);
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
