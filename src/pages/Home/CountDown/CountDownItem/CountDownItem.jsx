import React from "react";
import styles from "./CountDownItem.module.scss";

export default function CountDownItem({ maxCount, count, label }) {
  return (
    <div className={styles["countdown-item-wrap"]}>
      <div className={styles["countdown-item"]}>{count}</div>
      <p className={styles["countdown-item-wrap__label"]}>{label}</p>
    </div>
  );
}
