import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export default class LoginComponent extends Component{
	onLogin(e) {
		e.preventDefault();
		// Get our input values
		const username = ReactDOM.findDOMNode(this.refs.username).value;
		const password = ReactDOM.findDOMNode(this.refs.password).value;

		// Login user
		Meteor.loginWithPassword(username, password, (er)=>{
			if(er) {
				Materialize.toast(er.reason, 4000);
			} else {
				FlowRouter.go('/home');
			}
		});
	}
	withFacebook(e) {
		e.preventDefault();
		Meteor.loginWithFacebook((er)=>{
			if(er) {
				Materialize.toast(er.reason, 4000);
			} else {
				FlowRouter.go('/home');
			}
		});

	}
	withTwitter(e) {
		e.preventDefault();
		Meteor.loginWithTwitter((er)=>{
			if(er) {
				Materialize.toast(er.reason, 4000);
			} else {
				FlowRouter.go('/home');
			}
		});
	}

	render() {
		return (
			<div className="row">
				<div className="col s12 m8 offset-m2 l4 offset-l4">
					<h3 className="center-align">Welcome</h3>
					<form onSubmit={this.onLogin.bind(this)} className="col offset-s1 s10">
						<div className="row">
							<div className="input-field">
								<input id="login-nick" type="text" className="validate" ref="username"/>
								<label htmlFor="login-nick">Nick or Username</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field">
								<input id="login-password" type="password" className="validate" ref="password"/>
								<label htmlFor="login-password">Password</label>
							</div>
						</div>
						<div className="row">
							<div className="inline">
								<label className="col s4">Remember me</label>
								<div className="col pull-s1 s3">
									<div className="switch">
										<label>
										    <input type="checkbox" />
										   	<span className="lever"></span>
										</label>
									</div>
								</div>
								<button type="submit" className="col s4 waves-effect waves-light btn">SIGN IN</button>
							</div>
						</div>
						<div className="row">
							<div className="col offset-s6 s6">
								<a href="/recover">forgot your password?</a>
							</div>
						</div>
					</form>
					<div className="row">
						<button className="col s6 waves-effect waves-light btn" onClick={this.withFacebook.bind(this)}>
							Sign in with Facebook
						</button>
						<button className="col s6 waves-effect waves-light btn" onClick={this.withTwitter.bind(this)}>
							Sign in with Twitter
						</button>
					</div>
					<div className="col s12">
						<h6 className="center-align">Don't have an account yet? <a href="/register">Register</a></h6>
					</div>
				</div>
			</div>
		);
	}
}
