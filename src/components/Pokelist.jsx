import { useState, useEffect } from "react";
import { Pokemon } from "./Pokemon";
import { Pagination } from "./Pagination";
import styles from "./Pokelist.module.css";

export function Pokelist() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=8"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPrevPageUrl] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(currentPageUrl)
      .then((response) => response.json())
      .then((jsonData) => {
        setLoading(false);
        setNextPageUrl(jsonData.next);
        setPrevPageUrl(jsonData.previous);
        setList(jsonData.results);
        console.log(jsonData.results);
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
    <main className={styles.box}>
      <div>
        <Pagination nextPage={nextPage} previousPage={previousPage} />
        {loading && <div>...</div>}
      </div>
      <div className={styles.grid}>
        <ul className={styles.list}>
          {list.map((pokemon) => (
            <Pokemon key={pokemon.name} pokemon={pokemon} />
          ))}
        </ul>
      </div>
    </main>
  );
}
