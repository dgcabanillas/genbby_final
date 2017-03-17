import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import HeaderDota from '../components/profileDota/HeaderDota.jsx';
import CardProfileData from '../components/profileDota/CardProfileData.jsx';
import CardProfileUser from '../components/profileDota/CardProfileUser.jsx';
import CardProfileHeroes from '../components/profileDota/CardProfileHeroes.jsx';

export default class DotaProfileLayout extends TrackerReact(Component){
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
	render() {
        let user = Meteor.user()? Meteor.user():false;
        let name = user.userProfile?user.userProfile : false;
        let game = user.gamerProfile?user.gamerProfile : false;
            let dota2 = game.dota2Profile?game.dota2Profile : false;
            let mmr = dota2.MMR?dota2.MMR : false;
        return (
            <div>
                <HeaderDota />
                <div className="row">
                    <div className="col s12">
                        <CardProfileUser data = {name} mmr = {mmr}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <CardProfileData data = {dota2}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <CardProfileHeroes />
                    </div>
                </div>
            </div>
        );
    }
}