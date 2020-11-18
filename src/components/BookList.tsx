import { useState, useEffect, ReactElement } from "react";
import axios, { AxiosResponse } from "axios";

import BookListItem from "./BookListItem";
import Book from "../types/Book";
import LoadingSpinner from "./shared/LoadingSpinner";

interface Props {
  onShowDetails: (book: Book) => void;
}

export default function BookList(props: Props): ReactElement {
  const [books, setBooks] = useState<Book[]>();

  const getBooks = () => {
    axios({
      method: "get",
      url: "https://api3.angular-buch.com/books",
    }).then((response: AxiosResponse<Book[]>) => setBooks(response.data));
  };

  useEffect(getBooks, []);

  if (!books) {
    return <LoadingSpinner name="Bücher" />;
  }

  const onReset = () => {
    axios({
      method: "delete",
      url: "https://api3.angular-buch.com/books",
    }).then(getBooks);
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
