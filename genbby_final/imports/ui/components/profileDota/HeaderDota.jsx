import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';

export default class HeaderDota extends Component{
	render(){
		return (
			<nav>
		    	<div className="nav-wrapper blue-grey darken-3">
		      		<a href="#" className="brand-logo right">Genbby</a>
		      		<ul id="nav-mobile" className="left">
		        		<li><a href="/home">back to choose game</a></li>
		      		</ul>
		    	</div>
		 	</nav>
		)
	}
}