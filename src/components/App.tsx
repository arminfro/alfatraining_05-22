import { ReactElement, useState } from "react";

import BookList from "./BookList";
import BookDetails from "./BookDetails";
import Book from "../types/Book";

export default function App(): ReactElement {
  const [book, setBook] = useState<Book>();

  const onShowList = () => {
    setBook(undefined);
  };

  const onShowDetails = (book: Book) => {
    setBook(book);
  };

  return (
    <div className="container">
      {book ? (
        <BookDetails onShowList={onShowList} book={book} />
      ) : (
        <BookList onShowDetails={onShowDetails} />
      )}
    </div>
  );
}
