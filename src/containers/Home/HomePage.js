import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchTopRecipes, fetchIngredientsTopRecipes } from '../../actions/MealTypeAction';
import { fetchPopularRecipes } from '../../actions/CuisineTypeAction';

import FoodCard from '../../components/FoodCard/FoodCard';
import WrapperHomeStyle from './WrapperHomeStyle';

import banner from '../../assets/images/banner.png';
import popularCuisine1 from '../../assets/images/popular_cuisine_1.png';
import popularCuisine2 from '../../assets/images/popular_cuisine_2.png';
import { imageBaseURL } from '../../api/ApiConfig';

// import APITopRecipe from '../../api/SampleAPITopRecipe.json';
const TOP_RECIPES_MENU = ['Main Course', 'Side Dish', 'Appetizer', 'Breakfast', 'Dessert', 'Sauce', 'Drink'];
const CUISINE_RECIPES = ['American', 'Chinese', 'Japanese', 'Korean', 'Thai', 'Indian', 'British', 'Italian', 'European', 'Mexican', 'Spanish'];

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topRecipes: null,
      topMenu: 'Main Course',
      popularRecipes: null,
    };
  }

  componentDidMount() {
    const localTopRecipes = JSON.parse(localStorage.getItem('top_recipes'));
    const localPopularRecipes = JSON.parse(localStorage.getItem('popular_recipes'));
    const localTopMenu = localStorage.getItem('top_menu');
    if(localTopRecipes) {
      this.setState({ topRecipes: localTopRecipes, topMenu: localTopMenu });
    }else {
      console.log('hit api get top recipes')
      this.props.getTopRecipes('main course');
    }

    if(localPopularRecipes) {
      this.setState({ popularRecipes: localPopularRecipes });
    }else {
      console.log('hit api get popular recipes')
      this.props.getPopularRecipes('American');
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.topRecipes) {
  //     this.setState({ topRecipes: nextProps.topRecipes.results });
  //     localStorage.setItem('top_recipes', JSON.stringify(nextProps.topRecipes.results));
  //     localStorage.setItem('top_menu', this.state.topMenu);
  //     // console.log('next',nextProps.topRecipes.results);
  //   }

  //   if(nextProps.popularRecipes) {
  //     this.setState({ popularRecipes: nextProps.popularRecipes.results });
  //     localStorage.setItem('popular_recipes', JSON.stringify(nextProps.popularRecipes.results));
  //     // localStorage.setItem('top_menu', this.state.topMenu);
  //     // console.log('next',nextProps.popularRecipes.results);
  //   }
  //   console.log('state popular recipes', this.state.popularRecipes);
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('derived',nextProps)
    console.log('prev', prevState)
    if(nextProps.topRecipes && !prevState.topRecipes) {
      localStorage.setItem('top_recipes', JSON.stringify(nextProps.topRecipes.results));
      localStorage.setItem('top_menu', prevState.topMenu);
      return { topRecipes: nextProps.topRecipes.results }
    }

    if(nextProps.popularRecipes) {
      localStorage.setItem('popular_recipes', JSON.stringify(nextProps.popularRecipes.results));
      // localStorage.setItem('top_menu', prevState.topMenu);
      return { popularRecipes: nextProps.popularRecipes.results }
    }
    return null;
    // console.log('state popular recipes', this.state.popularRecipes);
  }

  componentDidUpdate(prevProps,prevState,snapshot) {
    console.log('state popular recipes update', this.state.popularRecipes);
    console.log('did prevprops',prevProps)
    console.log('did prevstate',prevState)
    console.log('did snapshot',snapshot)
  }

  moveLeft = () => {
    let size = document.getElementById("foodCard1").offsetWidth;
    let counter = 0
    let geser = setInterval(() => { 
        if(counter>size) {
          clearInterval(geser);
        }
        this.refs.imgTop.scrollLeft -= 10;
        counter += 10;
      }, 10);
  }

  moveRight = () => {
    let size = document.getElementById("foodCard1").offsetWidth;
    let counter = 0
    let geser = setInterval(() => { 
        if(counter>size) {
          clearInterval(geser);
        }
        this.refs.imgTop.scrollLeft += 10;
        counter += 10;
      }, 10);
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
      let num = 1;
      return _.map(this.state.topRecipes, (value, index) => 
      <FoodCard 
        // onHover={this.props.getIngredients}
        id={`foodCard${num}`}
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
    const menu = TOP_RECIPES_MENU.map((val,id) => {
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
              {TOP_RECIPES_MENU.map((val,id) => {
                return <option key={id} value={val}>{val}</option>
              })}
            </select>
          </div>
          <div id="sample-course" ref="imgTop" className="sample-course">
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

  renderBoxCuisine() {
    return CUISINE_RECIPES.map((val,id) => {
      return (
        <div key={id} className="box-cuisine">
          <div className="box-header">
            <label>POPULAR CUISINES</label>
            <div>
              <button><i className="fas fa-chevron-left"></i></button>
              <button><i className="fas fa-chevron-right"></i></button>
            </div>
          </div>
          <label>{val} Food</label>
          <p>Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet, molestie mollis nulla. Etiam lorem orci, consequat ac magna quis, facilisis vehicula neque.</p>
          <div className="see-more">
            <label>See More</label>
            <div></div>
          </div>
        </div>
      )
    })
  }

  renderPopularRecipes() {
    if(!this.state.popularRecipes) {
      return (
        <div className="popular-cuisine-container" style={{width: '100%', height: '500px', justifyContent: 'center' }}>
          <i className="fas fa-spinner fa-spin fa-10x" style={{color:'black', alignSelf: 'center'}}></i>          
        </div>
      )
    } else {
      return (
        <div className="popular-cuisine-container">
          <div className="box-cuisine-container">
            {this.renderBoxCuisine()}
          </div>
          <div className="list-image-cuisine">
            {_.map(this.state.popularRecipes, val => {
              return <img key={val.id} src={imageBaseURL+val.image} alt="food1"/>
            })}
          </div>
        </div>
      )
    }
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
    topRecipes: state.MealTypeList.payload.data,
    popularRecipes: state.CuisineTypeList.payload.data,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTopRecipes: (type) => dispatch(fetchTopRecipes(type)),
    getIngredients: (id) => dispatch(fetchIngredientsTopRecipes(id)),
    getPopularRecipes: (cuisine) => dispatch(fetchPopularRecipes(cuisine)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);