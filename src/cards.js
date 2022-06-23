import React from "React";
import { cardPokemon } from "./cardPokemon";

export const cards = ({results})=> {
    return(
        <div className="container">
            <ul className="cards">
                {
                    results.map( p=>(
                        <li className="card-item" key={p.name}>
                            <cardPokemon url={p.url}></cardPokemon>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}