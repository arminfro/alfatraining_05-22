import { ReactElement } from "react";
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

import ClassCounter from "./ClassCounter";
import FunctionalCounter from "./FunctionalCounter";
import ProjectDetails from "./ProjectDetails";
import ProjectList from "./ProjectList";

export default function App(): ReactElement {
  const navLinkClassname = ({ isActive }: { isActive: boolean }) =>
    `navbar-item ${isActive ? "is-active" : ""}`;

  return (
    <BrowserRouter>
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
        <Routes>
          <Route path="/functional-counter" element={<FunctionalCounter />} />
          <Route path="/class-counter" element={<ClassCounter />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/home" element={<p>Home</p>} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
