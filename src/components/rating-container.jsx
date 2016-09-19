import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Rating from './Rating';

export default class RatingContainer extends React.Component {
	constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
	getRating(rating) {
		let starList = [];
		for (let i = 0; i < rating; i++) {
		  starList.push(<Rating class={"glyphicon glyphicon-star"} key={i}></Rating>);
		}
		let currentSize = starList.length;
		for (let i = 5; i > currentSize; i--) {
		  starList.push(<Rating class={"glyphicon glyphicon-star-empty"} key={i}></Rating>);
		}
		return starList;
	}
	render() {
		return (
			<div className="ratings">
        <p>
        	{this.getRating(this.props.rating)}
        </p>
      </div> 
		);
	}
}