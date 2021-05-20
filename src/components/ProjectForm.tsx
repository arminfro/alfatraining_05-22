import { ReactElement, useState } from "react";
import { useNavigate } from "react-router";

import { projectApi } from "../shared/ProjectApi";

export default function ProjectForm(): ReactElement {
  const buildTime = () => ({ title: "", begin: "", end: "" });

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [status, setStatus] = useState("in-progress");
  const [progress, setProgress] = useState("1");
  const [times, setTimes] = useState([buildTime()]);

  const navigate = useNavigate();

  const formProject = () => {
    return { title, img, status, progress, times };
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    projectApi(
      "post",
      "projects",
      () => {
        navigate("/projects");
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
    <form onSubmit={onSubmit}>
      <div className="field">
        <label className="label">Titel</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          <div className="field is-grouped">
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
              className="input"
              type="date"
              placeholder="Begin"
            />
            <input
              value={time.end}
              onChange={(e) => onChangeTimes(index, "end", e.target.value)}
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
