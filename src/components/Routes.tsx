import { ReactElement } from "react";
import { Navigate, Route, Routes as RRDRoutes } from "react-router-dom";

import ClassCounter from "./ClassCounter";
import FunctionalCounter from "./FunctionalCounter";
import ProjectDetails from "./ProjectDetails";
import ProjectList from "./ProjectList";

function Routes(): ReactElement {
  return (
    <RRDRoutes>
      <Route path="/functional-counter" element={<FunctionalCounter />} />
      <Route path="/class-counter" element={<ClassCounter />} />
      <Route path="/projects/:projectId" element={<ProjectDetails />} />
      <Route path="/projects" element={<ProjectList />} />
      <Route path="/home" element={<p>Home</p>} />
      <Route path="/" element={<Navigate to="/home" />} />
    </RRDRoutes>
  );
}

export default Routes;
