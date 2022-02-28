import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import Product from './components/product';
import Country from './compnents/countries';

import { BrowserRouter,Switch } from 'react-router-dom';
// import Products from './components/products';
import {Route} from "react-router-dom"



// ReactDOM.render(
//  <BrowserRouter><Products/></BrowserRouter>,document.getElementById("root")
// );

ReactDOM.render(
    <BrowserRouter>
       <Switch>
         
         <Route path="/" exact component={Country}/> 
     </Switch>
   </BrowserRouter>,document.getElementById("root")
   );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
