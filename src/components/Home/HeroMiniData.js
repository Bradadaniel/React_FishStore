import "./HeroMiniData.css";
import React, { Component } from 'react';


class HeroMiniData extends Component{
    render(){
        return(
            <div className='slide-content'>
            <img src={this.props.img} alt='img' className='bl-img'/>
            <div className='caption'>
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
                <a href="/">Vásárolj most!</a>
            </div>
        </div>
        )
    }
}

export default HeroMiniData;