import Head from "next/head";
import FeedbackPage from "@pages/Feedback";
import Layout from "@components/Layout";

import { CATEGORIES_API } from "@constants/api";

import type { BookCategoryData } from "@src/types";

interface FeedbackPageProps {
  categories: Array<BookCategoryData>;
  error: boolean;
}

const Feedback = ({ categories, error = false }: FeedbackPageProps) => (
  <>
    <Head>
      <title>Feedback</title>
    </Head>
    <div>
      {error ? (
        <div>Failed to fetch api</div>
      ) : (
        <Layout categories={categories}>
          <FeedbackPage />
        </Layout>
      )}
    </div>
  </>
);

export async function getServerSideProps() {
  try {
    const res = await Promise.all([fetch(CATEGORIES_API)]);

    let resJson = await Promise.all(res.map((e) => e.json()));
    const categoryList = resJson?.[0] || [];

    return {
      props: {
        categories: categoryList,
      },
    };
  } catch (err) {
    return {
      props: { error: true },
    };
  }
}

export default Feedback;
