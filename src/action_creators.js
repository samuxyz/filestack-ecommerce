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