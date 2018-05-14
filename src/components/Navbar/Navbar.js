import React, { Component } from 'react';
import WrapperNavbarStyle from './WrapperNavbarStyle';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <WrapperNavbarStyle>
        <div style={{display: 'flex', }}>
          <span className="logo-icon">R</span>          
        </div>
        <div className="navbar-left">
          <a href="#">Home</a>
          <a href="#">Cuisine</a>
          <a href="#">Meal Type</a>
        </div>
        <div className="navbar-right">
          <a href="#" className="fa fa-search"></a>
          <a href="#">Login</a>
          <a href="#" className="register">REGISTER</a>
          <a href="#" className="fa fa-heart"></a>
        </div>
      </WrapperNavbarStyle>
    );
  }
}

export default Navbar;