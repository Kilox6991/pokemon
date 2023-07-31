import styles from './carta.module.css'
import jsonData from '../../data.json';

function Carta() {
    const namePokemon = jsonData[0]
    return (
        <div class={styles.cartas}>
            <div class={styles.container}>
                <div class={styles.nombreNumero}>
                    <h3 class={styles.nombre}>{namePokemon.name}</h3>
                    <h3 class={styles.numero}>#100</h3>
                </div>
                <div class={styles.carta}>
                    <p class={styles.tipoPokemon}>Planta</p>
                    <div class={styles.caracteristicasFisicas}>
                        <p class={styles.whm}><img src="src\assets\weight.svg" alt="weight" /> 2Kg<br />Weight </p>
                        <p class={styles.whm}><img src="src\assets\height.svg" alt="height" /> 0.3m<br />Height</p>
                        <p class={styles.whm}>Hoja Afilada<br /><br />Moves</p>
                    </div>
                    <div class={styles.baseStats}>
                        Base Stats
                        <div class={styles.stats}>
                            <div class={styles.statsAtributs}>
                                <p class={styles.atributosName}>HP</p>
                                <p class={styles.atributos}>40</p>
                                <div class={styles.atributosDiv}></div>
                            </div>
                            <div class={styles.statsAtributs}>
                                <p class={styles.atributosName}>ATK</p>
                                <p class={styles.atributos}>40</p>
                                <div class={styles.atributosDiv}></div>
                            </div>
                            <div class={styles.statsAtributs}>
                                <p class={styles.atributosName}>DEF</p>
                                <p class={styles.atributos}>40</p>
                                <div class={styles.atributosDiv}></div>
                            </div>
                            <div class={styles.statsAtributs}>
                                <p class={styles.atributosName}>SATK</p>
                                <p class={styles.atributos}>40</p>
                                <div class={styles.atributosDiv}></div>
                            </div>
                            <div class={styles.statsAtributs}>
                                <p class={styles.atributosName}>SDEF</p>
                                <p class={styles.atributos}>40</p>
                                <div class={styles.atributosDiv}></div>
                            </div>
                            <div class={styles.statsAtributs}>
                                <p class={styles.atributosName}>SPD</p>
                                <p class={styles.atributos}>40</p>
                                <div class={styles.atributosDiv}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Carta