import React from 'react';
import './PlanDescription.css'
class PlanDescription extends React.Component {

  render() {
    return (
      <div className="PlanDescriptionContainer">
        <h2>Awesome, let's keep going!</h2>
        <h3>Can you describe your project for me?</h3>
        <form className="FormDescription">
          <textarea rows="6" col="50" placeholder="Enter Description Here"/>
          <button className="FullDetailsButton">Next: Full Details</button>
        </form>
      </div>
    )
  }
}

export default PlanDescription;
