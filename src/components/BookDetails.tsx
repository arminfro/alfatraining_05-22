import { ReactElement } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Book } from "../types/Book";
import LoadingSpinner from "./shared/LoadingSpinner";
import { useBookApi, bookApi } from "../shared/BookApi";
import { useStore } from "../store";

export default function BookDetails(): ReactElement {
  const { dispatch } = useStore();
  const { isbn } = useParams<{ isbn: string }>();
  const navigate = useNavigate();
  const book = useBookApi<Book>(`books/${isbn}`)[0];

  if (!book) {
    return <LoadingSpinner name={`Buch ${isbn}`} />;
  }

  const onShowList = () => {
    navigate("/books");
  };

  const onDelete = () => {
    bookApi("delete", `books/${isbn}`, onShowList);
  };

  const onAddToCart = () => {
    dispatch({ type: "addToCart", book });
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
      <button onClick={onShowList} className="button m-1 is-link">
        Back
      </button>
      <button onClick={onDelete} className="button m-1 is-danger">
        Delete
      </button>
      <button className="button m-1 is-warning">
        <Link to={`/books/${book.isbn}/edit`}>Edit</Link>
      </button>
      <button onClick={onAddToCart} className="button m-1 is-primary">
        Add To Cart
      </button>
    </>
  );
}
