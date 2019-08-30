import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      userPassword: ""
    };
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
  }

  handleLogin(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmitLogin(e) {
    event.preventDefault();
    alert("Thank you logging in!");
    return this.state.userName;
  }

  render() {
    return (
      <form className="login" onSubmit={ this.handleSubmitLogin }>
        <div className="form-group">
          <input type="email" className="form-control" name="userName" placeholder="Email" value={ this.state.userName } onChange={ this.handleLogin.bind(this) } />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="userPassword" placeholder="Password" value={ this.state.userPassword } onChange={ this.handleLogin.bind(this) } />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

Login.propTypes = {
  userName: PropTypes.string.isRequired,
  userPassword: PropTypes.string.isRequired
}

export default Login;
