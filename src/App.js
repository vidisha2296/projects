import React, { Component } from "react";
import './App.css';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
//import Footer from './components/pages/Footer/Footer';
import Hom from "./components/calculator/Hom";
class  App extends Component {
  render(){
  return ( 
    <Router>
      <Navbar />
      <Hom/>
      
      <div>
      <img src="/images/blob-small.svg"/>
      
      <img src="/images/circle.svg"/>
      
      </div>
        <img src="images/sol_wave_bg.svg"/>
      <Switch>
        
      <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
      
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      
    </Router>
  );
}
}
export default App;