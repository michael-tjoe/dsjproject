import Layout from "@components/Layout";
import { CategoriesProvider } from "@context/categories/categoriesContext";
import type { AppProps } from "next/app";
import "@styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <CategoriesProvider>
        <Component {...pageProps} />
      </CategoriesProvider>
    </Layout>
  );
}

export default MyApp;
