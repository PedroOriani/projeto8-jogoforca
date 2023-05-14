export default function Letras(){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let counter = 0;
    return(
        <div className="alfabet">
        {alfabeto.map((alf, indice) => (
            <button disabled={counter === 0 ? false : true} onClick={alert} className="letter letterDisabled" key={indice}>
            {alfabeto[indice].toUpperCase()}
        </button>
        ))
        }
        </div>
    );

}

function alert(){
    let alert = alert('chora');
    return alert
}