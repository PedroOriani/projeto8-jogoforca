import { useState } from "react";

export default function Letras(props){
    const {buttonDisabled, classButton} = props;
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    return(
        <div className="alfabet">
        {alfabeto.map((alf, index) => (
            <button 
            disabled={buttonDisabled} 
            onClick={() => alert(index)} 
            className={`letter ${classButton}`}
            key={index}>
            {alfabeto[index].toUpperCase()}
        </button>
        ))
        }
        </div>
    );

}

function alert(i){
    alert(`button ${i}`)
}