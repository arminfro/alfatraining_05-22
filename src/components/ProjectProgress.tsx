import { ReactElement } from "react";

import Project from "../types/Project";

interface Props {
  project: Project;
}

export default function ProjectProgress(props: Props): ReactElement {
  const project = props.project;

  const progressBarClassMap = {
    "is-completed": "is-success",
    "in-progress": "is-warning",
    "on-hold": "is-danger",
  };

  return (
    <progress
      className={`progress ${progressBarClassMap[project.status]}`}
      value={project.progress}
      max="100"
    >
      {project.progress}%
    </progress>
  );
}
