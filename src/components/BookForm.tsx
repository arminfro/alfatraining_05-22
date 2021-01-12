import React, { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";

import { bookApi } from "../shared/BookApi";

export default function BookForm(): ReactElement {
  const buildThumbnail = (title = "", url = "") => ({ title, url });

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [isbn, setIsbn] = useState(
    // dev string, alternativ: ''
    Math.floor(Math.random() * 99999999999 + 111111111).toString()
  );
  const [description, setDescription] = useState("");
  const [authors, setAuthors] = useState([""]);
  const [thumbnails, setThumbnails] = useState([
    // dev strings, alternativ: buildThumbnail("", ""),
    buildThumbnail("title", "https://ng-buch.de/public/monkey-thinking.svg"),
  ]);
  const [published, setPublished] = useState("");

  const navigate = useNavigate();

  const book = () => ({
    title,
    subtitle,
    isbn,
    description,
    authors,
    thumbnails,
    published,
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    bookApi("post", "books", () => navigate("/books"), book());
  };

  const onChangeAuthor = (value: string, index: number) => {
    setAuthors((currentAuthors) => {
      const copyAuthors = [...currentAuthors];
      copyAuthors[index] = value;
      return copyAuthors;
    });
  };

  const onChangeThumbnail = (
    index: number,
    inputObj: { url: string } | { title: string }
  ) => {
    setThumbnails((currentThumbnails) =>
      currentThumbnails.map((thumbnail, i) =>
        i === index ? { ...thumbnail, ...inputObj } : thumbnail
      )
    );
  };

  const onAddThumbnail = () => {
    setThumbnails((currentThumbnails) => {
      return [...currentThumbnails, buildThumbnail()];
    });
  };

  const onRemoveThumbnail = (index: number) => {
    setThumbnails((currentThumbnails) =>
      currentThumbnails.filter((_, i) => i !== index)
    );
  };

  const onAddAuthor = () => {
    setAuthors((currentAuthors) => [...currentAuthors, ""]);
  };

  const onRemoveAuthor = () => {
    setAuthors((currentAuthors) => {
      if (currentAuthors.length > 1) {
        const newAuthors = [...currentAuthors];
        newAuthors.pop();
        return newAuthors;
      } else {
        return currentAuthors;
      }
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="field">
        <label className="label">Buchtitel</label>
        <input
          className="input"
          placeholder="Titel"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>

      <div className="field">
        <label className="label">Untertitel</label>
        <input
          className="input"
          placeholder="Subtitle"
          value={subtitle}
          onChange={(e) => {
            setSubtitle(e.target.value);
          }}
        />
      </div>

      <div className="field">
        <label className="label">Isbn</label>
        <input
          className="input"
          placeholder="Isbn"
          value={isbn}
          onChange={(e) => {
            setIsbn(e.target.value);
          }}
        />
      </div>

      <div className="field">
        <label className="label">Erscheinungsdatum</label>
        <input
          className="input"
          type="date"
          value={published}
          onChange={(e) => {
            setPublished(e.target.value);
          }}
        />
      </div>

      <div className="fields">
        <label className="label">
          Authoren{" "}
          <button
            className="button is-small"
            type="button"
            onClick={onAddAuthor}
          >
            +
          </button>
          <button
            className="button is-small"
            type="button"
            onClick={onRemoveAuthor}
          >
            -
          </button>
        </label>
        <div className="field is-grouped">
          {authors.map((author, index) => (
            <input
              key={index}
              className="input"
              placeholder="Author"
              value={author}
              onChange={(e) => {
                onChangeAuthor(e.target.value, index);
              }}
            />
          ))}
        </div>
      </div>

      <div className="field">
        <label className="label">Beschreibung</label>
        <input
          className="input"
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>

      <div className="field">
        <label className="label">
          Bilder{" "}
          <button
            className="button is-small"
            type="button"
            onClick={onAddThumbnail}
          >
            +
          </button>
        </label>
        {thumbnails.map((thumbnail, index) => (
          <div key={index} className="field is-grouped">
            <input
              placeholder="Url"
              className="input"
              value={thumbnail.url}
              onChange={(e) => {
                onChangeThumbnail(index, { url: e.target.value });
              }}
            />
            <input
              placeholder="Titel"
              className="input"
              value={thumbnail.title}
              onChange={(e) => {
                onChangeThumbnail(index, { title: e.target.value });
              }}
            />
            <button
              className="button"
              type="button"
              onClick={() => onRemoveThumbnail(index)}
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
