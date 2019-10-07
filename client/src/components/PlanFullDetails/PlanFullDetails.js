import React from 'react';
import './PlanFullDetails.css';

class PlanFullDetails extends React.Component {

  render() {
    return(
      <div className="FullDetailsContainer">
        <div className="DetailsHeader">
          <h2>Project Name</h2>
          <h4>By Project Creator</h4>
          <h5>Project Status</h5>
        </div>
        <form className="FullDetailsForm">
          <label for="description">Description: </label>
          <input type="text" id="descrtiption"/>
          <label for="mvp">MVP: </label>
          <input type="text" id="mvp"/>
          <label for="postmvp">Post MVP: </label>
          <input type="text" id="postmvp"/>
        </form>
      </div>
    )
  }
}

export default PlanFullDetails;
