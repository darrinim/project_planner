import React from 'react';
import axios from 'axios'

class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      project: {}
    }
  }

  async componentDidMount() {
    const project = await axios.get("http://localhost:3001/project/1")
    this.setState({
      project: project.data
    })
    console.log(project);
  }

  render() {
    return(
      <div>
        {this.state.project.name}
      </div>
    )
  }
}


export default Project;
