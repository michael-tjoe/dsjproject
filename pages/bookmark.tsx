import Head from "next/head";
import BookmarkPage from "@pages/Bookmark";
import Layout from "@components/Layout";

import { CATEGORIES_API } from "@constants/api";

import type { BookCategoryData } from "@src/types";

interface BookmarkPageProps {
  categories: Array<BookCategoryData>;
  error: boolean;
}

const Bookmark = ({ categories, error = false }: BookmarkPageProps) => (
  <>
    <Head>
      <title>Main Project</title>
    </Head>
    <div>
      {error ? (
        <div>Failed to fetch api</div>
      ) : (
        <Layout categories={categories}>
          <BookmarkPage />
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

export default Bookmark;
