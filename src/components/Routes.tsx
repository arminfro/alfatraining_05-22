import { ReactElement, useReducer } from "react";
import { Navigate, Route, Routes as RRDRoutes } from "react-router-dom";
import { initialStore, reducer } from "../Store";

import ClassCounter from "./ClassCounter";
import FunctionalCounter from "./FunctionalCounter";
import ProjectCreate from "./ProjectCreate";
import ProjectDetails from "./ProjectDetails";
import ProjectEdit from "./ProjectEdit";
import ProjectList from "./ProjectList";

function Routes(): ReactElement {
  const [store, dispatch] = useReducer(reducer, initialStore);

  return (
    <RRDRoutes>
      <Route path="/functional-counter" element={<FunctionalCounter />} />
      <Route path="/class-counter" element={<ClassCounter />} />
      <Route path="/projects/new" element={<ProjectCreate />} />
      <Route path="/projects/:projectId/edit" element={<ProjectEdit />} />
      <Route
        path="/projects/:projectId"
        element={<ProjectDetails store={store} dispatch={dispatch} />}
      />
      <Route path="/projects" element={<ProjectList />} />
      <Route path="/home" element={<p>Home</p>} />
      <Route path="/" element={<Navigate to="/home" />} />
    </RRDRoutes>
  );
}

export default Routes;
