import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Category from './category';
import {filterProduct} from '../action_creators';

export class CategoryList extends React.Component {
	constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
	filter(id) {
		this.props.filterProduct(id);
	}
	render() { 
		return (
			<div className="list-group">
				{this.props.categories.map((category,i) => <Category active={this.props.category} key={category.id} {...category} onClick={this.filter.bind(this, category.id)}/>)}
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		filterProduct: id => dispatch(filterProduct(id))
	}
}

function mapStateToProps(state) {
  return {
    category: state.get('filterProduct')
  };
}

export const CategoryListContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryList);