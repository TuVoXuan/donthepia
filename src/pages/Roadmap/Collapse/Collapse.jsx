import React, { useState } from "react";
import styles from "./Collapse.module.scss";
import clsx from "clsx";
import Icons from "../../../components/Icons";

export default function Collapse({ orderNumber, title, children, className }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={clsx(styles["collapse-wrap"], className)}>
      <div className={styles["collapse-wrap__header-wrap"]}>
        <p className={styles["collapse-wrap__header-wrap__prefix"]}>
          {orderNumber}
        </p>

        <div className={styles["collapse-wrap__header"]} onClick={handleExpand}>
          <p className={styles["collapse-wrap__header__title"]}>{title}</p>
          <div
            className={clsx(
              styles["collapse-wrap__header__expand-btn"],
              expanded && styles["expand"]
            )}
          >
            <Icons.Plus
              className={styles["collapse-wrap__header__expand-btn__icon"]}
            />
          </div>
        </div>
        <div
          className={clsx(
            styles["collapse-wrap__body"],
            expanded && styles["expand"]
          )}
        >
          <div className={styles["collapse-wrap__body__content"]}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
