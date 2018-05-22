import React, { Component } from 'react';
import WrapperNavbarStyle from './WrapperNavbarStyle';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <WrapperNavbarStyle className="navbar" id="navbar">
          <div className="burger-icon">
            <i className="fas fa-bars"></i>
          </div>
          <div className="navbar-left">
            <span className="logo-icon">R</span>
            <a href="/">Home</a>
            <a href="/">Cuisine</a>
            <a href="/">Meal Type</a>
          </div>
          <div className="navbar-right">
            <i className="fa fa-search"></i>
            <a href="/">Login</a>
            <a href="/" className="register">REGISTER</a>
            <i className="fa fa-heart"></i>
          </div>
        </WrapperNavbarStyle>
    );
  }
}

export default Navbar;