import React from 'react';

export default class Rating extends React.Component {
	constructor() {
		super();
	}
	render() {
		return <span className={this.props.class}></span>;
	}
}