import React from 'react';
import './PlanFullDetails.css';

class PlanFullDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
        console.log('this is props on planFullDetailsprojectform', this.props);
    return(
      <div className="FullDetailsContainer">
        <div className="DetailsHeader">
          <h2>Project {this.props.planDetailsData.name}</h2>
          <h4>By {this.props.currentUser && this.props.currentUser.username}</h4>
          <img
            className="fullDetailsDog"
            src="https://res.cloudinary.com/darrin-im/image/upload/v1570502752/DogCartoon-sitting_ao0ung.png" />
        </div>
        <form
          className="FullDetailsForm"
          onSubmit={this.props.handleSubmitPlan}>
          <label for="description">Description: </label>
          <input
              className="detailsInput"
            type="text"
            name="description"
            onChange={this.props.handlePlanChange}
            />
          <label for="mvp">MVP: </label>
          <input
            className="detailsInput"
            type="text"
            name="mvp"
            onChange={this.props.handlePlanChange}
            />
          <label for="postMvp">Post MVP: </label>
          <input
            className="detailsInput"
            type="text"
            name="postMvp"
            onChange={this.props.handlePlanChange}
            />
          <label for="status">Status: 1-10</label>
          <input
              className="detailsInput"
              type="status"
              name="status"
              onChange={this.props.handlePlanChange}
          />
          <button
            className="savePlanButton"
            type="submit">Save Plan</button>
        </form>
        <button
          className="goodBoyButton"
          onClick={() => this.props.setVisible()}>BUTTTONN</button>
      </div>
    )
  }
}

export default PlanFullDetails;
