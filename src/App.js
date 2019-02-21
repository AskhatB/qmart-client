import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './containers/auth';
import ProductScanner from './containers/productScanner';
import Product from './containers/product';
import axios from 'axios';
import './App.css';
axios.defaults.baseURL = 'http://127.0.0.1:8900';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/product-scanner" component={ProductScanner} />
          <Route path="/product/:id" component={Product} />
        </Switch>
      </div>
    );
  }
}

export default App;
