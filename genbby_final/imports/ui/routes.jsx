import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from './layouts/MainLayout.jsx';
import DotaProfileLayout from './layouts/DotaProfileLayout.jsx';
import HomeLayout from './layouts/HomeLayout.jsx';

import LoginComponent from './components/forms/LoginComponent.jsx';
import RegisterComponent from './components/forms/RegisterComponent.jsx';
import RecoverPasswordComponent from './components/forms/RecoverPasswordComponent.jsx';
import ChangePasswordComponent from './components/forms/ChangePasswordComponent.jsx';
import ResetPasswordComponent from './components/forms/ResetPasswordComponent.jsx';

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<LoginComponent />)
		});
	}
});

FlowRouter.route('/register', {
	action() {
		mount(MainLayout, {
			content: (<RegisterComponent />)
		});
	}
});

FlowRouter.route('/home', {
	action() {
		mount(MainLayout, {
			content: (<HomeLayout />)
		});
	}
});

FlowRouter.route('/recover', {
	action() {
		mount(MainLayout, {
			content: (<RecoverPasswordComponent />)
		});
	}
});

FlowRouter.route('/change',{
	action(){
		mount(MainLayout,{
			content: (<ChangePasswordComponent />)
		});
	}
});

FlowRouter.route('/reset-password/:token',{
	action(params){
		mount(MainLayout,{
			content: (<ResetPasswordComponent token={params.token}/>)
		});
	}
});

FlowRouter.route('/home/choose/dota', {
	action() {
		mount(MainLayout, {
			content: (<DotaProfileLayout />)
		});
	}
});