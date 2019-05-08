import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './containers/auth';
import ProductScanner from './containers/productScanner';
import Product from './containers/product';
import CheckIn from './containers/checkin';
import Cart from './containers/cart';
import Payment from './containers/payment';
import Success from './containers/SuccessPayment';
import axios from 'axios';
import './App.css';
axios.defaults.baseURL = 'https://qmart-api.unie.kz/';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={CheckIn} />
          <Route path="/auth" component={Auth} />
          <Route path="/product-scanner" component={ProductScanner} />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/payment/:amount" component={Payment} />
          <Route path="/success" component={Success} />
        </Switch>
      </div>
    );
  }
}

export default App;
