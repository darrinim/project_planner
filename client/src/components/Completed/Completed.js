import React from 'react';
import './Completed.css'


class Completed extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="CompletedContainer">
        <div>{this.props.userProjects && this.props.userProjects.map(el => {
          return (
            <ul id={el.id}>
              <li>Description: {el.description}</li>
              <li>MVP: {el.mvp}</li>
              <li>Post MVP: {el.postMvp}</li>
              <li>Status: {el.status}</li>
              <button onClick={(e) => this.props.deleteUserProjects(el.id)}>Delete</button>
              <button onClick={this.props.goToEdit}>Edit</button>
            </ul>
          )
        })}</div>
      </div>
    )
  }
}

export default Completed;