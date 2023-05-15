import { useState } from "react";
import React from 'react';
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from '../palavras'
import forca0 from '../assets/forca0.png'
import forca1 from '../assets/forca1.png'
import forca2 from '../assets/forca2.png'
import forca3 from '../assets/forca3.png'
import forca4 from '../assets/forca4.png'
import forca5 from '../assets/forca5.png'
import forca6 from '../assets/forca6.png'

function App() {
  console.log(palavras.length)

  const images = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

  function randomize() {
    return Math.random() - 0.5;
  }

  palavras.sort(randomize);

  const palavraArray = palavras[0].split('');
  const underlineWord = palavraArray.map(() => '_ ');

  //Variáveis de Estado
  const [underline, setUnderline] = useState(underlineWord);
  const [classUnderline, setClassUnderline] = useState('none')
  const [word, setWord] = useState(palavras[0]);
  const [errors, setErrors] = useState(0);
  const [clicked, setClicked] = useState([])
  const [disabled, setDisabled] = useState([])
  const [random, setRandom] = useState(0);

  //buttons

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [classButton, setClassButton] = useState('disabled');

  return (
    <div className="app">
      <Jogo
        underline={underline}
        setUnderline={setUnderline}
        classUnderline={classUnderline}
        setClassUnderline={setClassUnderline}
        word={word}
        image={images[errors]}
        setButtonDisabled={setButtonDisabled}
        setClassButton={setClassButton}
        random={random}
        setRandom={setRandom}
        setClicked={setClicked}
        errors={errors}
        setErrors={setErrors}
      />
      <div className="Letras">
        <Letras
          underline={underline}
          setUnderline={setUnderline}
          buttonDisabled={buttonDisabled}
          setButtonDisabled={setButtonDisabled}
          classButton={classButton}
          errors={errors}
          setErrors={setErrors}
          clicked={clicked}
          setClicked={setClicked}
          disabled={disabled}
          setDisabled={setDisabled}
          word={word}
        />
      </div>
    </div>
  );
}

export default App;
