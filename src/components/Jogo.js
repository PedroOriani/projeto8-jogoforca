import React from 'react';
import palavras from '../palavras';
  
export default function Jogo(props){
    const {underlineWord, setUnderline, setUnderlineWord, palavraArray, setPalavraArray, setWord, gameOver, word, underline, classUnderline, setClassUnderline, image, setButtonDisabled, setClassButton, setClicked, random, setRandom, setErrors,} = props

    let palavraDireto;
    let wordDireto;
    let palavraArrayDireto;
    let underlineWordDireto;
    
    function randomize() {
        return Math.random() - 0.5;
      }

    function chooseWord(){
        setButtonDisabled(false);
        setClicked([]);
        setClassButton('able');
        setClassUnderline('word');
        setErrors(0)
        setRandom(random + 1);

        palavraDireto = palavras.sort(randomize);
        setWord(palavraDireto[0])
        wordDireto = (palavraDireto[0])
        setPalavraArray(wordDireto.split(''))
        palavraArrayDireto = (wordDireto.split(''))
        setUnderlineWord(palavraArrayDireto.map(() => '_ '));
        underlineWordDireto = (palavraArrayDireto.map(() => '_ '))
        setUnderline(underlineWordDireto);

        console.log(word);
            // if(gameOver === 1){
                
            // }
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