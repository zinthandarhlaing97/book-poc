import { IBookData } from "@/types/book";

export interface BookState {
  books: IBookData[];
  setBooks: (value: IBookData[]) => void;
}
