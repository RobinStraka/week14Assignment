import React, { Components } from 'react'
import MovieListItem from './MovieListItem'

export default class SideBar extends Components {
  render() {
    return (
      <div className="col-3 bg-light p-3">
        <ul className="list-group">
          { this.props.movie.map(movieParameter => <MovieListItem key={movieParameter.id} movieProp={movieParameter}/> )}
        </ul>
      </div>
    )
  }
}