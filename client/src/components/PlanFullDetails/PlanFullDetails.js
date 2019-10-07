import React from 'react';
import './PlanFullDetails.css';

class PlanFullDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('maybe props', this.props);
    return(
      <div className="FullDetailsContainer">
        <div className="DetailsHeader">
          <h2>Project Name</h2>
          <h4>By {this.props.currentUser}</h4>
          <h5>Project Status</h5>
        </div>
        <form className="FullDetailsForm">
          <label for="description">Description: </label>
          <input
            type="text"
            name="description"
            onChange={this.props.handlePlanChange}
            />
          <label for="mvp">MVP: </label>
          <input
            type="text"
            name="mvp"
            onChange={this.props.handlePlanChange}
            />
          <label for="postmvp">Post MVP: </label>
          <input
            type="text"
            name="postmvp"
            onChange={this.props.handlePlanChange}
            />
          <button type="submit">Save Plan</button>
        </form>
      </div>
    )
  }
}

export default PlanFullDetails;
