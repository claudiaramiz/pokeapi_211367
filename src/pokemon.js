import React , {useState} from 'React'
import { UseFetch } from './useFetch';
//import { cards } from './cards'; 
import './pokemon.css'

export const Pokemon = () => {
const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
const estado = UseFetch(url);
const{cargando , data}=estado;
cargando? console.log('cargando'):console.log(data.results);

return(
    <div>
        <h1>Pokémon</h1>
        cargando
        ?
        <h1>Cargando...</h1>
        :
        <div>
        <cards results={data.results}></cards>
        <div className='container m-auto'>
        <button onClick={()=> setUrl(data.previous)} className='m-2 btn btn-dark'>Anterior</button>
        <button onClick={()=> setUrl(data.next)} className='m-2 btn btn-dark'>Siguiente</button>
        </div>
        </div>
    </div>
)
}