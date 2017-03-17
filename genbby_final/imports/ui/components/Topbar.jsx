import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';

export default class Topbar extends Component{
	logout(event) {
		event.preventDefault();
		Meteor.logout((err)=>{
			if(err)
				console.log(err);
			else
				FlowRouter.go('/');
		})
	}
	change() {
		FlowRouter.go('/change');
	}

	render(){
		return (
			<nav>
		    	<div className="nav-wrapper blue-grey darken-3">
		      		<a href="#" className="brand-logo right">Genbby</a>
		      		<ul id="nav-mobile" className="left">
		        		<li><a href="" onClick={this.change.bind(this)}>Change Password</a></li>
		        		<li><a href="" onClick={this.logout.bind(this)}>logout</a></li>
		      		</ul>
		    	</div>
		 	</nav>
		)
	}
}