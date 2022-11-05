import React, { Components } from 'react'
import MessageCard from './MessageCard'

export default class MovieView extends Components {
  render() {
    return (
      <div className="col">
        <h3>#{ this.props.movie.name }</h3>
        { this.props.movie.messages.map(message => <MessageCard key={message.id} msg={message}/>)}
        <textarea></textarea>
        <button>New Message</button>
      </div>
    )
  }
}