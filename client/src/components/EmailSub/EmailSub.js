import React from 'react';
import './EmailSub.css'

class EmailSub extends React.Component {


  render() {
    return(
      <div className="EmailSubContainer">
        <h2>Discover other projects!</h2>
        <h3>Sign up for our newsletter</h3>
        <input type="text" placeholder="Enter your email"/>
      </div>
    )
  }
}


export default EmailSub;
