import { ReactElement } from "react";
import { useParams } from "react-router-dom";

import { useProjectApi } from "../shared/ProjectApi";
import Project from "../types/Project";
import ProjectForm from "./ProjectForm";

function ProjectEdit(): ReactElement {
  const { projectId } = useParams<{ projectId: string }>();
  const [project] = useProjectApi<Project>(`projects/${projectId}`);

  if (!project) {
    return <p>Lade</p>;
  }

  const dateToInputString = (date: Date): string => {
    // alternativ: return date.toISOString().slice(0, 10);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <ProjectForm
      title={project.title}
      img={project.img}
      status={project.status}
      progress={String(project.progress)}
      times={project.times.map((time) => ({
        title: time.title || "",
        begin: dateToInputString(time.begin),
        end: dateToInputString(time.end),
      }))}
      projectId={project.id}
    />
  );
}

export default ProjectEdit;
