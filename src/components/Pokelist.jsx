import { useState, useEffect } from "react";
import { Pokemon } from "./Pokemon";
import { Pagination } from "./Pagination";
import styles from "./Pokelist.module.css";

export function Pokelist() {
  const [list, setList] = useState([]);

  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=8"
  );
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [previousPageUrl, setPrevPageUrl] = useState(null);

  useEffect(() => {
    fetch(currentPageUrl)
      .then((response) => response.json())
      .then((jsonData) => {
        setNextPageUrl(jsonData.next);
        setPrevPageUrl(jsonData.previous);
        setList(jsonData.results);
      })
      .catch((err) => console.log(err));
  }, [currentPageUrl]);

  const nextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  const previousPage = () => {
    setCurrentPageUrl(previousPageUrl);
  };

  return (
    <>
      <main className={styles.box}>
        <ul className={styles.list}>
          {list.map((pokemon) => (
            <Pokemon key={pokemon.name} pokemon={pokemon} />
          ))}
        </ul>
        <div className={styles.pagination}>
          <Pagination nextPage={nextPage} previousPage={previousPage} />
        </div>
      </main>
    </>
  );
}
