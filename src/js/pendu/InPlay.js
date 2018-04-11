import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Guess from Guess.js
import '../../css/InPlay.css'

class InPlay extends Component{
    initState = {
        found : [],
        notCliked : ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    }
   
    constructor(probs){
        super(probs);
        this.state = this.initState
        this.word = probs.word
        console.log(this.word+"coucou")
        this.OnWin = probs.OnWin
    }
    
    //divide an array into an array of array 
    toMatrice = (array,nbByLigne) => {
        var result = []
        const rest = array.length % nbByLigne
        const startingIndex = array.length-rest
        for(var i = 0 ; i+nbByLigne<=array.length; i += nbByLigne){
            result.push(array.slice(i,i+nbByLigne))
        }
        result.push(array.slice(startingIndex,startingIndex+rest))
        return result
    }

    LetterCache = ({found}) => (
        <table className="word">
            <tbody>
                <tr>
                    {this.word.split('').map((letter,index)=>(
                        <td className="letterCache" key = {index}>{found.includes(letter)|letter === ' ' ? ' '+letter+'  ' : ' _ '}</td>
                    ))}
                </tr>
            </tbody>
        </table>
    )

    letterAvailable = ({notCliked,onClick}) => (
        <table className="availableLetter">
            <tbody>
                {this.toMatrice(notCliked,10).map((colone,index)=> (
                    <tr key = {index}>
                        {colone.map((letter,i)=>(
                            <td className="letterAvailable" key = {i} onClick = {()=> this.onClick(index*10+i)} > {letter} </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )

    distinctCount(word){
        var temp = []
        var result = 0
        for(var i = 0;i<word.length;i++){
            if(!temp.includes(word[i])){
                result++
                temp.push(word[i])
            }
        }
        return result
    }

    onClick = (index) => {
        
        const {found,notCliked} = this.state
        const cliked = notCliked[index]
        const newNotCliked = notCliked.slice(0,index).concat(notCliked.slice(index+1,notCliked.length))
        if(this.word.split('').includes(cliked)){
            found.push(cliked)
            this.setState({found:found,notCliked : notCliked })
        }
        this.setState({found:found,notCliked : newNotCliked })
        console.log(this.distinctCount(this.word))
        //check if the word have been completing
        if(this.distinctCount(this.word)===found.length){
            this.OnWin()
        }

    }

    render(){
        const {found,notCliked} = this.state
        return(
            
            <div className = "inPlay">
                <this.LetterCache found = {found}/>
                <this.letterAvailable notCliked = {notCliked} onClick = {this.onClick}/>
            </div>
        )
    }
}

export default InPlay