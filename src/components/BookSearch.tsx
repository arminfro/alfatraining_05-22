import { useState, ChangeEvent, ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { Book } from "../types/Book";
import { bookApi } from "../shared/BookApi";

interface Props {
  headline?: string;
  width?: number;
}

export default function BookSearch(props: Props): ReactElement {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Book[]>();
  const navigate = useNavigate();

  // todo, debounce calls
  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);
    if (inputValue.length > 2) {
      bookApi<Book[]>("get", `books/search/${inputValue}`, setSearchResults);
    } else {
      setSearchResults(undefined);
    }
  };

  const onClick = (book: Book) => {
    setSearchResults([]);
    setSearchTerm("");
    navigate(`/books/${book.isbn}`);
  };

  return (
    <div style={{ width: props.width || 800 }}>
      {props.headline && <h2 className="title">{props.headline}</h2>}
      <div className="panel-block">
        <p className="control has-icons-right">
          <input
            value={searchTerm}
            onChange={onSearch}
            type="text"
            className="input"
          />
          <span className="icon is-small is-right">
            <i className="ion-search-outline" />
          </span>
        </p>
      </div>
      {searchResults && (
        <div className="has-background-light" style={{ position: "absolute" }}>
          {searchResults.map((book) => (
            <span
              onClick={() => onClick(book)}
              key={book.isbn}
              className="panel-block is-clickable columns py-2"
            >
              <p className="column is-3">{book.title}</p>
              <p className="column is-9 is-gray">{book.subtitle}</p>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
