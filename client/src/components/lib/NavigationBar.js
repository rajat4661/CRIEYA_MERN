import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../../Styles/NavigationBar.css";

import logo from "../../images/logo.png";

class NavigationBar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav id="Navigation">
          <a to="index.html">
            <img src={logo} alt="" />
          </a>
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
                <NavLink className={this.state.clicked ? "active": ""} to="/">
                  {" "}
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about"> About </NavLink>
              </li>
              <li>
                <NavLink to="/contact"> Contact</NavLink>
              </li>
              <li>
                <NavLink to="/signup"> Signup</NavLink>
              </li>
              <li>
                <NavLink to="/login"> Login</NavLink>
              </li>
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
