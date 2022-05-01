import type { ReactNode } from "react";

export interface CategoriesProviderProps {
  children: ReactNode;
}

export interface BookCategoryData {
  id: number;
  name: string;
}

export interface CategoriesContextData {
  isCategoryLoading: boolean;
  categories: Array<BookCategoryData>;
}
