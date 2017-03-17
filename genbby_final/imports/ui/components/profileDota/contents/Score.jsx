import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { s, c ,rad } from '../helpers/functions.js';

export default class Score extends Component{
    componentDidMount() {
        let data = this.props.data;
        const svg = d3.select("svg");

        let base = [1,1,1,1,1];
        let stdk = [data.fight_score,data.farm_score,data.support_score,data.push_score,data.versatility_score]; //change to this.props."data"
        
        let pentBase = [];
        for(i=0;i<5;i++){
            pentBase[i*2]   = 100+base[i]*100*s(i*72);
            pentBase[i*2+1] = 100-base[i]*100*c(i*72);
        }
        
        let pentStdk = [];
        for(i=0;i<5;i++){
            pentStdk[i*2]   = 100+stdk[i]*100*s(i*72);
            pentStdk[i*2+1] = 100-stdk[i]*100*c(i*72);
        }
        for(let i=0;i<10;i+=2){
            svg.append("line")
            .attr({
                x1:pentBase[i%10],
                y1:pentBase[(i+1)%10],
                x2:pentBase[(i+2)%10],
                y2:pentBase[(i+3)%10]
            })
            .attr("stroke","black")
            .attr("stroke-width","2");
            svg.append("line")
            .attr({
                x1:pentBase[i%10],
                y1:pentBase[(i+1)%10],
                x2:100,
                y2:100
            })
            .attr("stroke","black")
            .attr("stroke-width","2");
            svg.append("circle")
                .attr({
                    r: 5,
                    cx:pentStdk[i%10],
                    cy:pentStdk[(i+1)%10],
                    fill: "rgba(0.1,0.1,0.1,0.1)",
                    stroke: "black",
                    "stroke-width" : "1"
                });


        } 
        svg.append("polygon")
            .attr("points",[pentStdk])
            .attr("fill","rgba(127,145,124,.4)")
            .attr("stroke","white")
            .attr("stroke-width","1");
        
    }

    render(){
        return (   
            <div className="card-content grey lighten-1 center-align" >
                <svg width="200" height="200">
                      
                </svg>
            </div>
        )
    }
}
