import React, { Component } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import "../../styles/register.css";
import FireConnection from "../../firebase";
import { AuthContext } from "../../AuthContext/AuthContext";

class RegisterComponent extends Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
      formErrors: {
        emailError: "",
        passwordError: "",
        usernameError: "",
        cnfPasswordError: ""
      },
      formValid: false,
      userNameValid: false,
      passwordValid: false,
      emailValid: false,
      cnfPasswordValid: false,
      errorMessage: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let userNameValid = this.state.userNameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let cnfPasswordValid = this.state.cnfPasswordValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.emailError = emailValid ? "" : "Invalid Email!";
        break;
      case "password":
        passwordValid = value.match(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
        );
        fieldValidationErrors.passwordError = passwordValid
          ? ""
          : " Please enter valid Passoword!";
        break;
      case "confirm_password":
        if (this.state.confirm_password === this.state.password) {
          cnfPasswordValid = true;
        } else {
          cnfPasswordValid = false;
        }
        fieldValidationErrors.cnfPasswordError = cnfPasswordValid
          ? ""
          : " Password is not match !";
        break;
      case "username":
        userNameValid = value.length >= 3;
        fieldValidationErrors.usernameError = userNameValid
          ? ""
          : "Username is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
        userNameValid: userNameValid,
        cnfPasswordValid: cnfPasswordValid
      },
      this.validateForm
    );
  }

  validatePasswordCnf = () => {
    const { confirm_password, password } = this.state;
    if (confirm_password !== password) {
      this.setState({
        cnfPasswordError: "Password Mismatch !"
      });
    } else {
      this.setState({
        cnfPasswordError: null
      });
    }
  };
  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.passwordValid &&
        this.state.userNameValid &&
        this.state.cnfPasswordValid
    });
  }
  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }
  submitHandler = e => {
    e.preventDefault();
    const { email, password } = this.state;
    FireConnection.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() =>
        this.props.history.push({
          pathname: "/",
          state: {
            key: true
          }
        })
      )
      .catch(error =>
        this.setState({
          errorMessage: error.message,
          redirectToReferrer: false
        })
      );
  };
  render() {
    const { username, email, password, confirm_password } = this.state;
    const isUser = this.context.currentUser;

    return (
      <div>
        {/* <div className="alert alert-danger text-center">
          <RegFormErrors formErrors={this.state.formErrors} />
        </div> */}
        {!isUser ? (
          <div className="signup-form">
            {this.state.errorMessage && (
              <div className="alert alert-danger text-center">
                <strong>Error!</strong> {this.state.errorMessage}
              </div>
            )}
            <form onSubmit={this.submitHandler} noValidate>
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
              <div
                className={`form-group
                 ${this.errorClass(this.state.formErrors.usernameError)}`}
              >
                <input
                  type="text"
                  className="form-control input-lg"
                  name="username"
                  placeholder="Username"
                  required="required"
                  onChange={this.handleUserInput}
                  value={username}
                  onBlur={this.validateName}
                />
                <div style={{ color: "red" }}>
                  {this.state.formErrors.usernameError}
                </div>
              </div>
              <div
                className={`form-group
                 ${this.errorClass(this.state.formErrors.emailError)}`}
              >
                <input
                  type="email"
                  className="form-control input-lg"
                  name="email"
                  placeholder="Email Address"
                  required="required"
                  onChange={this.handleUserInput}
                  value={email}
                  onBlur={this.validateEmail}
                />
                <div style={{ color: "red" }}>
                  {this.state.formErrors.emailError}
                </div>
              </div>
              <div
                className={`form-group
                 ${this.errorClass(this.state.formErrors.passwordError)}`}
              >
                <input
                  type="password"
                  className="form-control input-lg"
                  name="password"
                  placeholder="Password"
                  required="required"
                  onChange={this.handleUserInput}
                  value={password}
                  onBlur={this.validatePassword}
                />
                <div style={{ color: "red" }}>
                  {this.state.formErrors.passwordError}
                </div>
              </div>
              <div
                className={`form-group
                 ${this.errorClass(this.state.formErrors.cnfPasswordError)}`}
              >
                <input
                  type="password"
                  className="form-control input-lg"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  required="required"
                  onChange={this.handleUserInput}
                  value={confirm_password}
                  onBlur={this.validatePasswordCnf}
                />
                <div style={{ color: "red" }}>
                  {this.state.formErrors.cnfPasswordError}
                </div>
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-success btn-lg btn-block signup-btn"
                  disabled={!this.state.formValid}
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="text-center">
              Already have an account? <Link to="/login">Login here</Link>
            </div>
          </div>
        ) : (
          <Redirect to="/" />
          //   <div className="alert alert-success alert-dismissible" role="alert">
          //     <button
          //       type="button"
          //       className="close"
          //       data-dismiss="alert"
          //       aria-label="Close"
          //     >
          //       <span aria-hidden="true">&times;</span>
          //     </button>
          //     <img
          //       src="../../images/reg_success_banner.gif"
          //       className="img-responsive"
          //       alt="Welcome Login Banner"
          //     />
          //     <strong>Congratulations!</strong> You have successfully Registered!
          //     <p>
          //       <Link to="/login">Login</Link> to Continue!
          //     </p>
          //   </div>
        )}
      </div>
    );
  }
}

export default withRouter(RegisterComponent);
