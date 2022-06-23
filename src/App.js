//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
const pokemon_number = 10;


function App() {

  const [list, setList] = useState([]);
  //const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  // Read the pokemo information
  const fetchPokemons = async () => {
    const gottaFetchAll = [];

    for (let i = 1; i <= pokemon_number; i++) {
      gottaFetchAll.push(await getPokemon(i))
    }
    await setList(gottaFetchAll);
  }

  const getPokemon = async (id) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + id.toString();
    const res = await fetch(url)
    return (await res.json())
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

//Create the structure for the cards
  const createPokemonCard = (pokemon) => {
    const { name, types, sprites, id } = pokemon
    //const type = types[0].type.name

    return (
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">{id}</h5>
        </div>
        <div className="card-body">
          <img src={sprites.front_default} alt="pokemon" width={'50%'} ></img>
        </div>
        <div className="card-footer">
          <p className="card-text text-capitalize">{name}</p>
        </div>
      </div>
    )
  }

  function onSubmmitNext() {
    const num = pokemon_number + 10;
    pokemon_number = num;
    setList(num);
  }

  const onSubmmitAnt = () => {
    const num = pokemon_number - 10;
    pokemon_number = num;
    setList(num);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokémon</h1>
        <div id="cards" className="cards">
          {
            list.map(pokemon => createPokemonCard(pokemon)
            )}
        </div>
        <div><br></br></div>
        <div className='container m-auto'>
          <button onClick={() => onSubmmitAnt} className='m-2 btn btn-dark'>Anterior</button>
          <button onClick={onSubmmitNext} className='m-2 btn btn-dark'>Siguiente</button>
        </div>
        <div><br></br></div>
      </header>
    </div>
  );
}

export default App;
