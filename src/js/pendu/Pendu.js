import PropTypes from 'prop-types'
import React, { Component } from 'react';
import InPlay from'./InPlay.js'
import InputWord from './InputWord.js'

import '../css/Pendu.css'

class Pendu extends Component{

    constructor(probs){
        super(probs);
    }

    initState = {
        inPlay : false,
        win : false,
        word : '',
    }

    state = initState ;

    // Arrow fx for binding
    // show win message for 7 secondes after that fonction will restart the game
    OnWin = () => {
        this.setState( {win : true} , ()=>{ setTimeout(7000, ()=> this.setState(this.initState) ) })
    }

    // Arrow fx for binding
    refreshWord = (newWord) => {
        state.word = newWord;
    }

    render() {
        const {inPlay,win,word} = this.state;
        return(
            <div className = "Pendu">
                {   win ? (
                    <img className = "WinImage" ref = "./public/win.jpg"/>
                    ):
                    (
                        inPlay ? (
                                <div className = "InPlay">
                                <InPlay word = {word} OnWin = {this.OnWin}/>
                                <button className = "ChangeModeButton Restart" onClick = {()=>
                                    this.setState({inPlay = false})}>Restart</button>
                            </div>
                        ):
                        (   <div className = "InputWord">
                                <InputWord OnChange = {this.refreshWord}/>
                                <button className = "ChangeModeButton Start" onClick = {()=>
                                this.setState({inPlay = true})}>Start</button>
                            </div>   
                        )
                    )
                }
            </div>
        )
    }
}


export default Pendu

