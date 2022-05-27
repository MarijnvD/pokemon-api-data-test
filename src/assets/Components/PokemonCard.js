import axios from "axios";
import React, {useEffect, useState} from "react";


const PokemonCard = ({url}) => {

    const [pokemonData, setPokemon] = useState([]);

    useEffect(() => {
        async function getPokemonData() {
            try {
                const result = await axios.get(`${url}`);
                console.log(result.data);
                setPokemon(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        getPokemonData()
    }, [])


    return (
        <>
            {Object.keys(pokemonData).length > 0 &&
                <article className="pokemonCard">
                    <h2>{pokemonData.name}</h2>
                    <img src={pokemonData.sprites.front_default} alt={pokemonData.name}/>
                    <h3>Moves: {pokemonData.moves.length}</h3>
                    <h3>Weight: {pokemonData.weight}</h3>
                    <div className="pokeMoves">
                        <h3>Abilities: </h3>
                        <ul>
                            {pokemonData.abilities.map((ability, index) =>{
                                return <li key={index}>{ability.ability.name}</li>
                            })}
                        </ul>
                    </div>
                </article>
            }
        </>
    );
}

export default PokemonCard;