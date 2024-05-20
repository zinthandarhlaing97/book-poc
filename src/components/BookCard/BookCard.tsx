import { IBookData } from "@/types/book";
import { formatDate } from "@/utils/date.format.utils";
import { FC } from "react";
import styles from "../../styles/BookCard.module.css";
import Link from "next/link";

type BooksCardProps = {
  book: IBookData;
};

const BookCard: FC<BooksCardProps> = ({ book }) => {
  return (
    <div className={styles.card}>
      <div className="bookimg"></div>
      <div className={styles.content}>
        <h3>{book.title}</h3>
        <h6>{book.author}</h6>
        <p>{book.description}</p>
        <div className={styles.tags}>
          <span className="tag">{book.genre}</span>
          <span className="tag">{book.isbn}</span>
          <span className="tag">
            {book.publisher}
            {` (${
              book.published ? formatDate(new Date(book.published)) : "-"
            })`}
          </span>
        </div>
        <div className={styles.cta}>
          <Link
            href={`/book/${book.id}`}
            rel="noopener noreferrer"
            className={styles.underline}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
