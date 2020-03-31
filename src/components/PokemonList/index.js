import React, { useState, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import ProgressBar from 'react-bootstrap/ProgressBar';

import api from '../../services/api';

import '../../global.css';
import './styles.css';

import logoImg from '../../assets/logo.png';

export default function Pokemon(){
    const [pokemons, setPokemons] = useState([]);
    const [pokedex, setPokedex] = useState([]);
    const pokemonsDetails = []

    useEffect(() => {
        (async function loadPokemons() {
            const response = await api.get('pokemon');
            
            for(const pokemon of response.data.results) {
                const result = await api.get(pokemon.url);
                pokemonsDetails.push(result.data);
            }

            console.log(pokemonsDetails);
            setPokemons(pokemonsDetails);
        })()
    }, [pokemonsDetails])

    function addPokedex(pokemon) { 
        /* Limite de 6 pokemons por pokedex */
        if(pokedex.length === 6 ) {
            alert('Pokédex cheia, treinadxr! Escolha no máximo 6 pokémons');
            return;
          } 

        const pokemonExist = pokedex.filter(pokedex_pokemon => pokedex_pokemon.id === pokemon.id);
          console.log(pokemon.id);
          console.log(pokemonExist);

        if(pokemonExist != false) {
            alert('Pokémon já selecionado, escolha outro...')
            return;
        }

          setPokedex([...pokedex, pokemon]);
          console.log(pokemon.id);
     }
     
     function removePokedex(idPokemon) {
        const pokemons = pokedex.filter(pokemon => pokemon.id !== idPokemon)
        setPokedex(pokemons)
      }

    return (
        <div className="pokemons-container">
            <header>
                    <img src={logoImg} alt="Logo Pokédex" />
            </header>
            <section className="title"><h1>Pokémons</h1></section>
            <section className="container">
                <aside className="list-pokemons">
                    <ul className="card">
                        {pokemons.map((pokemon, index) => (
                            <li key={index}>
                                <div className="front-card">
                                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                                    <p id="poke-name">{pokemon.name}</p>
                                    
                                    <div className="abilities-container">
                                        <p>Habilidades</p>
                                        {pokemon.abilities.map(item => {
                                            return (
                                            <span key={pokemon.id + item.ability.name}>
                                                {item.ability.name}
                                            </span>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="back-card">
                                    <div className="info">
                                        {pokemon.stats.map(item => {
                                            return (
                                            <span key={pokemon.id + item.stat.name}>
                                                <p>{item.stat.name}</p>
                                                <ProgressBar className="progress" now={item.base_stat} label={`${item.base_stat}%`} animated="true" max="100" />
                                            </span>
                                            );
                                        })}
                                    </div>
                                    <div className="card-btns">
                                            <button id="btn-catch" onClick={() => addPokedex(pokemon)}>Capturar</button>
                                            {/*<button id="btn-info">Mais</button>*/}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </aside>
                <aside className="show-pokemon">
                    <h2>Minha Pokédex</h2>
                    <ul id="view-pokemon">
                        {pokedex.map(pokemon => (
                            <li key={pokemon} id="li-pokedex">
                                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                                <p id="poke-name">{pokemon.name}</p>
                                <button type="button">
                                    <FiTrash2 onClick={() => removePokedex(pokemon.id)} />
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="poke-text">
                        {pokedex.length === 6 && <h1>Pokédex pronta!<span>|</span></h1>}
                    </div>
                </aside>
            </section>
        </div>
    );
}