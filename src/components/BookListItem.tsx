import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { Book } from "../types/Book";

interface Props {
  book: Book;
  children?: ReactElement;
}

export default function BookListItem(props: Props): ReactElement {
  const book = props.book;

  return (
    <li>
      <Link
        to={`/books/${props.book.isbn}`}
        className="columns is-vcentered is-clickable"
      >
        <div className="column is-1 m-2">
          {book.thumbnails && book.thumbnails[0] && (
            <img
              className="image"
              alt={book.thumbnails[0].title}
              src={book.thumbnails[0].url}
            />
          )}
        </div>
        <div className="column is-9">
          <div className="title is-5">{book.title}</div>
          <div className="subtitle is-6 mb-2">{book.subtitle}</div>
          <div className="has-text-grey">
            {book.authors.map((author, index) => (
              <span key={author}>
                {author}
                {index !== book.authors.length - 1 && ", "}
              </span>
            ))}
            <br />
            ISBN: {book.isbn}
          </div>
        </div>
        {props.children}
      </Link>
    </li>
  );
}
