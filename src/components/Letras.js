import React from 'react';

export default function Letras(props){
    const {underline, setUnderline, buttonDisabled, setButtonDisabled, classButton, errors, setErrors, clicked, setClicked, disabled, setDisabled, word} = props;
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let newArr =[...underline];
    let acertos = 0

    console.log(word)

    function disableClicked(i){
        setClicked([...clicked, i]);
        setDisabled([...disabled, i])
        verifyLetter(i);
    }

    function verifyLetter(i) {
        for (let j = 0; j < word.length; j++){
            if(word[j] === alfabeto[i]){
                newArr[j] = alfabeto[i]
            }else{
                setErrors(errors + 1);
            }
        }
        setUnderline(newArr);        
        verifyGame();
    }

    function verifyGame(){
        if(acertos < word.length && errors === 5){
            console.log("você perdeu");
        }else{

        }
    }
   
    return(
        <div className="alfabet">
            {alfabeto.map((letter, index) => (
                <button
                    disabled={`${buttonDisabled} ${disabled.includes(index) ? true : false}`}
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