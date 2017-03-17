import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export default class RegistroComponent extends Component{

	addUser(event) {
		event.preventDefault();
		const tag = ReactDOM.findDOMNode(this.refs.tag).value;
		const fname = ReactDOM.findDOMNode(this.refs.fname).value;
		const lname = ReactDOM.findDOMNode(this.refs.lname).value;
		const birthdate = ReactDOM.findDOMNode(this.refs.birthdate).value;
		const email = ReactDOM.findDOMNode(this.refs.email).value;
		const password = ReactDOM.findDOMNode(this.refs.password).value;

		const male = ReactDOM.findDOMNode(this.refs.male).checked;
		const female = ReactDOM.findDOMNode(this.refs.female).checked;
		const gender = male?"male":(female?"female":"not specified");

		const accountInfo = {
			username: tag,
			password: password,
			email: email,
			first_name: fname,
			last_name: lname,
			birthdate: birthdate,
			gender: gender,
		};

		Accounts.createUser(accountInfo,function(er) {
			if(er) {
				Materialize.toast(er.reason, 4000);
			} else {
				//Redirect
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
				<div className="col offset-s1 s5">
					<p className="right-align">Why are waiting for?</p>
					<p className="right-align">Join us, right now!</p>
					<br />

					<p className="right-align">Membresias gratuitas siempre,</p>
					<p className="right-align">t&uacute; decides lo dem&aacute;s</p>
					<br />

					<p className="right-align">
						COMPITE en miles de torneos disponibles
					</p>
					<p className="right-align">
						PLANEA tu avance hacia la gloria
					</p>
					<p className="right-align">
						COOPERA coopera con la comunidad gamer local en un impacto positivo
					</p>
					<p className="right-align">
						<strong>Gracias</strong>, <a href="/login">ya tengo una cuenta</a>
					</p>
				</div>


				<div className="col s5">
					<div className="row">
							<button className="col s6 waves-effect waves-light btn" onClick={this.withFacebook.bind(this)}>Register with Facebook</button>
							<button className="col s6 waves-effect waves-light btn" onClick={this.withTwitter.bind(this)}>Register with Twitter</button>
					</div>
					<form onSubmit={this.addUser.bind(this)} className="col s12">
						<div className="row">
							<div className="input-field col s12">
								<input id="form-tag" type="text" className="validate" placeholder="Enter your gamer tag" ref="tag"/>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<input id="form-fname" type="text" className="validate" ref="fname"/>
								<label htmlFor="form-fname">First Name</label>
							</div>
							<div className="input-field col s6">
								<input id="form-lname" type="text" className="validate" ref="lname"/>
								<label htmlFor="form-lname">Last Name</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
  								<input id="form-birthdate" type="date" className="datepicker" ref="birthdate"/>
								<label htmlFor="form-birthdate">Birthdate</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<input id="form-email" type="email" className="validate" ref="email"/>
								<label htmlFor="form-email">Your Email</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<input id="form-password" type="password" className="validate" ref="password"/>
								<label htmlFor="form-password">Your Password</label>
							</div>
						</div>
						<div className="row">
							<label>Are you...</label>
							<div className="input-field col s12 inline">
								<div className="col s4">
									<input name="gender" type="radio" id="form-male" ref="male"/>
      								<label htmlFor="form-male">A boy</label>
								</div>
      							<div className="col s4">
									<input name="gender" type="radio" id="form-female" ref="female"/>
      								<label htmlFor="form-female">A Girl</label>
								</div>
								<div className="col s4">
									<input name="gender" type="radio" id="form-notspecified" ref="notspecified" />
      								<label htmlFor="form-notspecified">Not specified</label>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="input-field ">
								<input id="form-country" type="text" className="validate" ref="country"/>
								<label htmlFor="form-country">Country</label>
							</div>
						</div>
						<div className="row">
							<div className="col s12">
								<p className="center-align">It's almost over! Accepting our <a href="#">terms and conditions</a></p>
								<p className="center-align">gives you an automatic registration</p>
							</div>
						</div>
						<div className="row">
							<button className="waves-effect waves-light btn btn-block col offset-s1 s10" type="submit">AGREE</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
