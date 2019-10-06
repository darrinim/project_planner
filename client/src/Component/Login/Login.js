import React from 'react';
import Form from '../Form/Form';
import './login.css'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password: null,
    };
  };

  handleChange = (e) => {
    console.log('this is handleChange', e.target.value);
    this.setState({
      username: e.target.value,
      password: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      username: e.target.value,
      password: e.target.value,
    });
  };

  render() {
    return (
      <div className="landingBackground">
        <Form handleAuthChange={(e) => this.props.handleAuthChange(e)}
          handleLogin={(e) => this.props.handleLogin(e)}
          authFormData={this.props.authFormData}
          authLoginData={this.props.authLoginData}
          handleRegister={this.props.handleRegister}
          handleChange={this.props.handleChange}
          handleLog={this.props.handleLog}
        />
      </div>
    )
  };
};

export default Login;
