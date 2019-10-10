import React from 'react';
import './Completed.css'


class Completed extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('this is firing completed', this.props);
    return (
      <div className="CompletedContainer">

        <div>{this.props.userProjects && this.props.userProjects.map(el => {
          return (

            <ul
              className="usersProjects"
              id={el.id}>
              <li className="usersLi">Description: {el.description}</li>
              <li
                className="usersLi"
              >MVP: {el.mvp}</li>
              <li className="usersLi">Post MVP: {el.postMvp}</li>
              <li className="usersLi">Status: {el.status}</li>
              <button
                className="completedButtons"
                onClick={(e) => this.props.deleteUserProjects(el.id)}>Delete</button>
              <button
                className="completedButtons"
                onClick={() => (this.props.showEditForm(el))}>Edit</button>
            </ul>
          )
        })}</div>
      </div>
    )
  }
}

export default Completed;
