import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export default class ChangePasswordComponent extends Component{
	onChange(e) {
		e.preventDefault();
		const oldPassword = ReactDOM.findDOMNode(this.refs.password).value.trim();
		const newPassword = ReactDOM.findDOMNode(this.refs.newpassword).value.trim();
		const newPasswordConfirm = ReactDOM.findDOMNode(this.refs.newpasswordconfirm).value.trim();
		if(newPassword==newPasswordConfirm)	{
			Accounts.changePassword( oldPassword , newPassword, (error)=>{
				if(error)
					Materialize.toast(er.reason, 4000);
				else
					FlowRouter.go('/home');
			});
		}
	}
	render(){
		return(
			<div className="row">
				<div className="col s12 m6 offset-m3 l4 offset-l4">
					<h3 className="center-align">Change Password</h3>
					<form onSubmit={this.onChange.bind(this)} className="col s12">
						<div className="input-field">
							<input type="password" id="changePassword" ref="password"/>
							<label htmlFor="changePassword">Type Current Pasword</label>
						</div>
						<div className="input-field">
							<input type="password" id="changeNewPassword" ref="newpassword"/>
							<label htmlFor="changeNewPassword">Type New Password</label>
						</div>
						<div className="input-field">
							<input type="password" id="changeNewPasswordConfirm" ref="newpasswordconfirm"/>
							<label htmlFor="changeNewPassword">Confirm New Password</label>
						</div>
						<div className="col s10 offset-s1">
							<button type="submit" className="col s12 waves-effect waves-light btn">change</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
