import React, { useContext, useState, useEffect } from 'react';

import { Character } from './Character';
import { ApiContext } from './ApiProvider';

export const ListComponent = () => {
    const [items, setItems] = useState([]);
    const context = useContext(ApiContext);

    useEffect(() => {
        setItems(context.data);
    }, [context.data]);

    return (
        <>
            {context.status === 'initial' ? (
                <p>Loading...</p>
            ) : (
                <Character data={items} />
            )
            }
        </>
    )
}