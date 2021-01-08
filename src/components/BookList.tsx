import { ReactElement } from "react";

import BookListItem from "./BookListItem";
import { Book } from "../types/Book";
import LoadingSpinner from "./shared/LoadingSpinner";
import { useBookApi, bookApi } from "../shared/BookApi";

interface Props {
  onShowDetails: (book: Book) => void;
}

export default function BookList(props: Props): ReactElement {
  const [books, setBooks] = useBookApi<Book[]>("books");

  if (!books) {
    return <LoadingSpinner name="Bücher" />;
  }

  const onReset = () => {
    bookApi<string>("delete", "books", () => {
      bookApi<Book[]>("get", "books", setBooks);
    });
  };

  return books.length !== 0 ? (
    <ul className="content m-2">
      {books.map((book) => (
        <BookListItem
          onShowDetails={props.onShowDetails}
          book={book}
          key={book.isbn}
        />
      ))}
    </ul>
  ) : (
    <article className="message is-info">
      <div className="message-header">
        <p>Info</p>
      </div>
      <div className="message-body">
        Keine Bücher vorhanden!{" "}
        <button onClick={onReset} className="button is-link">
          Reset
        </button>
      </div>
    </article>
  );
}
