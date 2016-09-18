export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}
export function addProduct(product) {
	return {
		type: 'ADD_PRODUCT',
		product
	};
}
export function filterProduct(filter) {
	return {
		type: 'FILTER_PRODUCT',
		filter
	};
}