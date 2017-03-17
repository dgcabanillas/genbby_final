import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';

export default class Balance extends Component{
    componentDidMount(){
        const p = 2* Math.PI;
        const radius = [100,75,50];
        const colors = ["#f00","#0f0","00f"];

        var angles = [p*0.25,p*0.85,p*0.7]; //change to this.props."data"

        const canvas = d3.select("svg");
        canvas.append("circle")
            .attr({
                r:35,
                cx:100,
                cy:100,
                fill:"blue"
            });

        const group = canvas.append("g")
            .attr("transform","translate(100,100)");
            
        
        let arc;
        for(var i=0;i<radius.length;i++){
            arc = d3.svg.arc()
                .innerRadius(radius[i]-15)
                .outerRadius(radius[i])
                .startAngle(0)
                .endAngle(p);

            group.append("path")
                .attr("d",arc)
                .attr("fill","#999");
        }  

        //with user data
        for(var i=0;i<radius.length;i++){
            arc = d3.svg.arc()
                .innerRadius(radius[i]-15)
                .outerRadius(radius[i])
                .startAngle(0)
                .endAngle(angles[i]);

            group.append("path")
                .attr("d",arc)
                .attr("fill",colors[i]);
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
