import React from 'react';

export default function Letras(props){
    const {buttonDisabled, classButton, errors, setErrors, clicked, setClicked, setClassButton} = props;
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    function disableClicked(i){
        setClicked([...clicked, i]);
        verifyLetter();
    }

    function verifyLetter() {
        setErrors(errors + 1);
        verifyGame();
    }

    function verifyGame(){

    }
   
    return(
        <div className="alfabet">
            {alfabeto.map((letter, index) => (
                <button
                    disabled={buttonDisabled}
                    onClick={() => disableClicked(index)}
                    className={`letter ${classButton} ${clicked.includes(index) ? 'disabled' : 'able'}`}
                    data-test="letter"
                    key={index}>
                    {letter}
                </button>
            ))
            }
        </div>
    );

    console.log(errors)
}