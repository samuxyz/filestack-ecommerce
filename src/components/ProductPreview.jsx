import React from 'react';
import {Link} from 'react-router';
import RatingContainer from './RatingContainer';


export default class ProductPreview extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
          <img src={`https://cdn.filestackcontent.com/${this.props.handler}`} alt=""></img>
          <div className="caption">
              <h4 className="pull-right">${this.props.price}</h4>
              <h4><Link to={`/detail/${this.props.id}`}>{this.props.name}</Link>
              </h4>
              <p>{this.props.description}</p>
          </div>
          <RatingContainer rating={this.props.rating}></RatingContainer>
        </div>
      </div>
		);
	}
}