import { ReactElement, useState } from "react";
import { useNavigate } from "react-router";

import { projectApi } from "../shared/ProjectApi";
import css from "./ProjectForm.module.css";

interface Time {
  title: string;
  begin: string;
  end: string;
}

interface Props {
  title: string;
  img: string;
  status: string;
  progress: string;
  times: Time[];
  projectId?: number;
}

export default function ProjectForm(props: Props): ReactElement {
  const buildTime = () => ({ title: "", begin: "", end: "" });

  const [title, setTitle] = useState(props.title);
  const [img, setImg] = useState(props.img);
  const [status, setStatus] = useState(props.status);
  const [progress, setProgress] = useState(props.progress);
  const [times, setTimes] = useState(props.times);

  const navigate = useNavigate();

  const isEdit = !!props.projectId;

  const formProject = () => {
    return { title, img, status, progress, times };
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    projectApi(
      isEdit ? "put" : "post",
      isEdit ? `projects/${props.projectId}` : "projects",
      () => {
        navigate(isEdit ? `/projects/${props.projectId}` : "/projects");
      },
      formProject()
    );
  };

  const onChangeTimes = (index: number, key: string, newValue: string) =>
    setTimes((currentTimes) =>
      currentTimes.map((time, i) =>
        index === i ? { ...time, [key]: newValue } : time
      )
    );

  const onAddTime = () =>
    setTimes((currentTimes) => [...currentTimes, buildTime()]);

  const onRemoveTime = (index: number) =>
    setTimes((currentTimes) => currentTimes.filter((_time, i) => i !== index));

  return (
    <form className={css.projectForm} onSubmit={onSubmit}>
      <div className="field">
        <label className="label">Titel</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          minLength={3}
          className="input"
          type="text"
          placeholder="Titel"
        />
      </div>

      <div className="field">
        <label className="label">Image</label>
        <input
          value={img}
          onChange={(e) => setImg(e.target.value)}
          required
          className="input"
          type="url"
          placeholder="Image Url"
        />
      </div>

      <div className="field">
        <label className="label">Status</label>
        <div className="select">
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="in-progress">In Progress</option>
            <option value="on-hold">On Hold</option>
            <option value="is-completed">Is Completed</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label className="label">Progress {progress}%</label>
        <input
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
          style={{ width: "100%" }}
          type="range"
          min="0"
          max="100"
        />
      </div>

      <div className="field">
        <label className="label">
          Times{" "}
          <button className="button is-small" onClick={onAddTime} type="button">
            +
          </button>
        </label>

        {times.map((time, index) => (
          <div key={index} className="field is-grouped">
            <input
              value={time.title}
              onChange={(e) => onChangeTimes(index, "title", e.target.value)}
              className="input"
              type="text"
              placeholder="Title"
            />
            <input
              value={time.begin}
              onChange={(e) => onChangeTimes(index, "begin", e.target.value)}
              required
              className="input"
              type="date"
              placeholder="Begin"
            />
            <input
              value={time.end}
              onChange={(e) => onChangeTimes(index, "end", e.target.value)}
              required
              className="input"
              type="date"
              placeholder="End"
            />
            <button
              onClick={() => onRemoveTime(index)}
              className="button"
              type="button"
            >
              -
            </button>
          </div>
        ))}
      </div>

      <button className="button is-primary">Submit</button>
    </form>
  );
}
