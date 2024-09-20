import React from "react";
import styles from "./Home.module.scss";
import Header from "../../components/Header/Header";
import Countdown from "./CountDown/CountDown";
import NFTValue from "./NFTValue/NFTValue";
import Icons from "../../components/Icons";

export default function Home() {
  return (
    <div className={styles["container"]}>
      <Header />
      <div className={styles["introduction-banner"]}></div>

      <div className={styles["introduction"]}>
        <div className={styles["introduction__text-wrap"]}>
          <p className={styles["introduction__text-wrap__main"]}>
            A digital adventure with Donthepia, The beginning of a decentralized
            art That connects the world.
          </p>
          <p className={styles["introduction__text-wrap__sub"]}>
            돈키호테 유토피아에 오신 것을 환영합니다. 옛날 옛적, 돈키호테
            유토피아 세계에 전염병이 발생하며 모든 곳이 중앙집권식으로 오염되고
            말았습니다. 이 오염된 세계에서 우리는 새로운 모험을 시작합니다.
            돈키호테는 크루즈를 타고 세계 데이터의 바다를 항해합니다. 이 여정을
            통해 분산화된 친구, 돈통 유저 서버노드를 모아 최후의 보물섬으로
            떠나는 것, 이는 돈키호테의 여정이자 우리의 목표입니다. 이를 통해
            블록체인의 탈중앙화의 의미를 다시 찾아가려 합니다. 돈키호테와 함께
            새로운 세계를 세우고, 미래의 예술과 기술을 효과적으로 활용해보세요.
            언제든 글로벌 DONQ NFT노드 구성에 합류할 수 있습니다. 지금
            함께하시겠습니까?
          </p>
        </div>
        <img
          className={styles["introduction__img-left"]}
          src="/assets/images/home/img-about-01.png"
          alt="home-img-01"
          srcSet="/assets/images/home/img-about-01.png 1x
            /assets/images/home/img-about-01@2x.png 2x
            /assets/images/home/img-about-01@3x.png 3x"
        />
        <img
          className={styles["introduction__img-right"]}
          src="/assets/images/home/img-about-02.png"
          alt="home-img-02"
          srcSet="/assets/images/home/img-about-02.png 1x
            /assets/images/home/img-about-02@2x.png 2x
            /assets/images/home/img-about-02@3x.png 3x"
        />
      </div>

      <div className={styles["join-community"]}>
        <h2 className={styles["join-community__title"]}>
          Join the community to get even more benefits.
        </h2>

        <Countdown daysToCountdown={5} className={styles["countdown"]} />

        <NFTValue className={styles["nft-values"]} />
      </div>

      <div className={styles["about-donq-nft"]}>
        <div className={styles["about-donq-nft__text"]}>
          <h1 className={styles["about-donq-nft__text__title"]}>
            About the antipathy of DONQ NFT Nodes
          </h1>
          <p className={styles["about-donq-nft__text__des"]}>
            DONQ NFT Node는 20번의 반감기가 있습니다. 반감기에는 DONQ NFT NODE가
            100ea ~ 500ea 생성될 때마다 DONQ가 자동소각됩니다. 탈중앙화 방식으로
            DONQ 코인 가격은 시장 유동성에 의해서 자유롭게 결정됩니다.
          </p>
        </div>

        <div className={styles["about-donq-nft__img"]}>
          <img
            src="/assets/images/home/img-donq-nft-nodes.png"
            alt="img-donq-nft-node"
            srcSet="/assets/images/home/img-donq-nft-nodes.png 1x,
            /assets/images/home/img-donq-nft-nodes@2x.png 2x,
            /assets/images/home/img-donq-nft-nodes@3x.png 3x"
          />
        </div>
      </div>

      <div className={styles["what-donq"]}>
        <div className={styles["what-donq__text"]}>
          <h1 className={styles["what-donq__text__title"]}>What is an</h1>
          <h1 className={styles["what-donq__text__title"]}>Eco-System DONQ?</h1>
          <p className={styles["what-donq__text__des"]}>
            DONQ는 NFT와 T2E Trading , P2E Game을 결합하여 어떠한 거래에
            대해서도 중앙 기관이나 제3자에 의한 허가가 필요없는 DAO 조직을
            형성하여 유저들이 자율적으로 판단하고 투표하여 생태계를 이끌고
            확장할 수 있도록 합니다.
          </p>
        </div>

        <div className={styles["illustrate-wrap"]}>
          <div className={styles["illustrate"]}>
            <div className={styles["illustrate__top"]}>
              <p>What does DAO stand for</p>
            </div>
            <div className={styles["illustrate__center"]}>
              <p>
                <span>What is T2E?</span>
                <span>What is T2E?</span>
                <span>What is T2E?</span>
              </p>
            </div>
            <div className={styles["illustrate__bottom"]}>
              <p>Know about P2E</p>
            </div>
          </div>
          <div className={styles["illustrate-wrap__card-wrap"]}>
            <div className={styles["illustrate-wrap__card"]}>
              <div className={styles["illustrate-wrap__card__main"]}>
                <Icons.Chart
                  className={styles["illustrate-wrap__card__main__icon"]}
                />
                <h5 className={styles["illustrate-wrap__card__main__title"]}>
                  T2E
                </h5>
                <p className={styles["illustrate-wrap__card__main__des"]}>
                  T2E Trading 은 코인 거래차트에 대한 교육, 트레이더들의
                  노하우나 투자기법에 대한 교육, 디지털 자산에 대한 전문적인
                  지식에 대한 교육 상품입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["free-characters"]}>
        <div className={styles["free-characters__group-title"]}>
          <h1 className={styles["free-characters__group-title__first-title"]}>
            Free Characters{" "}
            <Icons.Star
              className={
                styles["free-characters__group-title__first-title__icon"]
              }
            />
          </h1>
          <h1>Interest farming</h1>
          <h1>Platform</h1>
          <h1>Governance</h1>
        </div>
        <div className={styles["free-characters__group-des"]}>
          <p className={styles["free-characters__group-des__top"]}>
            DONQ NFT NODE 보유자는 DonThePia (Donquixote The Utopia) 생태계에서
            생성되는 다양한 NFT 캐릭터들을 무상으로 받을 수 있습니다. 보유한
            NFT의 가치가 상승하면, NFT 거래소를 통해서 거래를 할 수 있습니다.
          </p>
          <p className={styles["free-characters__group-des__bottom"]}>
            DONQ NFT Nodes Holder’s Benefits
          </p>
        </div>
      </div>

      <div className={styles["donq-token"]}>
        <h1 className={styles["donq-token__title"]}>DONQ Token Information </h1>

        <div className={styles["donq-token__token-info"]}>
          <div className={styles["donq-token__token-info__item"]}>
            <p className={styles["donq-token__token-info__item__label"]}>
              Taken Information
            </p>
            <p className={styles["donq-token__token-info__item__value"]}>
              NODE
            </p>
          </div>
          <div className={styles["donq-token__token-info__item"]}>
            <p className={styles["donq-token__token-info__item__label"]}>
              Taken symbol
            </p>
            <p className={styles["donq-token__token-info__item__value"]}>
              NODE
            </p>
          </div>
          <div className={styles["donq-token__token-info__item"]}>
            <p className={styles["donq-token__token-info__item__label"]}>
              Blockchain
            </p>
            <p className={styles["donq-token__token-info__item__value"]}>
              BNB Chain
            </p>
          </div>
          <div className={styles["donq-token__token-info__item"]}>
            <p className={styles["donq-token__token-info__item__label"]}>
              Total Supply
            </p>
            <p className={styles["donq-token__token-info__item__value"]}>
              1,000,000,000
            </p>
          </div>
        </div>

        <div className={styles["graph-figures"]}>
          <div className={styles["graph-figures__graph"]}>
            <img
              src="/assets/images/home/img-token-info.png"
              alt="img-token-info"
              srcSet="/assets/images/home/img-token-info.png 1x,
              /assets/images/home/img-token-info@2x.png 2x,
              /assets/images/home/img-token-info@3x.png 3x"
            />
          </div>

          <div className={styles["graph-figures__figures"]}>
            <div className={styles["graph-figures__figures__item"]}>
              <p className={styles["graph-figures__figures__item__value"]}>
                400,000,000
              </p>
              <p className={styles["graph-figures__figures__item__sub"]}>
                Eco-System (40%)
              </p>
            </div>
            <div className={styles["graph-figures__figures__item"]}>
              <p className={styles["graph-figures__figures__item__value"]}>
                100,000,000
              </p>
              <p className={styles["graph-figures__figures__item__sub"]}>
                Company Reserves (10%)
              </p>
            </div>
            <div className={styles["graph-figures__figures__item"]}>
              <p className={styles["graph-figures__figures__item__value"]}>
                200,000,000
              </p>
              <p className={styles["graph-figures__figures__item__sub"]}>
                Marketing (20%)
              </p>
            </div>
            <div className={styles["graph-figures__figures__item"]}>
              <p className={styles["graph-figures__figures__item__value"]}>
                100,000,000
              </p>
              <p className={styles["graph-figures__figures__item__sub"]}>
                Team / Advisor (10%)
              </p>
            </div>
            <div className={styles["graph-figures__figures__item"]}>
              <p className={styles["graph-figures__figures__item__value"]}>
                100,000,000
              </p>
              <p className={styles["graph-figures__figures__item__sub"]}>
                Ciculation (10%)
              </p>
            </div>
            <div className={styles["graph-figures__figures__item"]}>
              <p className={styles["graph-figures__figures__item__value"]}>
                100,000,000
              </p>
              <p className={styles["graph-figures__figures__item__sub"]}>
                Contributor (10%)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
