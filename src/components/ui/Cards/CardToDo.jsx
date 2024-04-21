import React from "react";
import cn from 'classnames';
import s from './style.module.scss';
import img1 from '../../../assets/images/africa_countries/todo_card1.jpg';
import img2 from '../../../assets/images/africa_countries/todo_card2.jpg';
import img3 from '../../../assets/images/africa_countries/todo_card3.jpg';
import { useTranslation } from 'react-i18next';

export const CardToDo = ({title, travel, motoD, img, ...props}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={cn(s.component, s.size__todo, s.tr)}>
          <img src={img} className={s.img} alt ={"img"}></img>
          <div className={s.info}>
            <div className={s.info__block}>
              <div className={s.info__title_tr}>{t(title)}</div>
              <div className={s.info__travel_tr}>{t(travel)}</div>
              <div className={s.info__motoD}>{t(motoD)}</div> {/* Добавляем текст motoDo */}
            </div>
          </div>
      </div>
    </>
  )
}

const titles = [
  {title: 'todo.botswana', travel: 'todo.treasure_hunt', motoD: 'todo.find_gold', img: img1},
  {title: 'todo.ghana', travel: 'todo.visit_reserve', motoD: 'todo.your_nature', img: img2},
  {title: 'todo.tanzania', travel: 'todo.kilimanjaro', motoD: 'todo.above_clouds', img: img3}
];

const cardToDos = titles.map((item, index) => (
  <CardToDo key={index} {...item} />
));

export default cardToDos;