import React, { Component } from "react";
import "../../styles/register.css";

class Login extends Component {
  render() {
    return (
      <div>
        <div className="signup-form">
          <form action="/" method="post">
            <h2>Create an Account</h2>
            <p className="hint-text">
              Sign up with your social media account or email address
            </p>
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
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control input-lg"
                name="email"
                placeholder="Email Address"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control input-lg"
                name="password"
                placeholder="Password"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control input-lg"
                name="confirm_password"
                placeholder="Confirm Password"
                required="required"
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-success btn-lg btn-block signup-btn"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-center">
            Already have an account? <a href="#">Login here</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
