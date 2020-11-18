import { useState, useEffect, ReactElement } from "react";
import axios, { AxiosResponse } from "axios";

import BookListItem from "./BookListItem";
import Book from "../types/Book";

interface Props {
  onShowDetails: (book: Book) => void;
}

export default function BookList(props: Props): ReactElement {
  const [books, setBooks] = useState<Book[]>();

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api3.angular-buch.com/books",
    }).then((response: AxiosResponse<Book[]>) => setBooks(response.data));
  }, []);

  if (!books) {
    return <p>Lade</p>;
  }

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
