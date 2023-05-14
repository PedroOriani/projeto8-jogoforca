import forca0 from './assets/forca0.png'
import forca1 from './assets/forca1.png'
import forca2 from './assets/forca2.png'
import forca3 from './assets/forca3.png'
import froca4 from './assets/forca4.png'
import froca5 from './assets/forca5.png'
import forca6 from './assets/forca6.png'

function chooseWord(){
    alert('Isabel é tonta')
}
    
export default function Jogo(){
    return(
        <div className='game'>
            <img className="gallows" src={forca0} />
            <button onClick={chooseWord}className='chooseWord'>Escolher Palavra</button>
        </div>
    );
}