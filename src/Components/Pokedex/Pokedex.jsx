import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carta from '../Carta/Carta'
import Navbar from '../Navbar/Navbar'

import styles from './pokedex.module.css'

function Pokedex() {
	const [pokemos, setPokemos] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=151')
        .then(response => {
            setPokemos(response.data.results);
        })
        .catch(error =>{
            console.error('Error Pokemon Data', error);
        });
    });[];
    
    
    return(
    <>
    <Navbar></Navbar>
    <div class={styles.container} >
    {pokemos.map((pokemon, index)=>(
        <Carta key={index} name={pokemon.name}></Carta>
    ))}
    </div>
    </>)
}

export default Pokedex