import React from 'react';
import './Form.css';
import { Link, Route, Switch, withRouter } from 'react-router-dom'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        username: null,
        password: null,
      },
    };
  };

  handleChange = async (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      form: {
        [name]: value
      }
    }));
  };


  render() {
    // console.log('look at this one PLEASE', this.props);
    return (
      <div className="formContainer">
        <form
          id="login"
          className="LoginContinueForm"
          onSubmit={(e) => this.props.handleLog(e)}
        >
          <h4
            className="formHeader">Have an account? Log in</h4>
          <h3>Please Sign In to continue, or Register below!</h3>
          <label for="username">Username: </label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={this.props.authLoginData.username}
            onChange={this.props.handleChange}
            />
          <label for="password">Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={this.props.authLoginData.password}
            onChange={(e) => this.props.handleChange(e)}
            />
          <button
            className="submit"
            type="submit">Sign In</button>
        </form>
        <form
          className="registerForm"
          id="register"
          onSubmit={(e) => this.props.handleRegister(e)}
        >
          <h3>Register below!</h3>
          <label for="password">Email: </label>
          <input
            className="formInput"
            type="text"
            name="email"
            placeholder="email"
            value={this.props.authFormData.email}
            onChange={this.props.handleAuthChange}
          />
          <label for="username">Username: </label>
          <input
            className="formInput"
            type="text"
            name="username"
            placeholder="username"
            value={this.props.authFormData.username}
            onChange={this.props.handleAuthChange}
          />
          <label for="password">Password: </label>
          <input
            className="formInput"
            type="password"
            name="password"
            placeholder="password"
            value={this.props.authFormData.password}
            onChange={this.props.handleAuthChange}
          />
          <button className="submit">Register</button>
        </form>
      </div>
    )
  };
};




export default Form;
