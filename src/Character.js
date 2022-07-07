import React from 'react';

const Character = ({ data }) => {
    return (
        <div>
            {
                data.map((items) => {
                    const { name, types, sprites, id } = items;
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
                }
                )
            } </div>
    );
}

export default Character;
