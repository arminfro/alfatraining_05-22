import { ReactElement } from "react";
import Project from "../types/Project";

interface Props {
  project: Project;
}

function ProjectListItem(props: Props): ReactElement {
  const project = props.project;

  const progressBarClassMap = {
    "is-completed": "is-success",
    "in-progress": "is-warning",
    "on-hold": "is-danger",
  };

  return (
    <div className="card m-4 column">
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
                  <progress
                    className={`progress ${
                      progressBarClassMap[project.status]
                    }`}
                    value={project.progress}
                    max="100"
                  >
                    {project.progress}%
                  </progress>
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
                  {project.times.map(({ begin, end, title }) => (
                    <div key={begin.toString()}>
                      {title && (
                        <>
                          <span className="title is-6">{title}</span>:{" "}
                        </>
                      )}
                      {begin.toLocaleTimeString()} - {end.toLocaleTimeString()}
                    </div>
                  ))}
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
    </div>
  );
}

export default ProjectListItem;
