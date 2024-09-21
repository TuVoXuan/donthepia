import React from "react";
import styles from "./Roadmap.module.scss";
import Icons from "../../components/Icons/index";
import ReviewCarousel from "./ReviewCarousel/ReviewCarousel";
import Collapse from "./Collapse/Collapse";
import ButtonLink from "../../components/ButtonLink/ButtonLink";

const faqList = [
  {
    question: "NFT는 뭔가요? 이것은 어떻게 사용하나요?",
    answer:
      "FAQ에 대한 답변이 들어갑니다. NFT는 홈페이지 메인에서 NFT 구매 버튼을 통해 구매할 수 있습니다.",
  },
  {
    question: "홈페이지를 이용하는데, 로그인은 어떻게 하나요?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima saepe ducimus facere dolores tenetur neque facilis ipsa, pariatur quidem est eius voluptate expedita debitis voluptates eum rem vitae magni officiis.",
  },
  {
    question: "NFT를 구매했어요. 사용은 어떻게 하나요?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima saepe ducimus facere dolores tenetur neque facilis ipsa, pariatur quidem est eius voluptate expedita debitis voluptates eum rem vitae magni officiis.",
  },
  {
    question: "NFT를 구매하는 것에 실패했어요. 어떻게 해결해야하나요?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima saepe ducimus facere dolores tenetur neque facilis ipsa, pariatur quidem est eius voluptate expedita debitis voluptates eum rem vitae magni officiis.",
  },
  {
    question: "NFT를 다른 방식으로 구매하고 싶어요. 어떤 방법이 있나요?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima saepe ducimus facere dolores tenetur neque facilis ipsa, pariatur quidem est eius voluptate expedita debitis voluptates eum rem vitae magni officiis.",
  },
  {
    question: "로그인 시 오류가 있어요. 해결 방법이 알고 싶어요.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima saepe ducimus facere dolores tenetur neque facilis ipsa, pariatur quidem est eius voluptate expedita debitis voluptates eum rem vitae magni officiis.",
  },
  {
    question: "홈페이지를 이용하는데, 로그인은 어떻게 하나요?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima saepe ducimus facere dolores tenetur neque facilis ipsa, pariatur quidem est eius voluptate expedita debitis voluptates eum rem vitae magni officiis.",
  },
  {
    question: "NFT를 구매했어요. 사용은 어떻게 하나요?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima saepe ducimus facere dolores tenetur neque facilis ipsa, pariatur quidem est eius voluptate expedita debitis voluptates eum rem vitae magni officiis.",
  },
];

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

      <div className={styles["faq"]}>
        <div className={styles["faq__text-group"]}>
          <h1 className={styles["faq__text-group__title"]}>
            If you have questions,
          </h1>
          <h1 className={styles["faq__text-group__title"]}>see our FAQ</h1>
        </div>

        <div className={styles["faq__list"]}>
          {faqList.map((item, index) => (
            <Collapse
              orderNumber={index < 10 ? "0" + (index + 1) : index}
              title={item.question}
            >
              {item.answer}
            </Collapse>
          ))}
        </div>
      </div>

      <div className={styles["dontthepia"]}>
        <div className={styles["dontthepia__main"]}>
          <h1 className={styles["dontthepia__main__title"]}>Donthepia</h1>
          <p className={styles["dontthepia__main__desc"]}>
            더 많은 혜택을 받고 싶다면 DONTHEPIA 커뮤니티에 가입하세요.
          </p>
          <div className={styles["dontthepia__main__btn-group"]}>
            <ButtonLink link={"/"} text={"NFT 구매하기"} bgColor={"white"} />
            <ButtonLink link={"/"} text={"NFT 구매하기"} bgColor={"orange"} />
          </div>
        </div>

        <img
          className={styles["dontthepia__img-01"]}
          src="/assets/images/roadmap/img-bottom-01.png"
          alt="img-bottom-01"
          srcSet="/assets/images/roadmap/img-bottom-01.png 1x,
          /assets/images/roadmap/img-bottom-01@2x.png 2x,
          /assets/images/roadmap/img-bottom-01@3x.png 3x,"
        />
        <img
          className={styles["dontthepia__img-02"]}
          src="/assets/images/roadmap/img-bottom-02.png"
          alt="img-bottom-02"
          srcSet="/assets/images/roadmap/img-bottom-02.png 1x,
          /assets/images/roadmap/img-bottom-02@2x.png 2x,
          /assets/images/roadmap/img-bottom-02@3x.png 3x,"
        />
        <img
          className={styles["dontthepia__img-03"]}
          src="/assets/images/roadmap/img-bottom-03.png"
          alt="img-bottom-03"
          srcSet="/assets/images/roadmap/img-bottom-03.png 1x,
          /assets/images/roadmap/img-bottom-03@2x.png 2x,
          /assets/images/roadmap/img-bottom-03@3x.png 3x,"
        />
      </div>
    </div>
  );
}
