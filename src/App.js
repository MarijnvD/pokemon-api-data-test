import React, {useEffect, useState} from 'react';
import './App.css';
import PokemonCard from "./assets/Components/PokemonCard";
import logo from "./assets/Logo/Pokemon-logo.png";
import axios from "axios";


function App() {
    const [pokemon, setPokemon] = useState([])
    const [endpoint, setEndpoint] = useState("https://pokeapi.co/api/v2/pokemon")

    useEffect(() => {
        async function getPokemonData() {
            try {
                const result = await axios.get(`${endpoint}`)
                console.log(result.data)
                setPokemon((result.data))
            } catch (e) {
                console.error(e)
            }
        }

        getPokemonData()
    }, [endpoint])

    return (
        <div className="mainBody">

            <img className="title" src={logo} alt="pokemon-logo"/>

            <div className="controlButtons">
                <button
                    type="button"
                    onClick={() => setEndpoint(pokemon.previous)}
                    disabled={!pokemon.previous}
                >
                    Vorige
                </button>

                <button
                    type="button"
                    onClick={() => setEndpoint(pokemon.next)}
                    disabled={!pokemon.next}
                >
                    Volgende
                </button>
            </div>

            <div className="allCards">

                {pokemon.results && pokemon.results.map((poke) => {
                    return <PokemonCard url={poke.url} key={poke.name}/>

                })}
            </div>


        </div>
    );
}

export default App;
