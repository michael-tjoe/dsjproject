import Chips from "@components/Chips";
import { BookCategoryData } from "@context/categories/types";
import { tag1 } from "@styles/typography";
import { useRouter } from "next/router";
import { styBookCategories } from "./styles";

interface CategoriesWidgetProps {
  categories: Array<BookCategoryData>;
  isCategoryLoading: boolean;
}

function CategoriesWidget({
  categories,
  isCategoryLoading,
}: CategoriesWidgetProps) {
  const router = useRouter();

  if (isCategoryLoading) return <div>Loading</div>;

  return (
    <section className={styBookCategories}>
      <h1 className={tag1}>Explore Categories</h1>
      <div className="list">
        {categories.map((category) => {
          const name = category.name || "";
          const id = category.id || 0;

          return (
            <Chips
              onClick={() => {
                router.push(`/category/${id}`);
              }}
              key={id}
              label={name}
            />
          );
        })}
      </div>
    </section>
  );
}

export default CategoriesWidget;
