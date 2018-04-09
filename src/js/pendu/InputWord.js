import PropTypes from 'prop-types'
import React, { Component } from 'react';

import '../css/InputWord.css'

class InputWord extends Component{
    
    constructor(probs){
        super(probs);
        this.state = { value : ''}
        this.refresh = probs.refresh
    }
 
    masque = function(value){
        return value
        .replace(/\S|\W/, '')
        .replace(/\S/,'_')
    }

    onChange = function({ target: { value } }){
        this.setState({value : masque(value)})
        refresh(value.toUpperCase())
    }

    render(){
        const {value} = this.state
        return(
        <div className = "input">
            <input
            autoComplete= "put a word" 
            onChange = {this.onChange}
            values = {value}
            type="text"/>
         </div>
        )
    }
}




export default InputWord