import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';

export default class CardProfileHeroes extends Component{
    
    render(){
        return (   
            <div className="card">
                <div className="card-content white">
                    <p className="topHeroes">Top 5 heroes</p>
                </div>
                <div className="card-content">
                    <div className="galeria center-align">
                        <div className="short">
                            <div className="container">
                                <img src="/heroes/es.png" alt="" />
                            </div>
                        </div>  
                        <div className="median">
                            <div className="container">
                                <img src="/heroes/pa.png" alt="" />
                            </div>
                        </div>  
                        <div className="big heroes">
                            <div className="container">
                                <img src="/heroes/vs.png" alt="" />
                            </div>
                        </div>  
                        <div className="median heroes">
                            <div className="container">
                                <img src="/heroes/wr.png" alt="" />
                            </div>
                        </div>  
                        <div className="short heroes">
                            <div className="container">
                                <img src="/heroes/ax.png" alt="" />
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="card-content white">
                    <p className="topHeroes">Role:</p>
                    <div className="row">
                        <select className="role browser-default blue-grey lighten-3 col s6 m5 l3 offset-l2 center-align">
                            <option value="dota" data-icon="barto.jpeg" className="left circle">Dota 2</option>
                            <option value="lol" data-icon="barto.jpeg" className="left circle">LOL</option>
                        </select>
                        <select className="role browser-default blue-grey lighten-3 col s6 m5 offset-m2 l3 offset-l2 center-align">
                            <option value="dota" data-icon="barto.jpeg" className="left circle">Dota 2</option>
                            <option value="lol" data-icon="barto.jpeg" className="left circle">LOL</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}
