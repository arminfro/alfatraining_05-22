import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

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
        </div>
      </nav>

      <div className="container">{props.children}</div>
    </>
  );
}
