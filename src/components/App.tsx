import { ReactElement } from "react";

import BookList from "./BookList";

export default function App(): ReactElement {
  return (
    <div className="container">
      <BookList />
    </div>
  );
}
