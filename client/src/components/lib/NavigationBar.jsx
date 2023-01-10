import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../../Styles/NavigationBar.css";

import logo from "../..//assets/images/nav_logo.svg";

class NavigationBar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav id="Navigation">
          <div>
            <ul
              id="Navigation-items"
              className={
                this.state.clicked
                  ? "#Navigation-items active"
                  : "#Navigation-items"
              }
            >
              <li>
                <NavLink className="underscore" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="underscore" to="/about">
                  About{" "}
                </NavLink>
              </li>
              <li>
                <NavLink className="underscore" to="/contact">
                  Research & Innovation
                </NavLink>
              </li>
              <li>
                <NavLink className="underscore" to="/contact">
                  Product
                </NavLink>
              </li>
            </ul>
          </div>
          <a to="index.html">
            <img className="img-logo" src={logo} alt="" />
          </a>
          <div>
            <ul
              id="Navigation-items-right"
              className={
                this.state.clicked
                  ? "#Navigation-items-right active"
                  : "#Navigation-items-right"
              }
            >
              <div className="login-register">
                <li>
                  <NavLink className="underscore" to="/login">
                    Sign In
                  </NavLink>
                </li>
                <li>
                  <NavLink className="register" to="/signup">
                    Register
                  </NavLink>
                </li>
              </div>
            </ul>
          </div>
          <div id="Navigation-mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default NavigationBar;
