//Main page
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import Layout from './components/Layout';
import {AddContainer} from './components/Add';
import {HomeContainer} from './components/Home';
import {ProductDetailContainer} from './components/ProductDetail';
import productList from '../products';

import Bootstrap from 'bootstrap';

//Create Redux Store
const store = createStore(reducer);

//Set the state to load the products
store.dispatch({
  type: 'SET_STATE',
  state: {productList}
});

//The three routes of the app
const routes = <Route component={Layout}>
  <Route path="/add" component={AddContainer} />
  <Route path="/" component={HomeContainer} />
  <Route path="/detail/:id" component={ProductDetailContainer} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);

