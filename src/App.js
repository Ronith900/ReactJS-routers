import React, { Component } from "react";
import NavBar from "./components/navbar";
import {Route,Switch,Redirect} from 'react-router-dom';
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import Users from './components/admin/users';
import P from './components/admin/posts';



class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
          <Route path="/products/:id" component={ProductDetails}></Route>
          <Route path="/products" render={props => <Products sortBy="newest" {...props}></Products>}></Route>
          <Route path="/posts/:year?/:month?" component={Posts}></Route>
          <Redirect from="/messages" to="/posts"></Redirect>
          <Route path="/admin" component={Dashboard}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Route path="/" exact component={Home}></Route>
          <Redirect to="/not-found"></Redirect>
          
          </Switch>
        </div>
        <div className="content">
          <Switch>
          <Route path="/admin/users" component={Users}></Route>
          <Route path="/admin/posts" component={P}></Route>
          
          </Switch>
        </div>
        
      </div>
    );
  }
}

export default App;
