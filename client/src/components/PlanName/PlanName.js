import React from 'react';
import './PlanName.css'
class PlanName extends React.Component {

  render() {
    return (
      <div className="PlanNameContainer">
        <h2>Plan your project, bring it to life</h2>
        <h3>Let's get started!</h3>
        <h3>What's your project called?</h3>
        <form className="formName">
          <input className="textName" type="textarea" placeholder="Project Name"/>
          <button className="PlanNextButton">Next: Project Description</button>
        </form>
      </div>
    )
  }
}

export default PlanName;
