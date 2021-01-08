import { Link } from "react-router-dom";
import { ReactElement } from "react";
import { Action, useStore } from "../store";

import { Book } from "../types/Book";
import BookListItem from "./BookListItem";

export default function Cart(): ReactElement {
  const { store, dispatch } = useStore();

  const books = store.cart
    .reduce((acc: Book[], book) => {
      acc.find((book_) => book_.isbn === book.isbn) || acc.push(book);
      return acc;
    }, [])
    .sort((bookA, bookB) => Number(bookA.isbn) - Number(bookB.isbn));

  const countBook = (book: Book): number =>
    store.cart.filter((_book) => _book.isbn === book.isbn).length;

  const onChangeCount = (e: React.MouseEvent, action: Action) => {
    e.preventDefault();
    dispatch(action);
  };

  return (
    <>
      {books.length ? (
        <ul className="content m-2">
          {books.map((book) => (
            <BookListItem key={book.isbn} book={book}>
              <div className="column is-2">
                <div className="field has-addons">
                  <p className="control">
                    <span className="button">{countBook(book)}</span>
                  </p>
                  <p className="control">
                    <button
                      className="button is-success"
                      onClick={(e) =>
                        onChangeCount(e, { type: "addToCart", book })
                      }
                    >
                      <span className="icon is-small">
                        <i className="ion-add-circle-outline"></i>
                      </span>
                    </button>
                  </p>
                  <p className="control">
                    <button
                      className="button is-danger"
                      onClick={(e) =>
                        onChangeCount(e, { type: "removeFromCart", book })
                      }
                    >
                      <span className="icon is-small">
                        <i className="ion-remove-circle-outline"></i>
                      </span>
                    </button>
                  </p>
                </div>
              </div>
            </BookListItem>
          ))}
        </ul>
      ) : (
        <article className="message is-info">
          <div className="message-header">
            <p>Info</p>
          </div>
          <div className="message-body">
            Keine Bücher im Warenkorb! <br />
            <Link to="/books" className="button is-primary">
              Go Shopping!
            </Link>
          </div>
        </article>
      )}
    </>
  );
}
