import { useContext } from "react";
import { CategoriesContext } from "@context/categories/categoriesContext";
import CategoriesWidget from "./CategoriesWidget";
import FeaturedBookWidget from "./FeaturedBookWidget";
import { styHomePageWrapper } from "./styles";

function Home() {
  const { isCategoryLoading, categories } = useContext(CategoriesContext);

  return (
    <div className={styHomePageWrapper}>
      <FeaturedBookWidget />
      <CategoriesWidget
        categories={categories}
        isCategoryLoading={isCategoryLoading}
      />
    </div>
  );
}

export default Home;
