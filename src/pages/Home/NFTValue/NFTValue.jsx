import React from "react";
import styles from "./NFTValue.module.scss";
import clsx from "clsx";

const NFT = [
  {
    label: "NFT Nodes",
    value: "0000.000",
  },
  {
    label: "Total burned",
    value: "0000.000",
  },
  {
    label: "DONP Price",
    value: "0000.000",
  },
  {
    label: "DONP Holders",
    value: "0000.000",
  },
];

export default function NFTValue({ className }) {
  return (
    <div className={clsx(styles["wrapper"], className)}>
      {NFT.map((item) => (
        <div key={item.label} className={styles["wrapper__item"]}>
          <span>{item.label}</span>
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
}
