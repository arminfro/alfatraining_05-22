import { ReactElement } from "react";

import { books } from "../shared/books";
import BookListItem from "./BookListItem";
import Book from "../types/Book";

interface Props {
  onShowDetails: (book: Book) => void;
}

export default function BookList(props: Props): ReactElement {
  return (
    <ul className="content m-2">
      {books.map((book) => (
        <BookListItem
          onShowDetails={props.onShowDetails}
          book={book}
          key={book.isbn}
        />
      ))}
    </ul>
  );
}
