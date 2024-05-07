import Layout from "@/components/Layout";
import { getBooks } from "@/services/books.service";
import { IBookData } from "@/types/book";
import { formatDate } from "@/utils/date.format.utils";
import { Box, Grid, Typography } from "@mui/material";
import { GetServerSideProps } from "next";

type BookDetailsPageProps = {
  book?: IBookData | undefined;
};

export default function BookDetailsPage({ book }: BookDetailsPageProps) {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const response = await getBooks();
  const book = response.data.find((book) => book.id === Number(id));

  return {
    props: { book },
  };
};
