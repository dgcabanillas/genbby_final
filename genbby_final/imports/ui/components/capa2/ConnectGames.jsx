import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom'; 

export const numGames = 5;

export default class ConnectGames extends Component{
	constructor(props){
		super(props);
		this.state = {
			listGames: [
				<div className="logoContainer">
					<img src="/games/dota2.jpg" alt="" onClick={this.withSteam.bind(this)}/>
					<button
						onClick={this.dota2profile.bind(this)}
					>
						Perfil Dota 2
					</button>
				</div>,
				<div className="logoContainer"><img src="/games/lol.jpg" alt=""/></div>,
				<div className="logoContainer"><img src="/games/cs.jpg" alt=""/></div>,
				<div className="logoContainer"><img src="/games/l4d.jpg" alt=""/></div>,
				<div className="logoContainer"><img src="/games/wow.jpg" alt=""/></div>
			]
		};
	}
	withSteam(err) {
		err.preventDefault();
		Meteor.loginWithSteam((er)=>{
			if(er) {
				Materialize.toast(er.reason, 4000);
			}
		});
	}
	dota2profile(e) {
		e.preventDefault();
		Meteor.call('dota2bot.updateDota2Profile',(err)=>{if(err) console.log(err);});
		FlowRouter.go('/home/choose/dota');
	}

	render(){
		return (
			<div className="gamesContainer upGame" ref="gamesList">
				{this.state.listGames[this.props.game]}
				{this.state.listGames[this.props.game+1]}
			</div>
		)
	}
}