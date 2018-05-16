import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchTopRecipes, fetchIngredientsTopRecipes } from '../../actions/index';

import FoodCard from '../../components/FoodCard/FoodCard';
import WrapperHomeStyle from './WrapperHomeStyle';

import banner from '../../assets/images/banner.png';
import popularCuisine1 from '../../assets/images/popular_cuisine_1.png';
import popularCuisine2 from '../../assets/images/popular_cuisine_2.png';

// import APITopRecipe from '../../api/SampleAPITopRecipe.json';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topRecipes: null,
      topMenu: '1'
    };
  }

  componentDidMount() {
    this.props.getTopRecipes('main course');
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.mealTypeList.results) {
      this.setState({ topRecipes: nextProps.mealTypeList.results });
      console.log(nextProps.mealTypeList);
    }
  }

  moveLeft = () => {
    document.getElementById('sample-course').scrollLeft -= 800;
  }

  moveRight = () => {
    document.getElementById('sample-course').scrollLeft += 800;
  }

  fetchingFoodCard = () => {
    if(!this.state.topRecipes) {
      return null;
    }
      // const newState = _.map(this.state.topRecipes, (val, i) => {
        // return i;
        // return this.props.getIngredients(i);
      // })
        // console.log(newState);
  }

  renderFoodCard() {
    if(!this.state.topRecipes) {
      return (
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <i className="fas fa-spinner fa-spin fa-5x"></i>
        </div>
      )
    }else {
      return _.map(this.state.topRecipes, (value, index) => 
      <FoodCard 
        // onHover={this.props.getIngredients} 
        key={index} 
        data={value}
      />);
    }
  }

  chooseMenu = (topMenu, menu) => {
    this.setState({ topMenu, topRecipes: null });
    this.props.getTopRecipes(menu);
  }

  renderTopRecipes() {
    const topRecipesMenu = { 1: 'Main Course', 2: 'Side Dish', 3: 'Appetizer', 4: 'Breakfast', 5: 'Dessert', 6: 'Sauce', 7: 'Drink'};
    const menu = _.map(topRecipesMenu, (val,id) => {
      return (
        <li key={id} id={id} onClick={()=> this.chooseMenu(id, val)} className={this.state.topMenu === id ? 'selected' : ''}><span>&mdash;</span>{val}</li>
      )
    });
    return (
      <div className="top-recipes-container">
        <h1>Top Recipes</h1>
        <div className="list-top-recipes">
          <div className="main-course">
            {menu}
          </div>
          <div id="sample-course" className="sample-course">
            {this.renderFoodCard()}
          </div>
        </div>
        <div className="footer-top-recipes">
          <div className="footer-top-recipes_left">
            <label>See More</label>
            <div></div>
          </div>
          <div className="footer-top-recipes_right">
            <button onClick={this.moveLeft}><i className="fas fa-chevron-left"></i></button>
            <button onClick={this.moveRight}><i className="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
    );
  }

  renderPopularRecipes() {
    return (
      <div className="popular-cuisine-container">
        <div className="box-cuisine">
          <div className="box-header">
            <label>POPULAR CUISINES</label>
            <div>
              <button><i className="fas fa-chevron-left"></i></button>
              <button><i className="fas fa-chevron-right"></i></button>
            </div>
          </div>
          <label>American Food</label>
          <p>Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.</p>
          <div className="see-more">
            <label>See More</label>
            <div></div>
          </div>
        </div>
        <div className="list-image-cuisine">
          <img src={popularCuisine1} alt="food1"/>
          <img src={popularCuisine2} alt="food2"/>
          <img src={popularCuisine1} alt="food3"/>
          <img src={popularCuisine2} alt="food4"/>
        </div>
      </div>
    )
  }

  render() {
    return (
      <WrapperHomeStyle>
        <img src={banner} alt="banner" style={{width: '100%', marginTop: '-100px'}}/>
        {this.renderTopRecipes()}
        {this.renderPopularRecipes()}
      </WrapperHomeStyle>
    );
  }
}

const mapStateToProps = state => {
  return {
    mealTypeList: state.MealTypeList.payload.data,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTopRecipes: (type) => dispatch(fetchTopRecipes(type)),
    getIngredients: (id) => dispatch(fetchIngredientsTopRecipes(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);