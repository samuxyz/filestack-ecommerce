import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {addProduct} from '../action_creators';

export class Add extends React.Component {
	constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
	uploadImg() {
		filepicker.pick(
			{
		    mimetype: 'image/*',
		    container: 'modal',
		    services: ['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'URL', 'IMGUR', 'PICASA'],
		    openTo: 'COMPUTER'
		  },
		  function(Blob){
		    console.log(JSON.stringify(Blob));
		    const handler = Blob.url.substring(Blob.url.lastIndexOf('/') + 1);
		    document.getElementById('button-upload').dataset.handler = handler;
		  },
		  function(FPError){
		  	console.log(FPError.toString());
		  }
		);
	}
	submitCharacter(next) {
		const id = next;
		const name = document.getElementById('name').value;
		const handler = document.getElementById('button-upload').dataset.handler;
		const price = document.getElementById('price').value;
		const description = document.getElementById('description').value;
		const rating = Math.floor(Math.random() * 5) + 1; //Just a random number
		const category = document.getElementById('category-list').value;
		const product = {id, name, handler, price, description, rating, category};
		this.props.addProduct(product);
		document.getElementById("product-form").reset();
	}
	render() {
		return(
			<div className="row">
				<div className="col-md-offset-2 col-md-8">
					<div className="panel panel-default">
							<div className="panel-heading">
								<h2 className="panel-title text-center">
								<span className="glyphicon glyphicon-upload"></span> Upload a Product
								</h2>
							</div>
							<div className="panel-body">
								<form name="product-form" id="product-form" noValidate>
									<div className="form-group">
										<label htmlFor="name">Name</label>
										<input id="name" type="text" className="form-control" placeholder="Enter the real name..." required/>
									</div>
									<div className="form-group">
										<label htmlFor="description">Description</label>
										<input id="description" type="text" className="form-control" placeholder="Enter the description..." required/>
									</div>
									<div className="form-group">
										<label htmlFor="price">Price</label>
										<input id="price" type="text" className="form-control" placeholder="Enter the price..." required/>
									</div>
									<div className="form-group">
										<label htmlFor="category-list">Category</label>
										<select className="form-control" id="category-list">
											{this.props.categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
										</select>
									</div>
									<div className="form-group ">
					          <label htmlFor="picture">Picture</label>
					          <div className="text-center dropup">
					            <button id="button-upload" type="button" className="btn btn-default filepicker" onClick={() => this.uploadImg()}>
					              Upload <span className="caret"></span>
					            </button>   
					          </div>
					        </div>
									<button type="button" className="btn btn-filestack btn-block" onClick={() => this.submitCharacter(this.props.productListSize)}>Submit</button>
								</form>
							</div>
					</div>
				</div>
			</div>
		); 
	}

}

function mapStateToProps(state) {
  return {
    productListSize: state.get("productList").toJS().length,
    categories: state.get("categories").toJS()
  };
}
function mapDispatchToProps(dispatch) {
	return {
		addProduct: product => dispatch(addProduct(product))
	}
}
export const AddContainer = connect(mapStateToProps, mapDispatchToProps)(Add);