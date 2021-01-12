import { ReactElement } from "react";
import {
  BrowserRouter,
  Route,
  NavLink,
  Routes,
  Navigate,
} from "react-router-dom";

import BookList from "./BookList";
import BookDetails from "./BookDetails";
import Home from "./Home";

export default function App(): ReactElement {
  const navLinkClassname = ({ isActive }: { isActive: boolean }) =>
    `navbar-item ${isActive ? "is-active" : ""}`;

  return (
    <BrowserRouter>
      <nav className="container navbar is-dark" role="navigation">
        <div className="navbar-start">
          <NavLink className={navLinkClassname} to="/home">
            Home
          </NavLink>
          <NavLink className={navLinkClassname} to="/books">
            Bücher
          </NavLink>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/books/:isbn" element={<BookDetails />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
