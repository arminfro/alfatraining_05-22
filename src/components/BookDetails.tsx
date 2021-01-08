import { ReactElement } from "react";

import Book from "../types/Book";

interface Props {
  book: Book;
  onShowList: () => void;
}

export default function BookDetails(props: Props): ReactElement {
  const book = props.book;

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
            <p className="title">{book.published.toLocaleDateString()}</p>
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
    </>
  );
}
