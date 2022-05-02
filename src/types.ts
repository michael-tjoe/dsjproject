export interface BookCategoryData {
  id: number;
  name: string;
}

export interface BookSection {
  title: string;
  content: string;
}

export interface BookData {
  id: number;
  title: string;
  category_id: number;
  authors: Array<string>;
  cover_url: string;
  description: string;
  sections: Array<BookSection>;
  audio_length: number;
}
