import React from 'react';
import s from './style.module.scss';
import cardToDos from '../../ui/Cards/CardToDo';
import { useTranslation } from 'react-i18next';

export const ToDo = () => {
  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <div className={s.travels}>
        <div className={s.text}>
          <div className={s.title}>{t("todo.what_to_do")}</div>
          <div className={s.name}>
            <span className={s.highlight}>{t("todo.discover")}</span> <span>{t("todo.your")}</span>
            <br/>
            <span>{t("todo.africa")}</span> <span className={s.highlight}>{t("todo.your_africa")}</span>
          </div>
        </div>
        <div className={s.cards}>
          {cardToDos.map((card, index) => (
              <div key={index} className={s.card}>
                {card}
              </div>
            ))}
        </div>
      </div>
    </div>
    )
}