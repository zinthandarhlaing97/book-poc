import Layout from "@/components/Layout";
import { BookContext } from "@/contexts/book.context";
import { getBooks } from "@/services/books.service";
import { IBookResponse } from "@/types/book";
import { formatDate } from "@/utils/date.format.utils";
import { Box, Grid, Typography } from "@mui/material";
import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

type BookDetailsPageProps = {
  response: IBookResponse;
};

export default function BookDetailsPage({ response }: BookDetailsPageProps) {
  const { books, setBooks } = useContext(BookContext);
  const { query } = useRouter();

  const book = books.find((book) => book.id === Number(query.id));

  useEffect(() => {
    if (books.length === 0) {
      setBooks(response.data);
    }
  }, []);

  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <img src={book?.image} alt={book?.title} />
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <Box>
            <Typography variant="h4">{book?.title}</Typography>
            <Typography>{book?.description}</Typography>
          </Box>
          <Box sx={{ height: "24px" }}></Box>
          <Box>
            <Typography>Genre: {book?.genre}</Typography>
            <Typography>Isbn: {book?.isbn}</Typography>
            <Typography>
              Published Date:
              {book?.published ? formatDate(new Date(book.published)) : ""}
            </Typography>
            <Typography>Publisher: {book?.publisher}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await getBooks();

  return {
    props: { response },
  };
}

export const getStaticPaths = (async () => {
  const response = await getBooks();

  return {
    paths: response.data.map((book) => ({
      params: { id: String(book.id) },
    })),
    fallback: true,
  };
}) satisfies GetStaticPaths;
