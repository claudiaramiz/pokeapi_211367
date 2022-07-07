import React, { useState } from "react";

const Form = ({ handleSubmit }) => {

    const [searchTerm, setTerm] = useState('');

    const updateSearchTerm = e => {
        setTerm(e.target.value);
    }

    return (
        <form onSubmit={e => handleSubmit(e, searchTerm)}>
            <input type="text" name="search"
                placeholder="Buscar pokémon"
                onChange={updateSearchTerm}></input>
            <button type="submit" disabled={!searchTerm.trim()}>
                Buscar
            </button>
        </form>
    );
}

export default Form;