import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rentals from './common/rentals'
import Customer from './common/customer'
import NavBar from './common/navbar'
import {Route} from "react-router-dom"
import LoginFrom from './common/loginform'
import MovieFrom from './common/moviefrom.jsx'


  import React, { Component } from 'react';
  import Movies from './compnents/movies';
class App extends Component {
    state = {  }
    render() { 
      return ( <React.Fragment>
        <NavBar/>
        <main className="container">
          <Switch>
            <Route path ="/login" component={LoginFrom}/>
            <Route path ="/movies/:id" component={MovieFrom}/>
            <Route path ="/login" component={LoginFrom}/>


          </Switch>
        </main>
      </React.Fragment>
       );
    }
  }
   
  export default App;
