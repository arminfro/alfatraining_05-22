import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import BookSearch from "./BookSearch";

interface Props {
  children: ReactElement;
}

export default function Layout(props: Props): ReactElement {
  const navLinkClassname = ({ isActive }: { isActive: boolean }) =>
    `navbar-item ${isActive ? "is-active" : ""}`;

  return (
    <>
      <nav className="container navbar is-dark" role="navigation">
        <div className="navbar-start">
          <NavLink className={navLinkClassname} to="/home">
            Home
          </NavLink>
          <NavLink className={navLinkClassname} to="/books">
            Bücher
          </NavLink>
          <NavLink className={navLinkClassname} to="/books/new">
            neues Buch
          </NavLink>
          <NavLink to="/cart" className={navLinkClassname}>
            Shopping Cart
          </NavLink>
        </div>
        <div className="navbar-end">
          <BookSearch width={450} />
        </div>
      </nav>

      <div className="container">{props.children}</div>
    </>
  );
}
