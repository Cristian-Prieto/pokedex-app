import { useState, useEffect } from "react";
import styles from "./Pokemon.module.css";

export function Pokemon({ pokemon }) {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    fetch(pokemon.url).then((response) =>
      response.json().then((jsonData) => setInfo(jsonData))
    );
  }, [pokemon.url]);

  return (
    <>
      {info ? (
        <li className={styles.pokemonBox}>
          <div className={styles.title}>
            <span className={styles.num}>
              #{info.id.toString().padStart(3, 0)}
            </span>
            <h2 className={styles.name}>{info.name}</h2>
          </div>

          <div>
            {info && (
              <div className={styles.imgCont}>
                <img
                  src={info.sprites.front_default}
                  alt={info.name}
                  className={styles.sprite}
                />
              </div>
            )}
          </div>
          <div className={styles.bottom}>
            <span className={styles.type}>{info.types[0].type.name}</span>
            <span className={styles.weight}>{info.weight} g</span>
          </div>
        </li>
      ) : (
        <div className={styles.pokemonBox}></div>
      )}
    </>
  );
}
