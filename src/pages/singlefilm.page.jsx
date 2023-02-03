import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./pages.style.css";

export function SingleFilmPage() {
  const [item, setItem] = useState({});
  const { id } = useParams();

  function getFilm() {
    fetch(`https://studioghibliapi-d6fc8.web.app/films/${id}`)
      .then((res) => res.json())
      .then((item) => setItem(item))
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    getFilm();
  }, []);

  return (
    <div>
      <div className="singleFilm-container">
        <img src={`${item.image}`} alt={`${item.title} Poster`} />
      </div>
      <div>
        <h1>{item.title}</h1>
        <p>
          Directed by {item.director}. Produced by {item.producer}.
        </p>
        <p>
          The film was released in <strong>{item.release_date}</strong> and
          garnered a <strong>{item.rt_score}</strong> aggregate score on{" "}
          <a
            href="https://www.rottentomatoes.com/"
            target="_blank"
            rel="noreferrer"
          >
            Rotten Tomatoes
          </a>
          .
        </p>
        <h2>Description</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
}
