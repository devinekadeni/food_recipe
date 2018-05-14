import React, { Component } from 'react';
import FoodCard from '../../components/FoodCard/FoodCard';
import banner from '../../assets/images/banner.png';
import WrapperHomeStyle from './WrapperHomeStyle';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <WrapperHomeStyle>
        <img src={banner} style={{width: '100%', marginTop: '-100px'}}/>
        <div className="top-recipes-container">
          <h1>Top Recipes</h1>
          <FoodCard />
        </div>
        
      </WrapperHomeStyle>
    );
  }
}

export default HomePage;