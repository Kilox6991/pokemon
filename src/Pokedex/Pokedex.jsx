import Carta from '../Carta/Carta'
import Navbar from '../Navbar/Navbar'

import styles from './pokedex.module.css'

function Pokedex() {
	return(
    <>
    <Navbar></Navbar>
    <div class={styles.container}>
    <Carta/>
    <Carta/>
    <Carta/>
    </div>
    </>)
}

export default Pokedex