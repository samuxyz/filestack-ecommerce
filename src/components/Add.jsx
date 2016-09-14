import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export class Add extends React.Component {
	constructor() {
		super();
	}
	uploadImg() {
		filepicker.pick(
		  function(Blob){
		    console.log(JSON.stringify(Blob));
		    const handler = Blob.url.substring(Blob.url.lastIndexOf('/') + 1);
		    document.getElementById('button-upload').dataset.handler = handler;
		  }
		);
	}
	submitCharacter(next) {
		const id = next;
		const name = document.getElementById('name').value;
		const handler = document.getElementById('button-upload').dataset.handler;
		const price = document.getElementById('price').value;
		const description = document.getElementById('description').value;
		const rating = Math.floor(Math.random() * 5) + 1;
		const product = {id, name, handler, price, description, rating};
		this.props.addProduct(product);
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
								<form name="imageForm" noValidate>
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
									<div className="form-group ">
					          <label htmlFor="picture">Picture</label>
					          <div className="text-center dropup">
					            <button id="button-upload" type="button" className="btn btn-default filepicker" onClick={() => this.uploadImg()}>
					              Upload <span className="caret"></span>
					            </button>
					             
					          </div>
					        </div>
									<button className="btn btn-filestack btn-block" onClick={() => this.submitCharacter(this.props.productListSize)}>Submit</button>
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
    productListSize: state.get("productList").toJS().length
  };
}

export const AddContainer = connect(mapStateToProps, actionCreators)(Add);