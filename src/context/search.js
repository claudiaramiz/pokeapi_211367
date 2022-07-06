import React, { useState } from 'React'
import { searchPokemon } from './api';

export const SearchPokemon = () => {

    const [search, setSearch] = useState('');

    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const onClick = (e) => {
        const data = searchPokemon(search);
        console.log(data);
    }

    return (
        <div>
            <div><input placeholder='Buscar pokemon' onChange={onChange} /></div>

            <div><button onClick={onClick}>Buscar</button></div>
        </div>

    )
}