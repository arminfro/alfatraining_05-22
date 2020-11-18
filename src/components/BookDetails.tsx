import { ReactElement, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

import Book from "../types/Book";
import LoadingSpinner from "./shared/LoadingSpinner";

interface Props {
  book: Book;
  onShowList: () => void;
}

export default function BookDetails(props: Props): ReactElement {
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api3.angular-buch.com/books/${props.book.isbn}`,
    }).then((response: AxiosResponse<Book>) => setBook(response.data));
  }, [props.book.isbn]);

  if (!book) {
    return <LoadingSpinner name={`Buch ${props.book.isbn}`} />;
  }

  const onDelete = () => {
    axios({
      method: "delete",
      url: `https://api3.angular-buch.com/books/${props.book.isbn}`,
    }).then(props.onShowList);
  };

  const getRatings = () => new Array(book.rating || 0).fill(true);

  return (
    <>
      <h1 className="title">{book.title}</h1>
      <div className="level">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">ISBN</p>
            <p className="title">{book.isbn}</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">published</p>
            <p className="title">
              {new Date(book.published).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Rating</p>
            <p className="title">
              {getRatings().map((_, index) => (
                <i key={index} className="ion-star has-text-warning" />
              ))}
            </p>
          </div>
        </div>
      </div>
      <div className="columns is-vcentered">
        <div className="column is-3">
          <h4 className="subtitle">Authoren</h4>
          {book.authors.join(", ")}
        </div>
        <div className="column is-9">
          <h4 className="subtitle">Beschreibung</h4>
          {book.description}
        </div>
      </div>
      <div className="columns is-vcentered">
        {book.thumbnails &&
          book.thumbnails.map((thumbnail) => (
            <img
              className="image"
              style={{ width: 140 }}
              key={thumbnail.title}
              alt={thumbnail.title}
              src={thumbnail.url}
            />
          ))}
      </div>
      <button onClick={props.onShowList} className="button m-1 is-link">
        Back
      </button>
      <button onClick={onDelete} className="button m-1 is-danger">
        Delete
      </button>
    </>
  );
}
