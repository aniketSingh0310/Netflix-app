import styles from "./Loading.module.css";
import React from "react"; // Don't forget to import React!

const Loading = () => {
  return (
    <>
      <div className={styles.container + " " + styles.center}>
        <div className={styles.rope + " " + styles.center}>
          <div className={styles.legs + " " + styles.center}>
            <div className={styles["boot-l"]}></div>
            <div className={styles["boot-r"]}></div>
          </div>
          <div className={styles.costume + " " + styles.center}>
            <div className={styles.spider}>
              <div className={styles.s1 + " " + styles.center}></div>
              <div className={styles.s2 + " " + styles.center}></div>
              <div className={styles.s3}></div>
              <div className={styles.s4}></div>
            </div>
            <div className={styles.belt + " " + styles.center}></div>
            <div className={styles["hand-r"]}></div>
            <div className={styles["hand-l"]}></div>
            <div className={styles.neck + " " + styles.center}></div>
            <div className={styles.mask + " " + styles.center}>
              <div className={styles["eye-l"]}></div>
              <div className={styles["eye-r"]}></div>
            </div>
            <div className={styles.cover + " " + styles.center}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
