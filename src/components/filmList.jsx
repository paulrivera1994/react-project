import { useEffect, useState } from "react";
import "./filmsListStyle.css";

export default function FilmsList(props) {
  const [list, setList] = useState([]);

  function getFilms() {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setList(data);
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    getFilms();
  }, []);

  //If the list is not empty, then show the films
  //otherwise, show "loading"
  return (
    <ul className="tiles">
      {list.length != 0 &&
        list.map((film) => {
          return (
            <li key={film.id}>
              <h2>{film.title}</h2>
              <a href={`${film.movie_banner}`}>
                <img src={`${film.image}`} alt="Film Poster" />
              </a>
            </li>
          );
        })}
      {list.length == 0 && <p>Loading...</p>}
    </ul>
  );
}
