import React from 'react';
import './EditProjectForm.css';

class EditProjectForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
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
            value={this.props.planDetailsData.description}
            onChange={this.props.handlePlanChange}
            />
          <label for="mvp">MVP: </label>
          <input
            type="text"
            name="mvp"
            value={this.props.planDetailsData.mvp}
            onChange={this.props.handlePlanChange}
            />
          <label for="postMvp">Post MVP: </label>
          <input
            type="text"
            name="postMvp"
            value={this.props.planDetailsData.postMvp}
            onChange={this.props.handlePlanChange}
            />
          <label for="status">Status: </label>
          <input
              type="status"
              name="status"
              value={this.props.planDetailsData.status}
              onChange={this.props.handlePlanChange}
          />
          <button type="submit">Save Plan</button>
        </form>
      </div>
    )
  }
}

export default EditProjectForm;
