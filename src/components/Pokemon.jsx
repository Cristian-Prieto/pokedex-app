import { useState, useEffect } from "react";
import styles from "./Pokemon.module.css";

export function Pokemon({ pokemon }) {
  const [info, setInfo] = useState();
  useEffect(() => {
    fetch(pokemon.url).then((response) =>
      response.json().then((jsonData) => setInfo(jsonData))
    );
  });
  return (
    <>
      <li className={styles.box}>
        <span>{pokemon.name}</span>

        <div>{info && <img src={info.sprites.front_default} alt="" />}</div>
      </li>
    </>
  );
}
