import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import HomePage from './Home/HomePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: 0,
    }
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleScroll);
  }

  componentDidMount() {
    // if(window.pageYOffset > 100 || document.documentElement.scrollTop > 100) {
    //   alert('hello');
    // }
    window.addEventListener('scroll', this.handleScroll);

    // console.log('scroll',this.state.scroll);
  }

  componentWillUpdate() {
    // console.log('scroll',this.state.scroll);
  }

  componentDidUpdate() {
    // console.log('scroll',this.state.scroll);    
  }

  checkScroll = () => {
    this.setState({ scroll: window.pageYOffset});
    // console.log('scroll', this.state.scroll);
    // console.log('scroll', window.pageYOffset);
  }

  handleScroll = (event) => {
    // console.log('the scroll things', event.target.scrollingElement.scrollTop);
    if(event.target.scrollingElement.scrollTop > 300) {
      document.getElementById('navbar').style.background = 'white';
      document.getElementById('navbar').style.boxShadow = '0px 5px 20px #d8d6d6';      
      // document.getElementsByClassName('eLcKau').style.background = 'white';
    }else {
      document.getElementById('navbar').style.background = 'linear-gradient(white, transparent)';      
      document.getElementById('navbar').style.boxShadow = 'none';      
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage}/>
          </Switch>
          <div className="modal-burger-menu"></div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
