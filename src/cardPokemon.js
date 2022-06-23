import React from "React";
import { UseFetch } from "./useFetch";

export const cardPokemon=({url})=>{

    const estado = UseFetch(url);
    const{cargando , data}=estado;

    return(
        <div>
            {
            cargando
            ?
            <h2>Cargando</h2>
            :
            <div className="card" style={'width: 12rem'}>
                 <div className="card-header">
                 <h5 className="card-title">{data.id}</h5>
                 </div>
                 <div className="card-body">
                 <img src={data.sprites.front_default} alt='pokemon'></img>
                 </div>
                 <div className="card-footer">
                 <p className="card-text text-capitalize">{data.forms[0].name}</p>
                </div>
            </div>
        }
        </div>
    )
}