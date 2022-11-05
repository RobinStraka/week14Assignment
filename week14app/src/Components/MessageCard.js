import React, { Components } from 'react';
import Comments from './comment';


export default class MessageCard extends Components {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      content: props.content,
    };
  }
  render() {
    let comments = [];
    if (this.state.comments) {
      for (let comments of this.state.comments) {
        comments.push(<Comments {...comments} />);
      }
    }
      return (
        <div className="card w-75">
          <div className="card-body">
            {this.state.content}
          </div>
          <div className="card-footer">
            { this.props.msg.text }
            {comments}
          </div>
        </div>
      );
  }
}
