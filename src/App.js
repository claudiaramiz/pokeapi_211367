/*import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation'
import Portada from './components/Portada'
import Pokemon from './components/PokemonSmall'

function App() {
  return (
    <div>
      
      <Router>
        <Navigation></Navigation>
        <div className="container p-4">
          <Route path="/" exact component={Portada}></Route>
          <Route path="/pokemon/:id" component={Pokemon}></Route>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
*/

//import logo from './logo.svg';
import './App.css';
//import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const [list, setList] = useState([]);
  //const pokemon_number = 10;
  //const init_pokemon = 1;
  //const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [countinit, setCountinit] = useState(1);
  const [countfinal, setCountfinal] = useState(10);

  // Read the pokemo information
  const fetchPokemons = async () => {
    const gottaFetchAll = [];

    for (let i = countinit; i <= countfinal; i++) {
      gottaFetchAll.push(await getPokemon(i))
    }
    setList(gottaFetchAll);
  }

  const getPokemon = async (id) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + id.toString();
    const res = await fetch(url)
    return (await res.json())
  }

  useEffect(() => {
    fetchPokemons()
  })

  //Create the structure for the cards
  const createPokemonCard = (pokemon) => {
    const { name, types, sprites, id } = pokemon
    const type = types[0].type.name

    return (
      <div className="card" key={id}>
        <div className="card-header">
          <h5 className="card-title">{id}</h5>
        </div>
        <div className="card-body">
          <img src={sprites.front_default} alt="pokemon" ></img>
        </div>
        <div className="card-footer">
          <p className="card-text-name text-capitalize" style={{ textTransform: 'capitalize' }}>{name}</p>
          <p className="card-text text-capitalize" style={{ textTransform: 'capitalize' }}>{type}</p>
        </div>
      </div>
    )
  }

  function onSubmmitNext() {
    setCountinit(countinit + 10);
    setCountfinal(countfinal + 10);
    fetchPokemons();
  }

  const onSubmmitAnt = () => {
    setCountinit(countinit - 10);
    setCountfinal(countfinal - 10);
    fetchPokemons();
  }

  return (

    <div className="App">
      <div>

      </div>
      <header className="App-header">
        <h1>Pokémon</h1>
        <div id="cards" className="cards">
          {
            list.map(pokemon => createPokemonCard(pokemon)
            )}
        </div>
        <div><br></br></div>
        <div className='container m-auto'>
          <button onClick={onSubmmitAnt} className='m-2 btn btn-dark'>Anterior</button>
          <button onClick={onSubmmitNext} className='m-2 btn btn-dark'>Siguiente</button>
        </div>
        <div><br></br></div>
      </header>
    </div>


  );
}

export default App;