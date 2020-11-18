import { ReactElement } from "react";

import { books } from "../shared/books";
import BookListItem from "./BookListItem";

export default function BookList(): ReactElement {
  return (
    <ul className="content m-2">
      {books.map((book) => (
        <BookListItem key={book.isbn} book={book} />
      ))}
    </ul>
  );
}
