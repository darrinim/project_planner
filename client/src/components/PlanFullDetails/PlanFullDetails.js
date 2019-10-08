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
          <h2>{this.props.planDetailsData.name}</h2>
          <h4>By {this.props.currentUser && this.props.currentUser.username}</h4>
          <h5>Project Status</h5>
        </div>
        <form
          className="FullDetailsForm"
          onSubmit={this.props.handleSubmitPlan}>
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
          <label for="postMvp">Post MVP: </label>
          <input
            type="text"
            name="postMvp"
            onChange={this.props.handlePlanChange}
            />
          <label for="status">Status: </label>
          <input
              type="status"
              name="status"
              onChange={this.props.handlePlanChange}
          />
          <button type="submit">Save Plan</button>
        </form>
      </div>
    )
  }
}

export default PlanFullDetails;
