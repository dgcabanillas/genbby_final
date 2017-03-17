import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactDOM from 'react-dom';

import ConnectGames, { numGames } from './ConnectGames.jsx'; 

export default class ChooseGame extends TrackerReact(Component){
	constructor(props){
		super(props);
		this.state = {
			game:0,
			subscription: {
				dota2profile: Meteor.subscribe("profileUser")
			}
		};
	}
	componentWillUnmount() {
		this.state.subscription.dota2profile.stop();
	}
	upGame(){
		if((this.state.game+1) < (numGames-1)){
			this.setState({
				game:this.state.game + 1
			});
		}
	}
	downGame(){
		if(this.state.game > 0){
			this.setState({
				game:this.state.game - 1
			});
		}
	}
	profile(){
		Meteor.call('dota2bot.updateDota2Profile',(err)=>{if(err) console.log(err);});
	}
	render(){
		let user = Meteor.user()? Meteor.user():false;
		let services = user.services?(user.services):false;
		let steam = services.steam?services.steam:false;
		let steamId = steam.id?steam.id:false;
		if(steamId){
			this.profile();
		}

		return (
			<div className="choose center-align">	
				<p className="chooseGame">Choose your game ..</p>
				<div className="utilsContainer">
					<img src="/utils/upArrow.png" alt="" onClick={this.upGame.bind(this)}/>
				</div>
				<ConnectGames game={this.state.game}/>
				<div className="utilsContainer">
					<img src="/utils/downArrow.png" alt="" onClick={this.downGame.bind(this)}/>
				</div>
			</div>
		)
	}
}