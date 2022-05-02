import { useRouter } from "next/router";
import Chips from "@components/Chips";
import { tag1 } from "@styles/typography";
import type { BookCategoryData } from "@src/types";
import { styBookCategories } from "./styles";

interface CategoriesWidgetProps {
  categories: Array<BookCategoryData>;
}

function CategoriesWidget({ categories }: CategoriesWidgetProps) {
  const router = useRouter();

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
