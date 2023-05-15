import React from 'react';

export default function Letras(props){
    const {setGameOver, underline, setUnderline, classButton, errors, setErrors, clicked, setClicked, word, setClassUnderline, contandoPalavras} = props;
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let contErrors;
    let newArr =[...underline];

    function disableClicked(i){
        setClicked([...clicked, i]);
        verifyLetter(i);
    }

    function verifyLetter(i) {
        for (let j = 0; j < word.length; j++){
            if(word[j] === alfabeto[i]){
                newArr[j] = alfabeto[i]
            }else if (!word.includes(alfabeto[i])){
                contErrors = errors + 1
                setErrors(contErrors)
            }
        }
        setUnderline(newArr);        
        verifyGame();
    }

    function verifyGame(){
        if(!newArr.includes('_ ')){
            setClassUnderline('word green');
            setClicked(contandoPalavras)
            setGameOver(1)
        }else if(contErrors === 6){
            setUnderline(word)
            setClassUnderline('word red');
            setClicked(contandoPalavras)
            setGameOver(1)
        }
    }
   
    return(
        <div className="alfabet">
            {alfabeto.map((letter, index) => (
                <button
                    disabled={clicked.includes(index) ? true : false}
                    onClick={() => disableClicked(index)}
                    className={`letter ${classButton} ${clicked.includes(index) ? 'disabled' : 'able'}`}
                    data-test="letter"
                    key={index}>
                    {letter.toUpperCase()}
                </button>
            ))
            }
        </div>
    );

    console.log(errors)
}