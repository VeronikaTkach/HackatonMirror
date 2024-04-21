import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../ui/Button/Button";
import { NavBar } from '../ui/Navbar/navbar';
import { scrollToOrder } from '../Main/Main';
// import { LanguageSelector } from "../ui/LanguageSelector/LanguageSelector";
import logo from '../../assets/images/logo-3 1.svg';
import logoDark from '../../assets/images/first new 1.svg';
import s from './styles.module.scss';

export const Header = () => {

  const location = useLocation();
  const [backgroundColor, setBackgroundColor] = useState('');
  const [colorScheme, setColorScheme] = useState('');
  const [colorLink, setColorLink] = useState('');
  const [line, setLine] = useState('');
  const [colorLogo, setColorLogo] = useState('');
  const { t } = useTranslation();

  // Обновляем цвет бэкграунда в зависимости от текущего пути
  useEffect(() => {

    if (location.pathname === '/africa') {
      setBackgroundColor('rgba(72, 57, 42, 0.30)');
      setColorScheme('white');
      setColorLink('white');
      setLine('white');
      setColorLogo(logo);


    } else {
      setBackgroundColor('rgba(255, 255, 255, 0.65)');
      setColorScheme('black');
      setColorLink('black');
      setLine('black');
      setColorLogo(logoDark);
    }
  }, [location.pathname]);
  
  return (
    <div className={s.header} style={{ background: backgroundColor }}>
      <div className={s.headerContent}>
        <img src={colorLogo} alt={'logo'}/>
        <NavBar colorLink={colorLink} line={line} currentPath={location.pathname}/>
        <div className={s.utilsContainer}>
        {/* <LanguageSelector/> */}
        <Button text={t("order.submit_button")} onClick={scrollToOrder} colorScheme={colorScheme}/>
        </div>
      </div>
    </div>
  )
}