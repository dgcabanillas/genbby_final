import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Topbar from '../components/Topbar.jsx';
import ChooseGame from '../components/capa2/ChooseGame.jsx';

export default class HomeLayout extends TrackerReact(Component){
	constructor(){
		super();
		this.state = {
			subscription: {
				profile: Meteor.subscribe("profileUser")
			}
		}
	}
	componentWillUnmount() {
		this.state.subscription.profile.stop();
	}
	render(){
		return (
			<div>
				<Topbar />
				<div className="row">
					<div className="col s10 offset-s1 m6 offset-m3 l4 offset-l4">
						<ChooseGame />
					</div>
				</div>
			</div>
		);
	}
}
