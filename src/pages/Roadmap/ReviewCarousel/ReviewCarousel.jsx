import React, { useRef } from "react";
import styles from "./ReviewCarousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Icons from "../../../components/Icons/index";

const reviews = [
  {
    id: 1,
    review:
      "T2E Trading 은 코인 거래차트에 대한 교육,  트레이더들의 노하우나 투자기법에 대한 교육, 디지털 자산에 대한 전문적인 지식에 대한 교육 상품입니다.",
    avatar: "/assets/images/roadmap/avatar-1.jpg",
    korName: "홍길동",
    enName: "Gil Dong Hong",
    marginTop: "0px",
  },
  {
    id: 2,
    review:
      "T2E Trading 은 코인 거래차트에 대한 교육,  트레이더들의 노하우나 투자기법에 대한 교육, 디지털 자산에 대한 전문적인 지식에 대한 교육 상품입니다.",
    avatar: "/assets/images/roadmap/avatar-2.jpg",
    korName: "홍길동",
    enName: "Gil Dong Hong",
    marginTop: "40px",
  },
  {
    id: 3,
    review:
      "T2E Trading 은 코인 거래차트에 대한 교육,  트레이더들의 노하우나 투자기법에 대한 교육, 디지털 자산에 대한 전문적인 지식에 대한 교육 상품입니다.",
    avatar: "/assets/images/roadmap/avatar-3.jpg",
    korName: "홍길동",
    enName: "Gil Dong Hong",
    marginTop: "80px",
  },
  {
    id: 4,
    review:
      "T2E Trading 은 코인 거래차트에 대한 교육,  트레이더들의 노하우나 투자기법에 대한 교육, 디지털 자산에 대한 전문적인 지식에 대한 교육 상품입니다.",
    avatar: "/assets/images/roadmap/avatar-1.jpg",
    korName: "홍길동",
    enName: "Gil Dong Hong",
    marginTop: "64px",
  },
  {
    id: 5,
    review:
      "T2E Trading 은 코인 거래차트에 대한 교육,  트레이더들의 노하우나 투자기법에 대한 교육, 디지털 자산에 대한 전문적인 지식에 대한 교육 상품입니다.",
    avatar: "/assets/images/roadmap/avatar-2.jpg",
    korName: "홍길동",
    enName: "Gil Dong Hong",
    marginTop: "48px",
  },
];

export default function ReviewCarousel() {
  const swiperRef = useRef(null);

  return (
    <div className={styles["carousel"]}>
      <div className={styles["carousel__btn-group"]}>
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className={styles["carousel__btn-group__previous"]}
        >
          <Icons.ArrowLeft
            className={styles["carousel__btn-group__previous__icon"]}
          />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className={styles["carousel__btn-group__next"]}
        >
          <Icons.ArrowLeft
            className={styles["carousel__btn-group__next__icon"]}
          />
        </button>
      </div>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        modules={[Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className={styles["review-card"]}
              style={{ marginTop: item.marginTop }}
            >
              <p className={styles["review-card__review"]}>{item.review}</p>
              <div className={styles["review-card__user-info"]}>
                <div className={styles["review-card__user-info__avatar"]}>
                  <img src={item.avatar} alt="avatar-reviewer" />
                </div>
                <div className={styles["review-card__user-info__info"]}>
                  <p
                    className={styles["review-card__user-info__info__name-kor"]}
                  >
                    {item.korName}
                  </p>
                  <p
                    className={styles["review-card__user-info__info__name-en"]}
                  >
                    {item.enName}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
