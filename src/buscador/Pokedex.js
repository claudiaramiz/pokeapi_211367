import React from 'react'
import PokedexScreen from './PokedexScreen'
import PokemonForm from './PokemonForm'

function Pokedex() {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [pokemon, setPokemon] = useState(null)
    const RandomId = Math.floor(Math.random() * 806 + 1)
    const [pokemonID, setPokemonId] = useState(RandomId)
    // Inicamos con ID random para siempre tener un pokemón

    // Solamente esta cargando mientras hacemos la petición,
    // cuando esta se resuelve o fue un éxito u un error.
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
            .then(res => res.json())
            .then(data => {
                // Si todo esta cool, actualizamos el pokemón
                // Y le indicamos que no hay error
                setPokemon(data)
                setLoading(false)
                setError(false)
            })
            .catch(err => {
                setLoading(false)
                setError(true)
            })
    }, [])
    // Pokedex.js

    return (
        <div className="pokedex">
            <div className="pokedex-left">
                <div className="pokedex-left-top">
                    <div className='light is-sky is-big' />
                    <div className="light is-red" />
                    <div className="light is-yellow" />
                    <div className="light is-green" />
                </div>
                <div className="pokedex-screen-container">
                    <PokedexScreen />
                </div>
                <div className="pokedex-left-bottom">
                    <div className="pokedex-left-bottom-lights">
                        <div className="light is-blue is-medium" />
                        <div className="light is-green is-large" />
                        <div className="light is-orange is-large" />
                    </div>
                    <PokemonForm />
                </div>
            </div>
            <div className="pokedex-right-front" />
            <div className="pokedex-right-back" />
        </div>
    )
}

export default Pokedex