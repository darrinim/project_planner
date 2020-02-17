import React from 'react';
import './Completed.css'


class Completed extends React.Component {

  render() {
    return (
      <div className="completedContainer">
        <div className="completedHeaderCont">
          <h2 className="completedHeader">In Pawgress!</h2>
          <img
            alt="cute-dog"
            className="dogWinkFace wiggler"
            src="https://res.cloudinary.com/darrin-im/image/upload/v1570761245/DogWink-final_kzsm8k.png"/>
        </div>
        <div>
          {this.props.userProjects && this.props.userProjects.map(el => {
            return (
              <ul
                className="usersProjects"
                id={el.id}>
                <li>{el.name}</li>
                <li>Description: {el.description}</li>
                <li>MVP: {el.mvp}</li>
                <li>Post MVP: {el.postMvp}</li>
                <li>Status: {el.status}</li>
                <button onClick={(e) => this.props.deleteUserProjects(el.id)}>Delete</button>
                <button onClick={() => (this.props.showEditForm(el))}>Edit</button>
              </ul>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Completed;
