import BooksTable from "@/components/BooksTable";
import Layout from "@/components/Layout/Layout";
import { BookContext } from "@/contexts/book.context";
import { getBooks } from "@/services/books.service";
import { IBookResponse } from "@/types/book";
import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";

type BookPageProps = {
  response: IBookResponse;
};

export default function Book({ response }: BookPageProps) {
  const { setBooks } = useContext(BookContext);

  useEffect(() => {
    setBooks(response.data);
  }, []);

  return (
    <Layout>
      <Typography
        variant="h3"
        sx={{ pb: { xs: 2, md: 4 }, textAlign: "center" }}
      >
        Book
      </Typography>
      <BooksTable books={response.data} />
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await getBooks();

  return {
    props: { response },
  };
}
