import React from 'react';
import './EmailSub.css'

class EmailSub extends React.Component {


  render() {
    return(
      <div className="EmailSubContainer">
        <h2 className="emailHeadline">Do you need emotional support? Join our newsletter and get a goodBoy photo sent every morning!</h2>
        <h3>Sign up now</h3>
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
