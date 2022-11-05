import React, { Components } from 'react'

export default class MovieListItem extends Components {
  render() {
    return (
      <li className="list-group-item">#{ this.props.movieProp.name}</li>
    )
  }
}