import React, { useState } from 'react'

function PokemonForm() {
    const [pokemon, setPokemon] = useState('')

    const handleSubmit = event => {
        event.preventDefault()

    }

    return (
        <form className="pokemon-form" onSubmit={handleSubmit}>
            <input
                className="pokemon-input"
                type="text"
                name="pokemon"
                value={pokemon}
                placeholder="Busca tu pokemon"
                //Actualizas el valor del input cuando el usuario teclea
                onChange={e => setPokemon(e.target.value)}
                autoComplete="off" />
            <input type="submit" className="pokemon-btn" value="" />
        </form>
    )
}

export default PokemonForm