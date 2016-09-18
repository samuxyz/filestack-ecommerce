import {setState, addProduct, filterProduct, INITIAL_STATE} from './core';

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
	  case 'SET_STATE':
	    return setState(state, action.state);
	  case 'ADD_PRODUCT':
	  	return addProduct(state, action.product);
	  case 'FILTER_PRODUCT':
	  	return filterProduct(state, action.filter);
  }
  return state;
}