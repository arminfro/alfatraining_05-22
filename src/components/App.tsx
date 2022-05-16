import { ReactElement, useState } from "react";

import Project from "../types/Project";
import ClassCounter from "./ClassCounter";
import ProjectDetails from "./ProjectDetails";
import ProjectList from "./ProjectList";

export default function App(): ReactElement {
  const [project, setProject] = useState<Project>();

  const onShowDetails = (project_: Project) => {
    setProject(project_);
  };

  const onShowList = () => {
    setProject(undefined);
  };

  return (
    <div className="container">
      <ClassCounter />
      {project ? (
        <ProjectDetails project={project} onShowList={onShowList} />
      ) : (
        <ProjectList onShowDetails={onShowDetails} />
      )}
    </div>
  );
}
