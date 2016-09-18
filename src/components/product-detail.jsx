import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import RatingContainer from './rating-container';

export class ProductDetail extends React.Component {
	constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
	filterProduct() {
		const id = parseInt(this.props.params.id);
		return this.props.productList.filter((product, index) => product.id === id)[0];
	}
	render() {
		const product = this.filterProduct();
		if(!product) {
			return <div className="text-center">Sorry! The product you are looking for is not available...</div>
		}

		return (
			<div className="row">
				<div className="col-md-offset-2 col-md-8">
					<ol className="breadcrumb">
					  <li><Link to="/">Home</Link></li>
					  <li className="active">{product.name}</li>
					</ol>
          <div className="thumbnail">
            <img className="img-responsive" src={`https://cdn.filestackcontent.com/${product.handler}`} alt=""></img>
            <div className="caption-full">
              <h3 className="pull-right">${product.price}</h3>
              <h3><a href="#">{product.name}</a></h3>
              <p>{product.description}</p>   
            </div>
              <RatingContainer rating={product.rating}></RatingContainer>  
          </div>
          <div className="text-center">
            <button
						    className="snipcart-add-item btn btn-primary btn-cart"
						    data-item-id={product.id + product.handler}
						    data-item-name={product.name}
						    data-item-price={product.price}
						    data-item-url="/"
						    data-item-image={`https://cdn.filestackcontent.com/${product.handler}`}
						    data-item-description={product.description}>
						        Add to Cart
						</button>
					</div>
      	</div>
      	<div className="col-md-2"></div>
      </div>
		);
	}
}

function mapStateToProps(state) {
  return {
    productList: state.get("productList").toJS()
  };
}

export const ProductDetailContainer = connect(mapStateToProps, function(){ return {}})(ProductDetail);