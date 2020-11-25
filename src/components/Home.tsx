import { ReactElement } from "react";
import { Link } from "react-router-dom";

import BookSearch from "./BookSearch";

export default function Home(): ReactElement {
  return (
    <>
      <h4 className="title">Willkommen beim BookMonkey</h4>
      <div className="section">
        <Link className="button is-link mt-2" to="/books">
          Buchliste ansehen
        </Link>
      </div>
      <div className="section">
        <BookSearch headline="Book Search" />
      </div>
    </>
  );
}
