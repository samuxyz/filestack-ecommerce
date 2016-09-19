import React from 'react';
import {Link} from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Layout extends React.Component {
	constructor(props) { 
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
	render() {
		const currentLocation = this.props.location.pathname;
		return(
			<div>
				<nav className="navbar navbar-inverse navbar-fixed-top">
					<div className="container">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="#">Shopstack</a>
						</div>
						<div id="navbar" className="navbar-collapse collapse">
							<ul className='nav navbar-nav navbar-left'>
							{this.props.location.pathname != '/add' ? <li><Link to="/add">Upload</Link></li> : ""}
							{this.props.location.pathname != '/' ? <li><Link to="/">Home</Link></li> : ""}
							</ul> 
							<ul className='nav navbar-nav navbar-right'>
								<li><a href="#" className="snipcart-summary snipcart-checkout" id="btn-checkout"><span className="glyphicon glyphicon-shopping-cart"></span> <span className="snipcart-total-items"></span> Checkout</a></li>
							</ul>  
						</div>
						<div id="navbar" className="navbar-collapse collapse">
						</div>
					</div>
				</nav>
				<div className="container">
    			{this.props.children}
				<hr></hr>
    		<footer>
      	<p>© 2016 <a href="https://tw.linkedin.com/in/samuele-zaza-46523681" target="_blank">Samuele Zaza</a>, Filestack Tech Evangelist.</p>
    		</footer>
			</div>
		</div>
		);
	}
}