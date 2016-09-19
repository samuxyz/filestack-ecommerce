import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Category extends React.Component {
	constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
	render() {
		let active = this.props.id == this.props.active ? "category-active" : "";
		return <a href="#" className={`list-group-item ${active}`} id={this.props.id} onClick={this.props.onClick}>{this.props.name}</a>
	}
}