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
  const [clicked, setClicked] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188])
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
          word={word}
        />
      </div>
    </div>
  );
}

export default App;