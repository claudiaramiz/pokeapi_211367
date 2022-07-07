import React from 'react';

export const Character = ({ data }) => {
    return (
        <div>
            {
                data.map((item, idx) =>
                    <p>{item.name}</p>
                )
            } </div>
    );
}

//export default Character;
