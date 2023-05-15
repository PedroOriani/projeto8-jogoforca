import { useState } from "react";
  
export default function Jogo(props){
    const {underline,setUnderline, classUnderline, setClassUnderline, word, errors, setErrors, image, setButtonDisabled, setClassButton} = props

    function chooseWord(){
        setButtonDisabled(false);
        setClassButton('letter');
        setClassUnderline('word');
    }

    return(
        <div className='game'>
            <img className="gallows" src={image} data-teste='game-image'/>
            <button 
            onClick={chooseWord}
            className='chooseWord'
            data-teste='choose-word'>
            Escolher Palavra
            </button>
            <p className={classUnderline} data-test="word">{underline}</p>
        </div>
    );
}