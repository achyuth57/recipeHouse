import React, { Component } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import "../../styles/register.css";
import { AuthContext } from "../../AuthContext/AuthContext";

import FireConnection from "../../firebase";

class Login extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: null,
      redirectToReferrer: false
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
    const userFetch = FireConnection.auth();
    userFetch
      .signInWithEmailAndPassword(username, password)
      .then(user => {
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({
          error: error
        });
      });
  };

  render() {
    // const isKey = this.props.location.state.key;
    const { username, password, error } = this.state;
    const isInvalid = password === "" || username === "";
    const isUser = this.context.currentUser;

    return (
      <div>
        {!isUser ? (
          <React.Fragment>
            {/* {isKey && (
              <div
                className="alert alert-success alert-dismissible"
                role="alert"
              >
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <img
                  src="../../images/reg_success_banner.gif"
                  className="img-responsive"
                  alt="Welcome Login Banner"
                />
                <strong>Congratulations!</strong> You have successfully
                Registered!
                <p>
                  <Link to="/login">Login</Link> to Continue!
                </p>
              </div>
            )} */}
            {this.props.location.message && (
              <div className="alert alert-warning text-center">
                <strong>Warning!</strong> {this.props.location.message}
              </div>
            )}
            {this.state.error && (
              <div className="alert alert-danger text-center">
                <strong>Login Error!</strong> {error.message}
              </div>
            )}

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
                Don't have an account?
                <Link to="/register"> Register here</Link>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <Redirect to="/" />
        )}
      </div>
    );
  }
}

export default withRouter(Login);
