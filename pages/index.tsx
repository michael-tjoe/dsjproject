import Head from "next/head";
import HomeContainer from "@pages/Home";
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
        <HomeContainer
          categories={categories}
          bookRecommendations={bookRecommendations}
        />
      )}
    </div>
  </>
);

export async function getServerSideProps() {
  try {
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
