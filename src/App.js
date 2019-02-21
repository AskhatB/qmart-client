import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './containers/auth';
import ProductScanner from './containers/productScanner';
import Product from './containers/product';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/product-scanner" component={ProductScanner} />
          <Route path="/product" component={Product} />
        </Switch>
      </div>
    );
  }
}

export default App;
