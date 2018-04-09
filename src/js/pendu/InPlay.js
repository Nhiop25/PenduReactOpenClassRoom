import PropTypes from 'prop-types'
import React, { Component } from 'react';

import '../GuessCount.css'

class InPlay extends Component{
    initStat = {
        Cliked : [],
        found : [],
        notCliked : [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z],
    }

    constructor(probs){
        super(probs);
        this.stat = initStat
        this.word = probs.word
        this.OnWin = probs.OnWin
    }

    render(){
        return(
            <table className="word">
                <tbody>
                    <tr>
                        {this.word.split('').map((letter,index)=>{
                            <td className="letterCache" key = {index} >{found.includes(letter) ? ' {letter}':'_ '}</td>
                        })}
                    </tr>
                    
                </tbody>
            </table>
        )
    }
}

export default InPlay