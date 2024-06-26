import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import './index.css';

class Login extends Component {
  state = { username: '', password: '', showSubmitError: false, errorMsg: '' };

  onChangeUsername = event => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  onSubmitSuccess = jwtToken => {
    const { history } = this.props;

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    });
    history.replace('/');
  };

  onSubmitFailure = errorMsg => {
    console.log(errorMsg);
    this.setState({ showSubmitError: true, errorMsg });
  };

  submitForm = async event => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    const url = 'https://apis.ccbp.in/login';
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token);
    } else {
      this.onSubmitFailure(data.error_msg);
    }
  };

  renderUsernameField = () => {
    const { username } = this.state;
    return (
      <>
        <label htmlFor="username" className="label">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="input-element"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    );
  };

  renderPasswordField = () => {
    const { password } = this.state;
    return (
      <>
        <label htmlFor="password" className="label">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="input-element"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    );
  };

  render() {
    const { showSubmitError, errorMsg } = this.state;
    const jwtToken = Cookies.get('jwt_token');
    if (jwtToken !== undefined) {
      return <Navigate to="/" />;
    }
    return (
      <div className="sign-in-container">
        <div className="desktop-sign-in-card-container">
          <form className="form-container" onSubmit={this.submitForm}>
            <div className="mobile-signIn-container">
              <h1 className="signIn-heading">Sign In</h1>
              <div className="mobile-signIn-image-container">
                <img
                  src="https://res.cloudinary.com/dppqkea7f/image/upload/v1625810735/mobile-login_1_ragewe.png"
                  alt="signIn-img"
                  className="mobile-signIn-image"
                />
              </div>
            </div>
            <div className="desktop-signIn-container">
              <div className="desktop-sigIn-icon-container">
                <img src="https://th.bing.com/th/id/OIP.ANeFr48txQ21tv2A7ASsRQAAAA?w=450&h=281&rs=1&pid=ImgDetMain" alt="blog" style={{ paddingBottom: '50px' }} />
              </div>
            </div>
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <button type="submit" className="signIn-button">
              Sign in
            </button>
            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    );
  }
}

export default Login;