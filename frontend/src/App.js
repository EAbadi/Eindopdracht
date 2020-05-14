/*
********************************************
********************************************
Junior Programmeur: Ehsan Abadi
School: NOVI Hogeschool
Project: Eindopdracht
Opleiding: Bootcamp Fullstack Developer

********************************************
********************************************
*/
import React , {Component } from 'react';
import './css/App.css';
import Categories from './components/Categories'
import Category from './components/Category'
import Login from './components/Login'
import Welcome from './components/Welcome'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import ErrorComponent from './components/ErrorComponent'
import Header from './components/Header'
import Footer from './components/Footer'
import './components/Logout'
import Logout from './components/Logout';
import AuthenticatedRoute from './components/AuthenticatedRoute'

//nieuwe componenten 

import ProductList from "./components/ProductList";
import ProductList2 from "./components/ProductList2";


import mijnCart from './components/mijnCart';


import Products3 from './components/Products3';

import AdminDashboard from './components/AdminDashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <>
          <Header/>
            <Switch>
            <Route path="/" exact component={Products3} />
            <Route path="/products2" exact component={Products3} />
              {/* volgende route is van netifly*/}
              <Route path="/products" exact component={ProductList} />
            
             

              {/* volgende route is een test*/}
              //<Route path="/products2" exact component={ProductList2} />
              <Route path="/products2/checkout/:id" component={mijnCart} />
             

              
              
              
     

              

              <Route path="/login" exact component={Login} />
              <AuthenticatedRoute path="/welcome/:name" exact component={Welcome} />
              <AuthenticatedRoute path="/AdminDashboard" exact component={AdminDashboard} />
              
              <AuthenticatedRoute path="/users/:name/categories/:id"  component={Category} />
              <AuthenticatedRoute path="/users/:name/categories"  component={Categories} />

              <AuthenticatedRoute path="/jpa/users/:name/categories/:id"  component={Category} />
              <AuthenticatedRoute path="/jpa/users/:name/categories"  component={Categories} />
              
              <AuthenticatedRoute path="/logout" exact component={Logout} />
              
              <Route component={ErrorComponent}/>
            </Switch>
          
            <Footer/>
          </>
        </Router>
        
        {/*<Categories/>
        <Products testProps={5} />
        */}
      </div>
    );
  }
}

export default App;
