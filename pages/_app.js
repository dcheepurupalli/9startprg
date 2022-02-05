import '../styles/globals.css';
import Script from 'next/script';
import AppLayout from '../components/layouts/AppLayout';

function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" />
      <Component {...pageProps} />{' '}
    </AppLayout>
  );
}

export default MyApp;
