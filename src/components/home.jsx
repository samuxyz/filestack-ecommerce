import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {CategoryListContainer} from './category-list';
import ProductPreview from './product-preview';


export class Home extends React.Component {
	constructor(props) {
      super(props);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
	render() {
    let productList = this.props.productList;
    if(this.props.filterProduct) {
      productList = productList.filter(product => product.category == this.props.filterProduct);
    }
		return (
			<div className="row">
        <div className="col-md-3">
            <blockquote className="blockquote">
              <p className="m-b-0">“Happiness is a warm puppy.”</p>
              <footer className="blockquote-footer">Charles M. Schulz</footer>
            </blockquote>
            <CategoryListContainer categories={this.props.categories}></CategoryListContainer>
        </div>
        <div className="col-md-9">
          <div className="row carousel-holder">
            <div className="col-md-12">
              <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="item active">
                    <img className="slide-image" src="https://cdn.filestackcontent.com/ZDLoiMPgQzKjod7BV7nM" alt=""></img>
                  </div>
                  <div className="item">
                    <img className="slide-image" src="https://cdn.filestackcontent.com/tIuoqB7lRqSH75blfqZg" alt=""></img>
                  </div>
                  <div className="item">
                    <img className="slide-image" src="https://cdn.filestackcontent.com/IPTtURp7SaONuyms8JI1" alt=""></img>
                  </div>
                </div>
                <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left"></span>
                </a>
                <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="row">   
            {productList.map(product => <ProductPreview key={product.id} {...product} />)}
          </div>
        </div>
      </div>
		);
	}
}

function mapStateToProps(state) {
  return {
    productList: state.get('productList').toJS(),
    categories: state.get('categories').toJS(),
    filterProduct: state.get('filterProduct')
  };
}

export const HomeContainer = connect(mapStateToProps, function(){ return {}})(Home);