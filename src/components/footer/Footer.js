import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <hr />
      <section id="footer">
        <div className="container">
          <div className="row text-center text-xs-center text-sm-left text-md-left">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>Quick links</h5>
              <ul className="list-unstyled quick-links">
                <li>
                  <Link to="/home">
                    <i className="fa fa-angle-double-right" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <i className="fa fa-angle-double-right" />
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/faq">
                    <i className="fa fa-angle-double-right" />
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa fa-angle-double-right" />
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/video">
                    <i className="fa fa-angle-double-right" />
                    Videos
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>Quick links</h5>
              <ul className="list-unstyled quick-links">
                <li>
                  <Link to="">
                    <i className="fa fa-angle-double-right" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa fa-angle-double-right" />
                    About
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa fa-angle-double-right" />
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa fa-angle-double-right" />
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa fa-angle-double-right" />
                    Videos
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>Quick links</h5>
              <ul className="list-unstyled quick-links">
                <li>
                  <Link to="">
                    <i className="fa fa-angle-double-right" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa fa-angle-double-right" />
                    About
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa fa-angle-double-right" />
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa fa-angle-double-right" />
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa fa-angle-double-right" />
                    Imprint
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item">
                  <Link to="">
                    <i className="fa fa-facebook" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="">
                    <i className="fa fa-twitter" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="">
                    <i className="fa fa-instagram" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="">
                    <i className="fa fa-google-plus" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="" target="_blank">
                    <i className="fa fa-envelope" />
                  </Link>
                </li>
              </ul>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
              <p className="h6">
                ©2019 All right Reversed.
                {/* <a className="text-green ml-2" href="#" target="_blank">
                  RecipesHouse.com
                </Link> */}
              </p>
            </div>
            <hr />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
