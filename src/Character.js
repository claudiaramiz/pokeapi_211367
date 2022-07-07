import React from 'react';

const Character = ({ data }) => {
    return (
        <div>
            {
                data.map((item, idx) =>
                    <p>{item.name}</p>
                )
            } </div>
    );
}

export default Character;
