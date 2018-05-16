import React, { Component } from 'react';
import WrapperFoodCardStyle from './WrapperFoodCardStyle';
import { imageBaseURL } from '../../api/ApiConfig';

class FoodCard extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const { image, title, readyInMinutes, id } = this.props.data;
    return (
      <WrapperFoodCardStyle>
        <div 
          className="img-card" 
          // onClick={this.props.onHover(id)}
        >
          <img className="food-img" src={`${imageBaseURL}${image}`} alt="top-food_1"/>
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
        <p className="food-name">{title}</p>
        <p className="food-category">{`Ready in ${readyInMinutes} Min`}</p>
      </WrapperFoodCardStyle>
    );
  }
}

export default FoodCard;