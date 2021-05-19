import { ReactElement } from "react";
import { Link } from "react-router-dom";

import Project from "../types/Project";
import ProjectProgress from "./ProjectProgress";
import ProjectTimes from "./ProjectTimes";

interface Props {
  project: Project;
}

function ProjectListItem(props: Props): ReactElement {
  const project = props.project;

  return (
    <Link
      to={`/projects/${project.id}`}
      className="card m-4 column is-clickable"
    >
      <div className="card-content m-15">
        <h2 className="title">{project.title}</h2>
        <div className="table-container">
          <table className="table is-hoverable">
            <tbody className="tbody">
              <tr className="tr">
                <td className="td">
                  <h2 className="title">
                    <i className="ion-code-working" />
                  </h2>
                </td>
                <td className="td">
                  <ProjectProgress project={project} />
                </td>
              </tr>
              <tr className="tr">
                <td className="td">
                  <h2 className="title">
                    <i className="ion-attach" />
                  </h2>
                </td>
                <td className="td">{project.status}</td>
              </tr>
              <tr className="tr">
                <td className="td is-vcentered">
                  <h2 className="title">
                    <i className="ion-stopwatch-outline" />
                  </h2>
                </td>
                <td className="td">
                  <ProjectTimes project={project} />
                </td>
              </tr>
              <tr className="tr">
                <td className="td is-vcentered">
                  <h2 className="title">
                    <i className="ion-camera-outline" />
                  </h2>
                </td>
                <td className="td">
                  <img
                    className="image"
                    alt={project.title}
                    src={project.img}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Link>
  );
}

export default ProjectListItem;
