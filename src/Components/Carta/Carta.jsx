
import React, { useState, useEffect } from 'react';
import styles from './carta.module.css';
import axios from 'axios';

const CartaPokemon = ({ name }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemonData(response.data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchPokemonData();
  }, [name]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  const { name: pokemonName, height, weight, types, moves, stats } = pokemonData;

  return (
    <div className={styles.cartas}>
      <div className={styles.container}>
        <div className={styles.nombreNumero}>
          <h3 className={styles.nombre}>{pokemonName}</h3>
          <h3 className={styles.numero}>#{pokemonData.id}</h3>
        </div>
        <div className={styles.carta}>
          <p className={styles.tipoPokemon}>{types[0].type.name}</p>
          <div className={styles.caracteristicasFisicas}>
            <p className={styles.whm}><img src="src\assets\weight.svg" alt="weight" /> {weight}Kg<br />Weight</p>
            <p className={styles.whm}><img src="src\assets\height.svg" alt="height" /> {height}m<br />Height</p>
            <p className={styles.whm}>{moves[0].move.name}<br /><br />Moves</p>
          </div>
          <div className={styles.baseStats}>
            Base Stats
            <div className={styles.stats}>
              {stats.map((stat) => (
                <div className={styles.statsAtributs} key={stat.stat.name}>
                  <p className={styles.atributosName}>{stat.stat.name.toUpperCase()}</p>
                  <p className={styles.atributos}>{stat.base_stat}</p>
                  <div className={styles.atributosDiv}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartaPokemon;
