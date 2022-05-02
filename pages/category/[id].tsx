import Head from "next/head";
import CategoryPage from "@pages/Category";
import Layout from "@components/Layout";
import { BOOKS_API, CATEGORIES_API } from "@src/constants/api";
import { BookCategoryData, BookData } from "@src/types";

interface CategoryPageProps {
  initialData: Array<BookData>;
  categories: Array<BookCategoryData>;
  error: boolean;
}

const Category = ({
  initialData,
  categories,
  selectedCategory,
  error = false,
}: CategoryPageProps) => (
  <>
    <Head>
      <title>Main Project</title>
    </Head>
    <div>
      {error ? (
        <div>Failed to fetch api</div>
      ) : (
        <Layout>
          <CategoryPage
            selectedCategory={selectedCategory}
            initialData={initialData}
          />
        </Layout>
      )}
    </div>
  </>
);

export async function getServerSideProps(context) {
  try {
    const { id } = context.query;

    const res = await Promise.all([
      fetch(CATEGORIES_API),
      fetch(`${BOOKS_API}?categoryId=${id}&page=0&size=10`),
    ]);

    let resJson = await Promise.all(res.map((e) => e.json()));
    const categoryList = resJson?.[0] || [];

    return {
      props: {
        categories: categoryList,
        initialData: resJson?.[1] || [],
        selectedCategory: categoryList.find(
          (category) => category.id === Number(id)
        ),
      },
    };
  } catch (err) {
    return {
      props: { error: true },
    };
  }
}

export default Category;
