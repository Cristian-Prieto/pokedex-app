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
          <span
            style={{
              fontFamily: "Verdana",
              fontSize: "28px",
              color: "#ff0033",
            }}
          >
            {info.types[0].type.name}
          </span>
          <div className={styles.moves}>
            <ul className={styles.movesLeft}>
              <li className={styles.moveItem}>{info.moves[0].move.name}</li>
              <li className={styles.moveItem}>{info.moves[1].move.name}</li>
            </ul>
            <ul className={styles.movesRight}>
              <li className={styles.moveItem}>{info.moves[2].move.name}</li>
              <li className={styles.moveItem}>{info.moves[3].move.name}</li>
            </ul>
          </div>
          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.statBlock}>
              <div className={styles.statName}>{info.stats[1].stat.name}</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  width: "15rem",
                  backgroundColor: "#cbd5e1",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    backgroundColor: " #ff0033",
                    height: "10px",
                    borderRadius: "6px",
                    width: `${info.stats[0].base_stat}%`,
                  }}
                ></div>
              </div>
              <div className={styles.statNum}>{info.stats[1].base_stat}</div>
            </div>
            <div className={styles.statBlock}>
              <div className={styles.statName}>{info.stats[2].stat.name}</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  width: "15rem",
                  backgroundColor: "#cbd5e1",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    backgroundColor: " #ff0033",
                    height: "10px",
                    borderRadius: "6px",
                    width: `${info.stats[0].base_stat}%`,
                  }}
                ></div>
              </div>
              <div className={styles.statNum}>{info.stats[2].base_stat}</div>
            </div>
            <div className={styles.statBlock}>
              <div className={styles.statName}>{info.stats[3].stat.name}</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  width: "15rem",
                  backgroundColor: "#cbd5e1",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    backgroundColor: " #ff0033",
                    height: "10px",
                    borderRadius: "6px",
                    width: `${info.stats[0].base_stat}%`,
                  }}
                ></div>
              </div>
              <div className={styles.statNum}>{info.stats[3].base_stat}</div>
            </div>
            <div className={styles.statBlock}>
              <div className={styles.statName}>{info.stats[4].stat.name}</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  width: "15rem",
                  backgroundColor: "#cbd5e1",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    backgroundColor: " #ff0033",
                    height: "10px",
                    borderRadius: "6px",
                    width: `${info.stats[0].base_stat}%`,
                  }}
                ></div>
              </div>
              <div className={styles.statNum}>{info.stats[4].base_stat}</div>
            </div>
            <div className={styles.statBlock}>
              <div className={styles.statName}>{info.stats[5].stat.name}</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  width: "15rem",
                  backgroundColor: "#cbd5e1",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    backgroundColor: " #ff0033",
                    height: "10px",
                    borderRadius: "6px",
                    width: `${info.stats[0].base_stat}%`,
                  }}
                ></div>
              </div>
              <div className={styles.statNum}>{info.stats[5].base_stat}</div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
