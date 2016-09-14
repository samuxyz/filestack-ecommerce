import React from 'react';
import ProductPreview from './ProductPreview';
import {connect} from 'react-redux';

export class Home extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="row">
        <div className="col-md-3">
            <p className="lead">Shop Name</p>
            <div className="list-group">
                <a href="#" className="list-group-item">Category 1</a>
                <a href="#" className="list-group-item">Category 2</a>
                <a href="#" className="list-group-item">Category 3</a>
            </div>
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
            {this.props.productList.map(product => <ProductPreview key={product.id} {...product} />)}
          </div>
        </div>
      </div>
		);
	}
}

function mapStateToProps(state) {
  return {
    productList: state.get("productList").toJS()
  };
}

export const HomeContainer = connect(mapStateToProps, function(){ return {}})(Home);