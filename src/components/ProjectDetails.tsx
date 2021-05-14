import { ReactElement } from "react";

import Project from "../types/Project";
import ProjectProgress from "./ProjectProgress";
import ProjectTimes from "./ProjectTimes";

interface Props {
  project: Project;
  onShowList: () => void;
}

function ProjectDetails(props: Props): ReactElement {
  const project = props.project;

  return (
    <div className="section">
      <h1 className="title">{project.title}</h1>
      <div className="columns">
        <div className="column">
          <h4 className="title is-4">
            <i className="ion-camera-outline" />
            Image
          </h4>
          <img className="" alt="" src={project.img} />
        </div>
        <div className="column">
          <h4 className="title is-4">
            <i className="ion-stopwatch-outline" />
            Times
          </h4>
          <ProjectTimes project={project} />
        </div>
        <div className="column">
          <h4 className="title is-4">
            <i className="ion-code-working" />
            Progress
          </h4>
          <ProjectProgress project={project} />
        </div>
        <div className="column">
          <h4 className="title is-4">
            <i className="ion-attach" />
            Status
          </h4>
          <p>{project.status}</p>
        </div>
      </div>
      <button onClick={props.onShowList} className="button m-1 is-primary">
        Back
      </button>
    </div>
  );
}

export default ProjectDetails;
