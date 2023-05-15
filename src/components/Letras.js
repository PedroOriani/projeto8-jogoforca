import { useState } from "react";

export default function Letras(props){
    const {buttonDisabled, classButton, errors, setErrors} = props;
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    function verifyLetter() {
        setErrors(errors + 1);
    }
   
    return(
        <div className="alfabet">
            {alfabeto.map((letter, index) => (
                <button
                    disabled={buttonDisabled}
                    onClick={verifyLetter}
                    className={classButton}
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