import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from './containers/auth';
import ProductScanner from './containers/productScanner';
import Product from './containers/product';
import CheckIn from './containers/checkin';
import Cart from './containers/cart';
import Payment from './containers/cloudpayments';
import Success from './containers/SuccessPayment';
import Registration from './containers/regisration';
import Profile from './containers/profile';
import axios from 'axios';
import { history } from './history';
import './App.css';
axios.defaults.baseURL = 'https://api.qmart.xyz/';
class App extends Component {
  render() {
    const clientId = localStorage.getItem('qmart-client-id');
    const { pathname } = history.location;
    return (
      <div className="App">
        <Switch>
          {clientId && pathname === '/auth' ? (window.location = '/') : null}
          {!clientId && pathname === '/' ? (window.location = '/auth') : null}
          <Route exact path="/" component={CheckIn} />
          <Route path="/auth" component={Auth} />
          <Route path="/product-scanner" component={ProductScanner} />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/payment/:amount" component={Payment} />
          <Route path="/success" component={Success} />
          <Route path="/registration" component={Registration} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default App;
