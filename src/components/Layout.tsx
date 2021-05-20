import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

import ProjectForm from "./ProjectForm";

interface Props {
  children: ReactElement;
}

function Layout(props: Props): ReactElement {
  const navLinkClassname = ({ isActive }: { isActive: boolean }) =>
    `navbar-item ${isActive ? "is-active" : ""}`;

  return (
    <>
      <nav className="container navbar is-dark" role="navigation">
        <div className="navbar-start">
          <NavLink to="/home" className={navLinkClassname}>
            Home
          </NavLink>
          <NavLink to="/projects" className={navLinkClassname}>
            Projects
          </NavLink>
          <NavLink to="/functional-counter" className={navLinkClassname}>
            Functional Counter
          </NavLink>
          <NavLink to="/class-counter" className={navLinkClassname}>
            Class Counter
          </NavLink>
        </div>
      </nav>
      <div className="container">
        {props.children}
        <ProjectForm />
      </div>
    </>
  );
}

export default Layout;
