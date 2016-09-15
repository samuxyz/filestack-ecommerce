import React from 'react';
import {Link} from 'react-router';

export default class Layout extends React.Component {
	constructor() {
		super();
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
							</ul> 
							<ul className='nav navbar-nav navbar-right'>
							{this.props.location.pathname != '/' ? <li><Link to="/">Home</Link></li> : ""}
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
      	<p>© 2016 Samuele Zaza, Filestack Tech Evangelist.</p>
    		</footer>
			</div>
		</div>
		);
	}

}