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
      topMenu: 'Main Course',
    };
  }

  componentDidMount() {
    const localTopRecipesData = JSON.parse(localStorage.getItem('top_recipes'));
    if(localTopRecipesData) {
      this.setState({ topRecipes: localTopRecipesData });
    }else {
      console.log('hit api get main course')
      this.props.getTopRecipes('main course');
    }
    // console.log('local',localTopRecipesData);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.mealTypeList.results) {
      this.setState({ topRecipes: nextProps.mealTypeList.results });
      localStorage.setItem('top_recipes', JSON.stringify(nextProps.mealTypeList.results));
      // console.log('next',nextProps.mealTypeList.results);
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
      console.log('food card',this.state.topRecipes)
      return _.map(this.state.topRecipes, (value, index) => 
      <FoodCard 
        // onHover={this.props.getIngredients} 
        key={index} 
        data={value}
      />);
    }
  }

  chooseMenu = (menu) => {
    this.setState({ topMenu: menu });
    // this.setState({ topMenu: menu, topRecipes: null });
    // this.props.getTopRecipes(menu);
  }

  onChangeSelector = (e) => {
    this.setState({ topMenu: e.target.value });
    // this.setState({ topMenu: e.target.value, topRecipes: null });
    // this.props.getTopRecipes(e.target.value);
  }

  renderTopRecipes() {
    const topRecipesMenu = ['Main Course', 'Side Dish', 'Appetizer', 'Breakfast', 'Dessert', 'Sauce', 'Drink'];
    const menu = topRecipesMenu.map((val,id) => {
      return (
        <li 
          key={id} id={id} 
          onClick={()=> this.chooseMenu(val)} 
          className={this.state.topMenu === val ? 'selected' : ''}>
            <span>&mdash;</span>
            {val}
      </li>
      )
    });
    return (
      <div className="top-recipes-container">
        <h1>Top Recipes</h1>
        <div className="list-top-recipes">
          <div className="main-course">
            {menu}
            <select onChange={this.onChangeSelector} className="main-course-selector">
              {topRecipesMenu.map((val,id) => {
                return <option key={id} value={val}>{val}</option>
              })}
            </select>
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
        {/* <div className="list-image-cuisine">
          <img src={popularCuisine1} alt="food1"/>
          <img src={popularCuisine2} alt="food2"/>
          <img src={popularCuisine1} alt="food3"/>
          <img src={popularCuisine2} alt="food4"/>
        </div> */}
      </div>
    )
  }

  render() {
    return (
      <WrapperHomeStyle>
        <img src={banner} alt="banner" style={{width: '100%', marginTop: '-5em'}}/>
        {this.renderTopRecipes()}
        {this.renderPopularRecipes()}
        <div style={{height:'1000px'}}></div>
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