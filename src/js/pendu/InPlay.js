import PropTypes from 'prop-types'
import React, { Component } from 'react';

import '../GuessCount.css'

class InPlay extends Component{
    initState = {
        found : [],
        notCliked : [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z],
    }

    constructor(probs){
        super(probs);
        this.state = initState
        this.word = probs.word
        this.OnWin = probs.OnWin
    }

    // distribute the rest of the Euclidean division
    

    //divide an array into an array of array 
    toMatrice = (array,nbByLigne) => {
        var result = []
        const rest = array.length % nbByLigne
        const startingIndex = (array.lenght/nbByLigne)*nbByLigne-1
        for(var i = 0 ; i<array.length+nbByLigne; i += nbByLigne){
            result.push(array.slice(i,i+nbByLigne))
        }
        result.push(array.slice(startingIndex,startingIndex+rest))
        return result
    }

    LetterCache = ({found}) => (
        <table className="word">
            <tbody>
                <tr>
                    {this.word.split('').map((letter,index)=>{
                        <td className="letterCache" key = {index}>{found.includes(letter) ? ' {letter}':'_ '}</td>
                    })}
                </tr>
            </tbody>
        </table>
    )

    letterAvailable = ({notCliked,onClick}) => (
        <table className="availableLetter">
            <tbody>
                {this.toMatrice(notCliked,3).map((colone,index)=> {
                    <tr key = {index}>
                        {colone.map((letter,i)=>{
                            <td className="letterAvailable" key = {i} onClick = {this.onClick((index+1)*i)} > {letter} </td>
                        })}
                    </tr>
                })}
            </tbody>
        </table>
    )
    distinctCount(word){
        var temp = []
        var result = 0
        for(var i = 0;i<word.length;i++){
            if(!temp.includes(word[i])){
                result++
            }
        }
        return result
    }

    onClick = (index) => {
        
        const {found,notCliked} = this.state
        const cliked = notCliked[index-1]

        if(this.word.includes(cliked)){
            found.push(cliked)
            this.setState({found:found})
        }

        notCliked = notCliked.slice(0,index-1).concat(notCliked.slice(index),notCliked.length)
        this.setState({notCliked : notCliked})

        if(distinctCount(this.word)===found.length){
            this.OnWin()
        }

    }

    render(){
        const {found,cliked,notCliked} = state
        return(
            <div className = "inPlay">
                <this.LetterCache found = {found}/>
                <this.letterAvailable notCliked = {notCliked} onClick = {this.onClick}/>
            </div>
        )
    }
}

export default InPlay