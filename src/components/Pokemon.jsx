import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import styles from "./Pokemon.module.css";

export function Pokemon({ pokemon }) {
  const [info, setInfo] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch(pokemon.url).then((response) =>
      response.json().then((jsonData) => setInfo(jsonData))
    );
  }, [pokemon.url]);

  return (
    <>
      {info ? (
        <>
          <li className={styles.pokemonBox}>
            <button className={styles.insideBox} onClick={() => setModal(true)}>
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
            </button>
          </li>
          {modal && <Modal close={() => setModal(false)} info={info} />}
        </>
      ) : (
        <div className={styles.pokemonBox}></div>
      )}
    </>
  );
}
