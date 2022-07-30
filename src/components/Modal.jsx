import styles from "./Modal.module.css";

export function Modal({ close, info }) {
  return (
    <button className={styles.overlay} onClick={close}>
      <div className={styles.container}>
        <div className={styles.Inside}>
          <div className={styles.title}>
            <span className={styles.num}>
              {" "}
              #{info.id.toString().padStart(3, 0)}
            </span>
            <h2 className={styles.name}> {info.name}</h2>
          </div>

          <div className={styles.imgContainer}>
            <img
              src={info.sprites.other.dream_world.front_default}
              alt={info.name}
              className={styles.sprite}
            />
          </div>
          <span>{info.types[0].type.name}</span>
          <div className={styles.moves}>
            <ul className={styles.movesLeft}>
              <li>{info.moves[0].move.name}</li>
              <li>{info.moves[1].move.name}</li>
            </ul>
            <ul className={styles.movesRight}>
              <li>{info.moves[2].move.name}</li>
              <li>{info.moves[3].move.name}</li>
            </ul>
          </div>
          <div className={styles.stats}>
            <div className={styles.statBlock}>
              <div className={styles.statName}>{info.stats[0].stat.name}:</div>

              <div
                style={{
                  backgroundColor: "white",
                  height: "12px",
                  width: "25%",
                }}
              >
                hola
              </div>
              <div>{info.stats[0].base_stat}</div>
            </div>

            <div className={styles.statBlock}>
              <div className={styles.statName}>{info.stats[1].stat.name}:</div>
              <div className={styles.bar}>barritas</div>
              <div>{info.stats[1].base_stat}</div>
            </div>
            <div className={styles.statBlock}>
              <div className={styles.statName}>{info.stats[2].stat.name}:</div>
              <div className={styles.bar}>barritas</div>
              <div>{info.stats[2].base_stat}</div>
            </div>
            <div className={styles.statBlock}>
              <div className={styles.statName}>{info.stats[3].stat.name}:</div>
              <div className={styles.bar}>barritas</div>
              <div>{info.stats[3].base_stat}</div>
            </div>
            <div className={styles.statBlock}>
              <div className={styles.statName}>{info.stats[4].stat.name}:</div>
              <div className={styles.bar}>barritas</div>
              <div>{info.stats[4].base_stat}</div>
            </div>
            <div className={styles.statBlock}>
              <div className={styles.statName}>{info.stats[5].stat.name}:</div>
              <div className={styles.bar}>barritas</div>
              <div>{info.stats[5].base_stat}</div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
