import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    form: {
      username: null,
      password: null,
    },
  };
};

  render() {
    return(
      <div>
        <form className="LoginContinueForm">
        <h4 className="formHeader">Have an account? Log in</h4>
        <h3>Please sign in to continue</h3>
        <label for="description">Email: </label>
        <input type="text" id="email" placeholder="Enter email" />
        <label for="password">Password: </label>
        <input type="password" id="password" placeholder="Enter password" />
        </form>
      </div>
    )
  }
}


export default Login;
