import { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function Home(): ReactElement {
  return (
    <div className="section">
      <h4>Willkommen beim BookMonkey</h4>
      <Link className="button is-link mt-2" to="/books">
        Buchliste ansehen
      </Link>
    </div>
  );
}
