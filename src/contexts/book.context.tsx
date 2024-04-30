import { BookState } from "@/interfaces/book.state";
import { IBookData } from "@/types/book";
import { useState, createContext, FC, PropsWithChildren } from "react";

export const BookContext = createContext<BookState>({
  books: [],
  setBooks: () => {},
});

const BookProvider: FC<PropsWithChildren> = ({ children }) => {
  const [books, setBooks] = useState<IBookData[]>([]);

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
