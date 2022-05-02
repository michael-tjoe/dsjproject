import Head from "next/head";
import CategoryPage from "@pages/Category";
import { BOOKS_API } from "@src/constants/api";
import { BookData } from "@src/types";

interface CategoryPageProps {
  initialData: Array<BookData>;
  error: boolean;
}

const Category = ({ initialData, error = false }: CategoryPageProps) => (
  <>
    <Head>
      <title>Main Project</title>
    </Head>
    <div>
      {error ? (
        <div>Failed to fetch api</div>
      ) : (
        <CategoryPage initialData={initialData} />
      )}
    </div>
  </>
);

export async function getServerSideProps(context) {
  try {
    const { id } = context.query;

    const res = await fetch(`${BOOKS_API}?categoryId=${id}&size=10`);
    const data = await res.json();

    return {
      props: {
        initialData: data,
      },
    };
  } catch (err) {
    return {
      props: { error: true },
    };
  }
}

export default Category;
