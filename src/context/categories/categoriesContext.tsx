import { createContext, useMemo } from "react";
import useFetch from "@hooks/useFetch";
import { CATEGORIES_API } from "@constants/api";

import type { CategoriesContextData, CategoriesProviderProps } from "./types";

export const CategoriesContext = createContext<CategoriesContextData>({
  isCategoryLoading: false,
  categories: [],
});

export function CategoriesProvider({ children }: CategoriesProviderProps) {
  const { isLoading: isCategoryLoading, data } = useFetch(CATEGORIES_API);

  const categoryContextValue = useMemo(() => {
    return {
      categories: data || [],
      isCategoryLoading,
    };
  }, [data, isCategoryLoading]);

  return (
    <CategoriesContext.Provider value={categoryContextValue}>
      {children}
    </CategoriesContext.Provider>
  );
}

export default CategoriesProvider;
