import React, { useEffect, useState } from "react";

export const ApiContext = React.createContext();

export const ApiProvider = ({ children }) => {
    const [status, setStatus] = useState('initial');
    const [data, setData] = useState([]);

    const query = async (term) => {
        try {
            const queryResult = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${term}`
            )
                .then(res => res.json());
            setStatus('done');
            setData(queryResult.results);
        }
        catch (error) {
            setStatus("Error");
        }
    }

    useEffect(() => {
        query();
    })

    const handleSubmit = ({ e, searchTerm }) => {
        console.log(searchTerm);
        e.preventDefault();
        e.target.reset();
    }

    return (
        <ApiContext.Provider value={{ status, data, handleSubmit }}>
            {children}
        </ApiContext.Provider>
    )


}