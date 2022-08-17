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
          <div className={styles.statCont}>
            <div className={styles.leftBlock}>
              <div> {info.stats[0].stat.name}</div>
              <div> {info.stats[1].stat.name}</div>
              <div> {info.stats[2].stat.name}</div>
              <div> {info.stats[3].stat.name}</div>
              <div> {info.stats[4].stat.name}</div>
              <div> {info.stats[5].stat.name}</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                width: "25rem",
                height: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#94a3b8",
                padding: "4px 6px",
                borderRadius: "9px",
              }}
            >
              <div
                style={{
                  height: "10px",
                  padding: "2px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: " #f8fafc",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    height: "8px",
                    width: `${info.stats[0].base_stat}%`,
                    backgroundColor: "red",
                    borderRadius: "6px",
                  }}
                ></div>
              </div>
              <div
                style={{
                  height: "10px",
                  padding: "2px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: " #f8fafc",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    height: "8px",
                    width: `${info.stats[1].base_stat}%`,
                    backgroundColor: "red",
                    borderRadius: "6px",
                  }}
                ></div>
              </div>
              <div
                style={{
                  height: "10px",
                  padding: "2px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#f8fafc",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    height: "8px",
                    width: `${info.stats[2].base_stat}%`,
                    backgroundColor: "red",
                    borderRadius: "6px",
                  }}
                ></div>
              </div>
              <div
                style={{
                  height: "10px",
                  padding: "2px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: " #f8fafc",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    height: "8px",
                    width: `${info.stats[3].base_stat}%`,
                    backgroundColor: "red",
                    borderRadius: "6px",
                  }}
                ></div>
              </div>
              <div
                style={{
                  height: "10px",
                  padding: "2px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: " #f8fafc",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    height: "8px",
                    width: `${info.stats[4].base_stat}%`,
                    backgroundColor: "red",
                    borderRadius: "6px",
                  }}
                ></div>
              </div>
              <div
                style={{
                  height: "10px",
                  padding: "2px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: " #f8fafc",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    height: "8px",
                    width: `${info.stats[5].base_stat}%`,
                    backgroundColor: "red",
                    borderRadius: "6px",
                  }}
                ></div>
              </div>
            </div>
            <div className={styles.rightBlock}>
              <div> {info.stats[0].base_stat}</div>
              <div> {info.stats[1].base_stat}</div>
              <div> {info.stats[2].base_stat}</div>
              <div> {info.stats[3].base_stat}</div>
              <div> {info.stats[4].base_stat}</div>
              <div> {info.stats[5].base_stat}</div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
