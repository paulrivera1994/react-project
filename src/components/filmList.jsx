import React, { Component } from "react";

export default class filmList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }
  getFilms() {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          list: data,
        });
      })
      .catch((err) => console.error(err));
  }
  componentDidMount() {
    this.getFilms();
  }

  render() {
    return (
      <ul>
        {this.state.list.map((film) => {
          return <li key={film.id}>{film.title}</li>;
        })}
      </ul>
    );
  }
}
