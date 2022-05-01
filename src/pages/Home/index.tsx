import { useContext } from "react";
import { CategoriesContext } from "@context/categories/categoriesContext";
import CategoriesWidget from "./CategoriesWidget";
import FeaturedBookWidget from "./FeaturedBookWidget";
import { styHomePageWrapper } from "./styles";
import RecommendationWidget from "./RecommendationWidget";

function Home() {
  const { isCategoryLoading, categories } = useContext(CategoriesContext);

  return (
    <div className={styHomePageWrapper}>
      <FeaturedBookWidget />
      <CategoriesWidget
        categories={categories}
        isCategoryLoading={isCategoryLoading}
      />
      <RecommendationWidget />
    </div>
  );
}

export default Home;
