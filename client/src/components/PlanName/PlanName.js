import React from 'react';
import './PlanName.css'

class PlanName extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // console.log('this is what to look for', this.props.planDetailsData);

    return (
      <div className="PlanNameContainer">
        <h2>Plan your project, bring it to life</h2>
        <h3>Let's get started {this.props.currentUser && this.props.currentUser.username}!</h3>
        <h3>What's your project called?</h3>
        <form
          className="formName"
          >
          <input
            className="textName"
            name="name"
            type="textarea"
            placeholder="Project Name"
            onChange={this.props.handlePlanChange}
            />
          <button
            onClick={(e) => this.props.goToDetails(e)}
            className="PlanNextButton">Next: Project Details</button>
        </form>
      </div>
    )
  }
}

export default PlanName;
