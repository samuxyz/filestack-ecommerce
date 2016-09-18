import {Map, List} from 'immutable';

export function setState(state, newState) {
  return state.merge(newState);
}

export function addProduct(state, product) {
  return state.updateIn(['productList'], productList => productList.push(Map(product)));
}

export function filterProduct(state, filter) {
	return state.update('filterProduct', filterProduct => filterProduct = filter);
}

export const INITIAL_STATE = Map({productList:[], categories:[], filterProduct:0});