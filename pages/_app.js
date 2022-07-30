import { Layout } from '../layout/Layout';
import GlobalStyles from '../styles/GlobalStyles'

export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <GlobalStyles/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
