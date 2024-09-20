import React, { useState } from "react";
import styles from "./Header.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import SelectLanguage from "../SelectLanguage/SelectLanguage";
import ButtonLink from "../ButtonLink/ButtonLink";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClickMenuBtn = () => {
    const body = document.querySelector("body");
    body.style.overflow = showMenu ? "visible" : "hidden";
    setShowMenu(!showMenu);
  };

  return (
    <div
      className={clsx(styles["header-wrap"], showMenu && styles["show-menu"])}
    >
      <div className={styles["header"]}>
        <div className={styles["header__logo"]}>
          <img
            src="/assets/images/logo-donthepia.webp"
            alt="donthepia-logo"
            srcSet="/assets/images/logo-donthepia.webp 1x,
            /assets/images/logo-donthepia@2x.webp 2x,
            /assets/images/logo-donthepia@3x.webp 3x"
          />
        </div>

        <div
          onClick={handleClickMenuBtn}
          className={clsx(
            styles["header__menu-icon"],
            showMenu && styles["open"]
          )}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={styles["header-wrap__menu-horizontal-wrap"]}>
          <ul>
            <li>
              <Link href="/">Donquixote</Link>
            </li>
            <li>
              <Link to={"/"}>About</Link>
            </li>
            <li>
              <Link to={"/"}>Donquixote NFT</Link>
            </li>
            <li>
              <Link to={"/"}>Ecosystem</Link>
            </li>
            <li>
              <Link to={"/"}>Token</Link>
            </li>
            <li>
              <Link to={"/"}>Roadmap</Link>
            </li>
            <li>
              <Link to={"/"}>Team & Partners</Link>
            </li>
            <li>
              <Link to={"/"}>FAQ</Link>
            </li>
          </ul>
        </nav>

        <div className={styles["header-wrap__group-btn-horizontal"]}>
          <SelectLanguage />
          <ButtonLink link={"/"} text={"NFT 구매"} bgColor={"orange"} />
        </div>
      </div>

      <div
        className={clsx(
          styles["header-wrap__menu"],
          showMenu && styles["show-menu"]
        )}
      >
        <ul>
          <li className={styles["header-wrap__menu__item"]}>
            <Link to={"#"}>Donquixote</Link>
          </li>
          <li className={styles["header-wrap__menu__item"]}>
            <Link to={"#"}>About</Link>
          </li>
          <li className={styles["header-wrap__menu__item"]}>
            <Link to={"#"}>Donquixote NFT</Link>
          </li>
          <li className={styles["header-wrap__menu__item"]}>
            <Link to={"#"}>Ecosystem</Link>
          </li>
          <li className={styles["header-wrap__menu__item"]}>
            <Link to={"#"}>Token</Link>
          </li>
          <li className={styles["header-wrap__menu__item"]}>
            <Link to={"#"}>Roadmap</Link>
          </li>
          <li className={styles["header-wrap__menu__item"]}>
            <Link to={"#"}>FAQ</Link>
          </li>
        </ul>

        <div className={styles["header-wrap__group-btn"]}>
          <SelectLanguage />
          <ButtonLink link={"/"} text={"NFT 구매"} bgColor={"orange"} />
        </div>
      </div>
    </div>
  );
}
