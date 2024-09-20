import React from "react";
import styles from "./Roadmap.module.scss";
import Icons from "../../components/Icons/index";
import ReviewCarousel from "./ReviewCarousel/ReviewCarousel";

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

      <div className={styles["team-adviser"]}>
        <div className={styles["team-adviser__text-group"]}>
          <h1 className={styles["team-adviser__text-group__title"]}>
            Team & Advisers for
          </h1>
          <h1 className={styles["team-adviser__text-group__title"]}>
            DONQ NFT Nodes
          </h1>
        </div>

        <ReviewCarousel />
      </div>

      <div
        className={styles["partners-slider"]}
        style={{ "--quantity": 7, "--width": "228px", "--height": "108px" }}
      >
        <div className={styles["partners-slider__list"]}>
          <div
            className={styles["partners-slider__item"]}
            style={{ "--position": 1 }}
          >
            <img
              src="/assets/images/roadmap/logo-partner-01.png"
              alt="logo-partner-01"
              srcSet="/assets/images/roadmap/logo-partner-01.png 1x,
          /assets/images/roadmap/logo-partner-01@2x.png 2x,
          /assets/images/roadmap/logo-partner-01@3x.png 3x"
            />
          </div>
          <div
            className={styles["partners-slider__item"]}
            style={{ "--position": 2 }}
          >
            <img
              src="/assets/images/roadmap/logo-partner-02.png"
              alt="logo-partner-02"
              srcSet="/assets/images/roadmap/logo-partner-02.png 1x,
          /assets/images/roadmap/logo-partner-02@2x.png 2x,
          /assets/images/roadmap/logo-partner-02@3x.png 3x"
            />
          </div>
          <div
            className={styles["partners-slider__item"]}
            style={{ "--position": 3 }}
          >
            <img
              src="/assets/images/roadmap/logo-partner-03.png"
              alt="logo-partner-03"
              srcSet="/assets/images/roadmap/logo-partner-03.png 1x,
          /assets/images/roadmap/logo-partner-03@2x.png 2x,
          /assets/images/roadmap/logo-partner-03@3x.png 3x"
            />
          </div>
          <div
            className={styles["partners-slider__item"]}
            style={{ "--position": 4 }}
          >
            <img
              src="/assets/images/roadmap/logo-partner-04.png"
              alt="logo-partner-04"
              srcSet="/assets/images/roadmap/logo-partner-04.png 1x,
          /assets/images/roadmap/logo-partner-04@2x.png 2x,
          /assets/images/roadmap/logo-partner-04@3x.png 3x"
            />
          </div>
          <div
            className={styles["partners-slider__item"]}
            style={{ "--position": 5 }}
          >
            <img
              src="/assets/images/roadmap/logo-partner-05.png"
              alt="logo-partner-05"
              srcSet="/assets/images/roadmap/logo-partner-05.png 1x,
          /assets/images/roadmap/logo-partner-05@2x.png 2x,
          /assets/images/roadmap/logo-partner-05@3x.png 3x"
            />
          </div>
          <div
            className={styles["partners-slider__item"]}
            style={{ "--position": 6 }}
          >
            <img
              src="/assets/images/roadmap/logo-partner-06.png"
              alt="logo-partner-06"
              srcSet="/assets/images/roadmap/logo-partner-06.png 1x,
          /assets/images/roadmap/logo-partner-06@2x.png 2x,
          /assets/images/roadmap/logo-partner-06@3x.png 3x"
            />
          </div>
          <div
            className={styles["partners-slider__item"]}
            style={{ "--position": 7 }}
          >
            <img
              src="/assets/images/roadmap/logo-partner-07.png"
              alt="logo-partner-07"
              srcSet="/assets/images/roadmap/logo-partner-07.png 1x,
          /assets/images/roadmap/logo-partner-07@2x.png 2x,
          /assets/images/roadmap/logo-partner-07@3x.png 3x"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
