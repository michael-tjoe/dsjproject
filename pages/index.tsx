import Head from "next/head";
import HomeContainer from "@pages/Home";
import Layout from "@components/Layout";
import { BOOKS_API, CATEGORIES_API } from "@constants/api";
import type { BookCategoryData, BookData } from "@src/types";

interface HomePageProps {
  categories: Array<BookCategoryData>;
  bookRecommendations: Array<BookData>;
  error: boolean;
}

const Home = ({ categories, bookRecommendations, error }: HomePageProps) => (
  <>
    <Head>
      <title>Homepage</title>
    </Head>
    <div>
      {error ? (
        "Cant retrieve API"
      ) : (
        <Layout>
          <HomeContainer
            categories={categories}
            bookRecommendations={bookRecommendations}
          />
        </Layout>
      )}
    </div>
  </>
);

export async function getServerSideProps() {
  try {
    console.log("BOOKS_API: ", BOOKS_API);

    const res = await Promise.all([
      fetch(CATEGORIES_API),
      fetch(`${BOOKS_API}?categoryId=11&size=5`),
    ]);

    let resJson = await Promise.all(res.map((e) => e.json()));

    return {
      props: {
        categories: resJson?.[0] || [],
        bookRecommendations: resJson?.[1] || [],
      },
    };
  } catch (err) {
    return {
      props: { error: true },
    };
  }
}

export default Home;
