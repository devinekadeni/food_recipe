import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchIngredientsTopRecipes } from '../../actions/MealTypeAction';

import WrapperFoodCardStyle from './WrapperFoodCardStyle';
import { imageBaseURL } from '../../api/ApiConfig';

class FoodCard extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  async componentDidMount() {
    // console.log('didmount FoodCard')
    await this.props.getIngredients(this.props.data.id);
    // console.log('ingredient',this.props.topRecipes)
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('update', this.props.id)
    // console.log('props', prevProps)
    // console.log('ingredients',this.props.topRecipes.results)
  }

  renderIngredients = () => {
    const { ingredients } = this.props.data
    if(ingredients) {
      const data = _.map(ingredients, (val, i) => {
      if(i<6){
        return <li key={i}><span>{`${val.measures.us.amount} ${val.measures.us.unitShort}`}</span>{` ${val.name}`}</li>
      }
      return null;
      })
      return data;
    }
  }

  render() {
    const { image, title, readyInMinutes } = this.props.data;
    return (
      <WrapperFoodCardStyle>
        <div 
          className="img-card" 
          id={this.props.id}
          // onClick={this.props.onHover(id)}
        >
          <img className="food-img" src={`${imageBaseURL}${image}`} alt="top-food_1"/>
          <div className="ingredients">
            <div className="ingredients-item">
              {this.renderIngredients()}
            </div>
            <div className="see-detail">
              <label>See Details</label>
              <div></div>
            </div>
          </div>
        </div>
        <p className={title.length>57 ? 'food-name-long' : 'food-name-short'}>{title}</p>
        <p className="food-category">{`Ready in ${readyInMinutes} Min`}</p>
      </WrapperFoodCardStyle>
    );
  }
}

const mapStateToProps = state => {
  return {
    topRecipes: state.MealTypeList.payload.data,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getIngredients: (id) => dispatch(fetchIngredientsTopRecipes(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodCard);