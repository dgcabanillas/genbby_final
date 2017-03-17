import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';

export default class Carreer extends Component{
    componentDidMount(){
        const rating = [143,25,10]; //change to this.props. 
        const colors = ["red","blue","black"];
        const total = rating[0]+rating[1]+rating[2];

        const svg = d3.select("svg");
        let x1 = 0;
        let x2 = 0;
        for(var i=0;i<3;i++){
            x2 += rating[i];
            svg.append("line")
            .attr({
                x1:x1*200/total,
                y1:180,
                x2:x2*200/total,
                y2:180
            })
            .attr("stroke",colors[i])
            .attr("stroke-width","10");

            x1+=rating[i];
        } 
    }
    render(){
        return (   
            <div className="card-content grey lighten-1 center-align">
                <svg width="200" height="200">

                </svg>
            </div>
        )
    }
}
