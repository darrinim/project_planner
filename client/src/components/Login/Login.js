import React from 'react';
import Form from '../Form/Form';
import './Login.css';

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
    console.log('this is Login - props', this.props)
    return(
      <>
      <Form
        handleAuthChange={(e) => this.props.handleAuthChange(e)}
        handleLogin={(e) => this.props.handleLogin(e)}
        authFormData={this.props.authFormData}
        authLoginData={this.props.authLoginData}
        handleRegister={this.props.handleRegister}
        handleChange={this.props.handleChange}
        handleLog={this.props.handleLog}
      />
      </>
    )
  };
};


export default Login;
