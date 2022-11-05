import React, { Components } from 'react'

export default class Comments extends Components {
  render() {
    return (
        <div className="card w-75">
            <div className="card-body">
                {this.props.content}
            </div>
        </div>
    );
  }
}
