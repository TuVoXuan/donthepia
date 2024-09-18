import React from "react";
import Icons from "../Icons";
import { Link } from "react-router-dom";
import styles from "./ButtonLink.module.scss";
import clsx from "clsx";

export default function ButtonLink({ text, link, bgColor }) {
  return (
    <Link to={link} className={clsx(styles["button-link"], styles[bgColor])}>
      {text}
      <Icons.ArrowRight className={styles["button-link__icon"]} />
    </Link>
  );
}
