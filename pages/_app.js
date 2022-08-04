import { Layout } from '../layout/Layout';
import { AuthUserProvider } from '../context/AuthUserContext';
import GlobalStyles from '../styles/GlobalStyles'

export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <GlobalStyles/>
      <Layout>
        <AuthUserProvider>
          <Component {...pageProps} />
        </AuthUserProvider>
      </Layout>
    </>
  );
}
