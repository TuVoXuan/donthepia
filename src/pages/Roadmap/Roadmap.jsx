import React from "react";
import styles from "./Roadmap.module.scss";

export default function Roadmap() {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["roadmap"]}>
        <div className={styles["roadmap__text-group"]}>
          <h1 className={styles["roadmap__text-group__title"]}>Roadmap for</h1>
          <h1 className={styles["roadmap__text-group__title"]}>
            DONQ NFT Nodes
          </h1>
          <p className={styles["roadmap__text-group__desc"]}>
            DONQ는 NFT와 T2E Trading , P2E Game을 결합하여 어떠한 거래에
            대해서도 중앙 기관이나 제3자에 의한 허가가 필요 없는 DAO 조직을
            형성하여 유저들이 자율적으로 판단하고 투표하여 생태계를 이끌고
            확장할 수 있도록 합니다.
          </p>
        </div>
        <div className={styles["roadmap__img"]}>
          <img
            src="/assets/images/roadmap/img-loadmap.png"
            alt="img-loadmap"
            srcSet="/assets/images/roadmap/img-loadmap.png 1x,
            /assets/images/roadmap/img-loadmap@2x.png 2x,
            /assets/images/roadmap/img-loadmap@3x.png 3x"
          />
        </div>
      </div>
    </div>
  );
}
