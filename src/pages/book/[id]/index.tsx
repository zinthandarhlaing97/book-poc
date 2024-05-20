import Layout from "@/components/Layout";
import { getBooks } from "@/services/books.service";
import { IBookData } from "@/types/book";
import { GetServerSideProps } from "next";
import styles from "../../../styles/BookPage.module.css";
import { formatDate } from "@/utils/date.format.utils";
import Link from "next/link";

type BookDetailsPageProps = {
  book?: IBookData | undefined;
};

export default function BookDetailsPage({ book }: BookDetailsPageProps) {
  return (
    <Layout>
      <div className={styles.nav}>
        <h3>
          Go Back to{" "}
          <Link href="/book" rel="noopener" className={styles.underline}>
            Book Store
          </Link>
        </h3>
      </div>

      <div className={styles.container}>
        <div className="bookimg"></div>
        <div className={styles.content}>
          <h1>{book?.title}</h1>
          <h5>{book?.author}</h5>
          <p>{book?.description}</p>
          <span>
            Genre: <b>{book?.genre}</b>
          </span>
          <span>
            ISBN: <b>{book?.isbn}</b>
          </span>
          <span>
            Publisher: <b>{book?.publisher}</b>
          </span>
          <span>
            Published At:{" "}
            <b>{book?.published ? formatDate(new Date(book.published)) : ""}</b>
          </span>
        </div>
      </div>
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
