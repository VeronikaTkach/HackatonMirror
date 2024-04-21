import React from "react";
import s from './LanguageSelector.scss';
import i18n from "../../../i18n";

export const LanguageSelector = () => {

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  return (
    <div className="container">
      <div className="radio_container">
        <input
          type="radio"
          name="radio"
          onClick={() => changeLanguage("ru")}
          id="one"
          defaultChecked={i18n.language === "ru"}
        />
        <label htmlFor="one">RU</label>
        <input
          type="radio"
          name="radio"
          onClick={() => changeLanguage("en")}
          id="two"
          defaultChecked={i18n.language === "en"}
        />
        <label htmlFor="two">EN</label>
      </div>
    </div>
  );
};

export default LanguageSelector;