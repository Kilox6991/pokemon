import React, { useState } from 'react';
import styles from './navbar.module.css';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    
    console.log('Search term:', searchTerm);
  };

  return (
    <div className={styles.header}>
      <nav>
        <h1 className={styles.logo}>
          <img src="src\assets\Pokeball (1).svg" alt="Pokeball-logo" />
        </h1>
        <h1 className={styles.pokedex}>
          <img src="src\assets\logo.png" alt="Pokedex-logo" />
        </h1>
        <button className={`${styles['login-btn']} btn btn-primary`}>LOGIN</button>
        <button className={`${styles['register-btn']} btn btn-secondary`}>REGISTER</button>
      </nav>
      <form onSubmit={handleSearchSubmit}>
        <div className="input-group">
          <input
            type="search"
            className={`form-control ${styles.buscador}`}
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search Pokemon"
          />
          <button type="submit" className="btn btn-success">Search</button>
        </div>
      </form>
    </div>
  );
}

export default Navbar;
