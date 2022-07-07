import React, { useContext, useState } from "react";
import { ApiContext } from "./ApiProvider";

const Form = () => {

    const [searchTerm, setTerm] = useState('');
    const context = useContext(ApiContext);

    const updateSearchTerm = e => {
        setTerm(e.target.value);
    }

    return (
        <form onSubmit={e => context.handleSubmit(e, searchTerm)}>
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