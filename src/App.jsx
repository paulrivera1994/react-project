import React from "react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { HomePage, FilmsPage } from "./pages";
import "./App.css";
import "./components/filmsListStyle.css";
function App(props) {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="films">Films</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="films" element={<FilmsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
