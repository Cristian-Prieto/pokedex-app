import styles from "./Pagination.module.css";

export function Pagination({ previousPage, nextPage }) {
  return (
    <div className={styles.btnCont}>
      <button onClick={previousPage} className={styles.btn}>
        prev
      </button>
      <button onClick={nextPage} className={styles.btn}>
        next
      </button>
    </div>
  );
}
