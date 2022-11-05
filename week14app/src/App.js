import React, { Components } from 'react';
import SideBar from './Components/SideBar';
import MovieView from './Components/MovieView';
import MovieListItem from './Components/MovieListItem';
import Comments from './Components/comment';

export default class App extends Components {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {
          id: 0,
          name: "Jaws",
          messages: [
            {
              id: 0,
              text: "text"
            },
            {
              id: 1,
              text: "text2"
            }
          ]
        },
        {
          id: 1,
          name: "Alien",
          messages: [
            {
              id: 0,
              text: "text1"
            },
            {
              id: 1,
              text: "text3"
            },
            {
              id: 2,
              text: "text4"
            }
          ]
        },
      ]
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
            <SideBar movies={this.state.movies}/>
            <MovieView movies={this.state.movies[1]}/>
        </div>
      </div>
    )
  }
}

