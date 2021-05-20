import { ReactElement } from "react";

export default function ProjectForm(): ReactElement {
  return (
    <form>
      <div className="field">
        <label className="label">Titel</label>
        <input className="input" type="text" placeholder="Titel" />
      </div>

      <div className="field">
        <label className="label">Image</label>
        <input className="input" type="text" placeholder="Image Url" />
      </div>

      <div className="field">
        <label className="label">Status</label>
        <div className="select">
          <select>
            <option value="in-progress">In Progress</option>
            <option value="on-hold">On Hold</option>
            <option value="is-completed">Is Completed</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label className="label">Progress 33%</label>
        <input style={{ width: "100%" }} type="range" min="0" max="100" />
      </div>

      <div className="field">
        <label className="label">
          Times{" "}
          <button className="button is-small" type="button">
            +
          </button>
        </label>

        <div className="field is-grouped">
          <input className="input" type="text" placeholder="Title" />
          <input className="input" type="date" placeholder="Begin" />
          <input className="input" type="date" placeholder="End" />
          <button className="button" type="button">
            -
          </button>
        </div>
      </div>

      <button className="button is-primary">Submit</button>
    </form>
  );
}
