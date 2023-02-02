import React from "react";
import { useEffect, useState } from "react";
import { filterFilmsByDirector, getListOf } from "../helpers/film.helpers";
export function FilmsPage(props) {
  const [list, setList] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");

  function getFilms() {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setList(data);
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    getFilms();
  }, []);
  //Derived State
  const filmsByDirector = filterFilmsByDirector(list, searchDirector);
  const directors = getListOf(list, "director");
  //If the list is not empty, then show the films
  //otherwise, show "loading"
  return (
    <div>
      <div className="filmHeaderSection">
        <h1>Studio Ghibli Films</h1>
        <form>
          <div className="form-group">
            <label htmlFor="selectDirector">Director:</label>
            <select
              name="selectDirector"
              id="selectDirector"
              value={searchDirector}
              onChange={(e) => {
                setSearchDirector(e.target.value);
              }}
            >
              <option value="">All</option>
              {directors.map((element, index) => {
                return (
                  <option key={index} value={element}>
                    {element}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
      </div>
      <ul className="tiles">
        {filmsByDirector.length != 0 &&
          filmsByDirector.map((film) => {
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
    </div>
  );
}
