import React from 'react';
import './Completed.css'


class Completed extends React.Component {
  constructor(props) {
    super(props)
  }
//component did mount, get all projects with user_id of 35. axios.get(`project/user${this.props.curentuser.id}`)

// async componentDidMount() {
//   await this.props.userProjects
// }

  render() {
    console.log('LOOK AT THIS ONE PLZ', this.props);
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
              <button>Edit</button>
            </ul>
          )
        })}</div>
      </div>
    )
  }
}

export default Completed;
