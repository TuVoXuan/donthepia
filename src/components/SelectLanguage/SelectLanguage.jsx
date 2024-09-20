import React, { useRef, useState } from "react";
import styles from "./SelectLanguage.module.scss";
import Icons from "../Icons";
import clsx from "clsx";
import { useClickOutside } from "../../custom-hooks/useClickOutside";

const languages = [
  {
    label: "Vietnamese",
    value: "vietnamese",
  },
  {
    label: "Korean",
    value: "korean",
  },
];

export default function SelectLanguage() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [showMenu, setShowMenu] = useState(false);
  const selectRef = useRef(null);

  useClickOutside(selectRef, () => setShowMenu(false));

  const handleClickIcon = (event) => {
    event.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleSelectLanguage = (value) => {
    setSelectedLanguage(value);
    setShowMenu(false);
  };

  return (
    <div ref={selectRef} className={styles["language-select-wrap"]}>
      <div onClick={handleClickIcon} className={styles["language-icon"]}>
        <Icons.Language />
      </div>
      <div className={clsx(styles["menu"], showMenu && styles["show"])}>
        {languages.map((item) => (
          <div
            className={clsx(
              styles["menu__item"],
              selectedLanguage === item.value && styles["active"]
            )}
            onClick={() => handleSelectLanguage(item.value)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
