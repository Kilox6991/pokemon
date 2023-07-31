import styles from './navbar.module.css'

function Navbar() {
	return(
    <div class = {styles.header}>
    <nav>
        <h1 class = {styles.logo}><img src="src\assets\Pokeball (1).svg" alt="Pokeball-logo" /></h1>
        <h1 class= {styles.pokedex}><img src="src\assets\logo.png" alt="Pokedex-logo" /></h1>
    </nav>
        <input type="search" class={styles.buscador} />
    </div>)
}

export default Navbar