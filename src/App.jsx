import React from "react";
import "./App.css";
import FilmsList from "./components/filmList";

function App(props) {
  const [list, setList] = useState(["ready", "set", "GO"]);
  const [text, setText] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    setList([...list, text]);
  }

  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Input Field"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
        <button type="submit">Add</button>
      </form>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <FilmsList />
    </div>
  );
}

export default App;
