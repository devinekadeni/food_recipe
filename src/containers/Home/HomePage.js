import React, { Component } from 'react';
import FoodCard from '../../components/FoodCard/FoodCard';
import WrapperHomeStyle from './WrapperHomeStyle';

import banner from '../../assets/images/banner.png';
import popularCuisine1 from '../../assets/images/popular_cuisine_1.png';
import popularCuisine2 from '../../assets/images/popular_cuisine_2.png';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  moveLeft = () => {
    document.getElementById('sample-course').scrollLeft -= 800;
  }

  moveRight = () => {
    document.getElementById('sample-course').scrollLeft += 800;
  }

  renderTopRecipes() {
    return (
      <div className="top-recipes-container">
        <h1>Top Recipes</h1>
        <div className="list-top-recipes">
          <div className="main-course">
            <h3><span>&mdash;</span> Main Course</h3>
            <li>Side Dish</li>
            <li>Appetizer</li>
            <li>Breakfast</li>
            <li>Dessert</li>
            <li>Sauce</li>
            <li>Drink</li>
          </div>
          <div id="sample-course" className="sample-course">
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
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

  render() {
    return (
      <WrapperHomeStyle>
        <img src={banner} style={{width: '100%', marginTop: '-100px'}}/>
        {this.renderTopRecipes()}
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
      </WrapperHomeStyle>
    );
  }
}

export default HomePage;