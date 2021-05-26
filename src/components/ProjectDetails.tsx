import { ReactElement } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

import { useProjectApi } from "../shared/ProjectApi";
import { useStore } from "../Store";
import Project from "../types/Project";
import ProjectProgress from "./ProjectProgress";
import ProjectTimes from "./ProjectTimes";

function ProjectDetails(): ReactElement {
  const { projectId } = useParams<{ projectId: string }>();
  const [project] = useProjectApi<Project>(`projects/${projectId}`);
  const { dispatch, store } = useStore();
  const navigate = useNavigate();

  if (!project) {
    return <p>Lade</p>;
  }

  const onShowList = () => navigate("/projects");

  const onAddToFavorite = () => {
    dispatch({ type: "ADD_TO_FAVORITES", project });
  };

  const onRemoveFromFavorite = () => {
    dispatch({ type: "REMOVE_FROM_FAVORITES", project });
  };

  const countLikes = (): number => {
    return store.favorites.filter((project_) => project_.id === project.id)
      .length;
  };

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

      <div className="field has-addons">
        <p className="control">
          <button className="button">
            <span>{countLikes()}</span>
          </button>
        </p>
        <p className="control">
          <button className="button is-success" onClick={onAddToFavorite}>
            <span className="icon is-small">
              <i className="ion-add-circle-outline"></i>
            </span>
          </button>
        </p>
        <p className="control">
          <button className="button is-danger" onClick={onRemoveFromFavorite}>
            <span className="icon is-small">
              <i className="ion-remove-circle-outline"></i>
            </span>
          </button>
        </p>
      </div>

      <button onClick={onShowList} className="button m-1 is-primary">
        Back
      </button>
      <Link
        className="button m-1 is-warning"
        to={`/projects/${projectId}/edit`}
      >
        Edit
      </Link>
    </div>
  );
}

export default ProjectDetails;
