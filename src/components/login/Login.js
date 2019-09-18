import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../styles/register.css";

import FireConnection from "../../firebase";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      error: null
    };
  }
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  formSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    FireConnection.auth()
      .signInWithEmailAndPassword(username, password)
      .then(user => {
        console.log(user);
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({
          error: error
        });
      });
  };
  render() {
    const { username, password, error } = this.state;
    const isInvalid = password === "" || username === "";
    return (
      <div>
        <div className="legend">{error ? <h4>{error.message}</h4> : null}</div>
        <div className="signup-form">
          <form onSubmit={this.formSubmit} method="post">
            <h2>Login to Your Account</h2>
            <p className="hint-text">Social Logins are Available Now!</p>
            <div className="social-btn text-center">
              <a href="#" className="btn btn-primary btn-lg">
                <i className="fa fa-facebook" /> Facebook
              </a>
              <a href="#" className="btn btn-info btn-lg">
                <i className="fa fa-twitter" /> Twitter
              </a>
              <a href="#" className="btn btn-danger btn-lg">
                <i className="fa fa-google" /> Google
              </a>
            </div>
            <div className="or-seperator">
              <b>or</b>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control input-lg"
                name="username"
                placeholder="Username"
                required="required"
                value={username}
                onChange={this.changeHandler}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control input-lg"
                name="password"
                placeholder="Password"
                required="required"
                value={password}
                onChange={this.changeHandler}
              />
            </div>

            <div className="form-group">
              <button
                disabled={isInvalid}
                type="submit"
                className="btn btn-success btn-lg btn-block signup-btn"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="text-center">
            Don't have an account?{" "}
            <a href="javascript:void();">Register here</a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
