import { useState } from "react";

function chooseWord(){
    alert('Isabel é tonta')
}
    
export default function Jogo(props){
    const {underline, word, errors, image} = props

    return(
        <div className='game'>
            <img className="gallows" src={image} data-teste='game-image'/>
            <button 
            onClick={chooseWord}
            className='chooseWord'
            data-teste='choose-word'>
            Escolher Palavra
            </button>
            <p className="word none">{underline}</p>
        </div>
    );
}