import PropTypes from 'prop-types'
import React, { Component } from 'react';
import InPlay from'./InPlay.js'
import InputWord from './InputWord.js'

import '../../css/Pendu.css'

class Pendu extends Component{

    constructor(probs){
        super(probs);
        this.state = {...this.initState} ;
    }

    initState = {
        inPlay : false,
        win : false,
        word : '',
    }

    

    // Arrow fx for binding
    // show win message for 7 secondes after that fonction will restart the game
    OnWin = () => {
        this.setState( {win : true} , ()=>{ 
            setTimeout(()=> this.setState({...this.initState}) ,5000);
        })
    }

    // Arrow fx for binding
    refreshWord = (newWord) => {
        newWord = newWord.replace(/[^\s\w]|\d/gi, '')
        var {word} = this.state
        if(newWord === ''){this.state.word = newWord;}
        else{
            console.log("before slice"+this.state.word)
            this.state.word = word + newWord.slice(word.length)
            
        }   
        console.log("after refresh "+this.state.word)
    }

    render() {
        const {inPlay,win,word} = this.state;

        return(
            <div className = "Pendu">
                {   win ? (
                    <img alt="win" height="420" width="420" src = "https://i.imgflip.com/k98rh.jpg"/>
                    ):
                    (
                        inPlay ? (
                                <div className = "InPlay">
                                <InPlay word = {word} OnWin = {this.OnWin}/>
                                <button className = "ChangeModeButton Restart" onClick = {()=>
                                    this.setState(this.initState)}>Restart</button>
                            </div>
                        ):
                        (   <div className = "InputWord">
                                <InputWord OnChange = {this.refreshWord}/>
                                <button className = "ChangeModeButton Start" onClick = {()=>
                                this.setState({inPlay : true})}>Start</button>
                            </div>   
                        )
                    )
                }
            </div>
        )
    }
}


export default Pendu

