import React, { Component } from 'react';
import WrapperFoodCardStyle from './WrapperFoodCardStyle';
import food1 from '../../assets/images/top-food_1.png';

class FoodCard extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <WrapperFoodCardStyle>
        <div className="img-card">
          <img className="food-img" src={food1} alt="top-food_1"/>
          <div className="ingredients">
            <li><span>1 ons</span> white mushrooms</li>
            <li><span>2 gram</span> minced garlic</li>
            <li><span>3 kilo</span> salt and pepper</li>
            <li><span>4 liter</span> parsley</li>
            <div className="see-detail">
              <label>See Details</label>
              <div></div>
            </div>
          </div>
        </div>
        <p className="food-name">Garlic Butter Salmon</p>
        <p className="food-category">American, Main Course</p>
      </WrapperFoodCardStyle>
    );
  }
}

export default FoodCard;