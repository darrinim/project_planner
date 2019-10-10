import React from 'react';
import './EmailSub.css'

class EmailSub extends React.Component {


  render() {
    return(
      <div className="EmailSubContainer">
        <h2>Discover other projects!</h2>
        <h3>Sign up for our newsletter</h3>
        <input
          className="emailInput"
          type="text"
          placeholder="Enter your email"/>
        <button className="emailSubmit">Submit</button>
      </div>
    )
  }
}


export default EmailSub;
