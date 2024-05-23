import Illustration from "@/components/Illustration";
import Layout from "@/components/Layout/Layout";
import { getBooks } from "@/services/books.service";
import { IBookResponse } from "@/types/book";
import styles from "../../styles/BooksPage.module.css";
import BookCard from "@/components/BookCard";

type BookPageProps = {
  response: IBookResponse;
};

export default function Book({ response }: BookPageProps) {
  return (
    <Layout>
      <div className={styles.foreground}>
        <div className={styles.content}>
          <h1 className={styles.quote}>
            {`“There is more treasure in books than in all the pirate's loot on
            Treasure Island.”`}
          </h1>
          <h3 className={styles.by}>- Walt Disney</h3>
        </div>
        <Illustration className={styles.illustration} />
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>Available Books</h1>
        <div className={styles.listview}>
          {response.data.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const response = await getBooks();

  return {
    props: { response },
  };
}
