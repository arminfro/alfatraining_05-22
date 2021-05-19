import { ReactElement } from "react";

import Project from "../types/Project";

interface Props {
  project: Project;
}

export default function ProjectTimes(props: Props): ReactElement {
  return (
    <>
      {props.project.times.map(({ begin, end, title }) => (
        <div key={begin.toString()}>
          {title && (
            <>
              <span className="title is-6">{title}</span>:{" "}
            </>
          )}
          {begin.toLocaleTimeString()} - {end.toLocaleTimeString()}
        </div>
      ))}
    </>
  );
}
