import React from "react";
// import Button from "../../ui/Button/Button";
import s from './style.module.scss';
import boss from '../../../assets/images/boss.jpg';
// import {goToLink} from '../Main';

export const Founder = () => {
  return (
      <div className={s.Founder}>
        <div className={s.Founder__title}>
          <h1 className={s.title}>обращение</h1>
          <h2 className={s.name}>
            <span className={s.highlight}>ЭКСКЛЮЗИВНЫЕ</span> <span>ПОЕЗДКИ</span>
            <br/>
            <span>ИНДИВИДУАЛЬНЫЙ ПОДХОД</span>
            <br/>
            <span>ДЛЯ САМЫХ</span> <span className={s.highlight}>ИСКУШЕННЫХ</span> <span>ТУРИСТОВ</span>
          </h2>
        </div>

        <div className={s.Founder__main}>
          <p className={s.description}>
          First Class предлагает роскошные и&nbsp;неповторимые путешествия
    по&nbsp;всему миру. Мы&nbsp;специализируемся на&nbsp;организации индивидуальных туров для самых
    взыскательных клиентов.
            <br/>
            <br/>
            Мы&nbsp;предлагаем широкий спектр услуг, включая организацию проживания в&nbsp;роскошных
    отелях, бронирование частных самолетов и&nbsp;яхт, организацию эксклюзивных экскурсий
    и&nbsp;встреч со&nbsp;знаменитостями, а&nbsp;также оказание персональной помощи
    во&nbsp;время путешествия.
          </p>
          {/* <Button onClick={goToLink} text={'О нас'}/> */}
        </div>

        <div className={s.Founder__block}>
          <div className={s.imageContainer}>
            <img className={s.image} src={boss} alt="Руководитель" />
          </div>
        </div>
      </div>
  );
}