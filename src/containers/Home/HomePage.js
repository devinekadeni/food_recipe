import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchTopRecipes, fetchIngredientsTopRecipes } from '../../actions/MealTypeAction';
import { fetchPopularRecipes } from '../../actions/CuisineTypeAction';

import FoodCard from '../../components/FoodCard/FoodCard';
import WrapperHomeStyle from './WrapperHomeStyle';

import banner from '../../assets/images/banner.png';
import { imageBaseURL } from '../../api/ApiConfig';

const TOP_RECIPES_MENU = ['Main Course', 'Side Dish', 'Appetizer', 'Breakfast', 'Dessert', 'Sauce', 'Drink'];
const CUISINE_RECIPES = ['American', 'Chinese', 'Japanese', 'Korean', 'Thai', 'Indian', 'British', 'Italian', 'European', 'Mexican', 'Spanish'];

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topRecipes: null,
      topMenu: 'Main Course',
      popularRecipes: null,
      coba: null
    };
  }

  componentDidMount() {
    // console.log('mount')
    // console.log(this.props.topRecipes, this.props.popularRecipes)
    // const localTopRecipes = JSON.parse(localStorage.getItem('top_recipes'));
    // const localPopularRecipes = JSON.parse(localStorage.getItem('popular_recipes'));
    const localTopMenu = localStorage.getItem('top_menu');
    const localPopularMenu = localStorage.getItem('popular_menu');
    if(localTopMenu) {
      this.setState( prevState => ({ ...prevState, topMenu: localTopMenu }));
    }

    this.props.getTopRecipes(localTopMenu ? localTopMenu : 'main course');
    // }

    this.props.getPopularRecipes(localPopularMenu ? localPopularMenu : 'American');
    // }
    
    if(localPopularMenu) {
      document.getElementById(localPopularMenu).scrollIntoView();
    }
  }

  /* run right before render() */
  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log('getDerived')
    // console.log('nextProps',nextProps)
    // console.log('prevState', prevState)

    if(nextProps.topRecipes && !prevState.topRecipes) {
      // console.log('derived state top recipes')
      // localStorage.setItem('top_recipes', JSON.stringify(nextProps.topRecipes.results));
      localStorage.setItem('top_menu', prevState.topMenu);
      return { topRecipes: nextProps.topRecipes.results }
    }

    if(nextProps.popularRecipes && !prevState.popularRecipes) {
      // console.log('derived state popular recipes')
      // localStorage.setItem('popular_recipes', JSON.stringify(nextProps.popularRecipes.results));
      return { popularRecipes: nextProps.popularRecipes.results }
    }

    // console.log(prevState.topRecipes)
    if(prevState.topRecipes){
    const topRecipesKey = Object.keys(prevState.topRecipes)
    let update = false;
    for(let a = 0; a<topRecipesKey.length; a++){
      if(!prevState.topRecipes[topRecipesKey[a]].ingredients && nextProps.topRecipes.results[topRecipesKey[a]].ingredients) {
        update = true;
        break;
      }
    }
      if(update){
        update = false;
        return { topRecipes: nextProps.topRecipes.results };
      }
    }

    return null;
    // console.log('state popular recipes', this.state.popularRecipes);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('update')
    // console.log('state popular recipes update', this.state.popularRecipes);
    // console.log('did prevprops',prevProps)
    // console.log('did prevstate',prevState)
    // console.log('did snapshot',snapshot)
  }

  /* click to scroll horizontal */
  moveLeft = (id, ref, menu) => {
    let size = document.getElementById(id).offsetWidth;
    let counter = 0
    console.log(id);
    if(size) {
      let geser = setInterval(() => { 
        if(counter >= size) {
          clearInterval(geser);
          if(menu) {
            console.log('menu',menu)
            localStorage.setItem('popular_menu', id);
            this.setState({ popularRecipes: null });
            this.props.getPopularRecipes(menu);
          }
        }
        for(let i = 0; i<5; i++) {
          if(counter >= size){
            break;
          }
          this.refs[ref].scrollLeft -= 1;
          counter += 1;
        }
      }, 1);
    }    
  }

  /* click to scroll horizontal */
  moveRight = (id, ref, menu) => {
    let size = document.getElementById(id).offsetWidth;
    let counter = 0;
    console.log(id);
    if(size) {
      let geser = setInterval(() => { 
        if(counter >= size) {
          clearInterval(geser);
          if(menu) {
            console.log('menu',menu)
            localStorage.setItem('popular_menu', id);
            this.setState({ popularRecipes: null });
            this.props.getPopularRecipes(menu);
          }
        }
        for(let i = 0; i<5; i++) {
          if(counter >= size){
            break;
          }
          this.refs[ref].scrollLeft += 1;
          counter += 1;
        }
      }, 1);
    }
  }

  renderFoodCard() {
    if(!this.state.topRecipes) {
      return (
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <span><i className="fas fa-spinner fa-pulse fa-5x"></i></span>
        </div>
      )
    }else {
      // console.log('food card',this.state.topRecipes)
      let num = 0;
      return _.map(this.state.topRecipes, (value, index) => {
        num += 1;
        return (
          <FoodCard 
            // onHover={this.props.getIngredients}
            id={`foodCard${num}`}
            key={index} 
            data={value}
          />
        )
    });
    }
  }

  chooseMenu = (menu) => {
    // this.setState({ topMenu: menu });
    console.log('choose menu top')
    this.setState({ topMenu: menu, topRecipes: null });
    this.props.getTopRecipes(menu);
  }

  onChangeSelector = (e) => {
    // this.setState({ topMenu: e.target.value });
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
            <div>
              <label>See More</label>
              <div></div>
            </div>
          </div>
          <div className="footer-top-recipes_right">
            <button onClick={() => this.moveLeft("foodCard1","imgTop")}><i className="fas fa-chevron-left"></i></button>
            <button onClick={() => this.moveRight("foodCard1", "imgTop")}><i className="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
    );
  }

  renderBoxCuisine() {
    return CUISINE_RECIPES.map((val,id) => {
      return (
        <div key={id} className="box-cuisine" id={`boxCuisine${id}`}>
          <div className="box-header">
            <label>POPULAR CUISINES</label>
            <div>
              <button onClick={() => this.moveLeft(`boxCuisine${id===0 ? id : id-1}`, "boxCuisine", CUISINE_RECIPES[id-1])}><i className="fas fa-chevron-left"></i></button>
              <button onClick={() => this.moveRight(`boxCuisine${id===10 ? id : id+1}`, "boxCuisine", CUISINE_RECIPES[id+1])}><i className="fas fa-chevron-right"></i></button>
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
    // if(this.state.popularRecipes) {
      return (
        <div className="popular-cuisine-container">
          <div className="box-cuisine-container" ref="boxCuisine">
            {this.renderBoxCuisine()}
          </div>
          <div className="list-image-cuisine">
            {this.state.popularRecipes ?
                _.map(this.state.popularRecipes, val => {
                  return <img key={val.id} src={imageBaseURL+val.image} alt="food1"/>
                })
              :
                <span style={{color:'white',marginLeft: '25em'}}><i className="fas fa-spinner fa-pulse fa-5x"></i></span>              
            }
          </div>
        </div>
      )
    // }
    // return (
    //   <div className="popular-cuisine-container" style={{width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
    //     {/* // <div className="">Loading</div>          */}
    //     <span><i className="fas fa-spinner fa-pulse fa-10x"></i></span>
    //   </div>
    // )
    
    
  }

  render() {
    console.log('render')
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