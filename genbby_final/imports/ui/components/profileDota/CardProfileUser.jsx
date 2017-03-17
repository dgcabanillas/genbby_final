import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class CardProfileData extends TrackerReact(Component){
    constructor(props){
        super(props);
        this.state = {
            game:0
        };
    }
    render(){
        return (   
            <div className="card userProfile">
                <div className="row blue-grey darken-1">
                    <div className="card-content col s12 m8 offset-m2 l10 offset-l1">
                        <div className="row">
                            <p className="center-align col s12 m4 l2 offset-l3 profile">My Profile</p>
                        </div>
                        <div className="row">
                            <div className="col s8 offset-s2 m4 l2 offset-l3">
                                <div className="profileImage">
                                    <img src="/profileImage/barto.jpeg" alt=""/>
                                </div>
                                <select className="game browser-default blue-grey lighten-3 center-align">
                                  <option value="dota">Dota 2</option>
                                  <option value="lol">LOL</option>
                                </select>
                            </div>
                            <div className="col s12 m8 l4">
                                <p className="center-align tagUser">Jhon Salchichon</p>
                                <p className="center-align nameUser">
                                    <span className="badgeUser">Per</span>
                                    {this.props.data.first_name+" "+this.props.data.last_name}
                                </p>
                                <br/>
                                <div className="row">
                                    <div className="col s4 center align">
                                        <i className="large material-icons center-align">contacts</i>
                                        <p className="dataUser">Carry</p>
                                    </div>
                                    <div className="col s4 center align">
                                        <i className="large material-icons">person_pin</i>
                                        <p className="dataUser">{this.props.mmr.solo}</p>
                                    </div>
                                    <div className="col s4 center align">
                                        <i className="large material-icons">supervisor_account</i>
                                        <p className="dataUser">{this.props.mmr.party}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
