import React from 'react';
import './PlanName.css'

class PlanName extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('this is props in planname', this.props);
    return (
      <div className="PlanNameContainer">
      <img className="planNameDog" src="https://res.cloudinary.com/darrin-im/image/upload/v1570502752/DogCartoon-sitting3_nsplnm.png" />
        <h2 className="planHeader">Plan your project, bring it to life</h2>
        <h3 className="planUserName">Let's get started {this.props.currentUser && this.props.currentUser.username}!</h3>
        <h3 className="planUserName">What's your project called?</h3>
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
