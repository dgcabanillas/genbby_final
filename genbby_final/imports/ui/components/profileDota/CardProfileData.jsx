import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { c , s , rad } from './helpers/functions.js';
import { render } from 'react-dom';

import Score from './contents/Score.jsx';
import Balance from './contents/Balance.jsx';
import Carreer from './contents/Carreer.jsx';

export default class CardProfileData extends Component{
    constructor(props){
        super(props);
        this.state = {
            content: <Balance data = {this.props.data}/>
        }
    }

    drawBalance(event){
        event.preventDefault();
        this.setState({
            content: <Balance data = {this.props.data}/>
        });
    }
    drawScore(event){
        event.preventDefault();
        this.setState({
            content: <Score data = {this.props.data}/>
        });
    }
    drawCarreer(event){
        event.preventDefault();
        this.setState({
            content: <Carreer data = {this.props.data}/>
        });
    }

    render(){
        return (   
            <div className="card">
                <div className="card-tabs">
                    <ul className="tabs tabs-fixed-width cardProfileData">
                        <li className="tab grey lighten-1 "><a className="cpdTab" href="" onClick={this.drawBalance.bind(this)}>Balance</a></li>
                        <li className="tab grey lighten-1 "><a className="cpdTab" href="" onClick={this.drawScore.bind(this)}>Score</a></li>
                        <li className="tab grey lighten-1 "><a className="cpdTab" href="" onClick={this.drawCarreer.bind(this)}>Carreer</a></li>
                    </ul>
                </div>
                <div className="card-content grey lighten-1 center-align">
                    <div id="gg">
                        {this.state.content}
                    </div>
                </div>
            </div>
        )
    }
}
