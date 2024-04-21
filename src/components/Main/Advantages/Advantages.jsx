import React from 'react';
import s from './style.module.scss';
import Button from '../../ui/Button/Button';
import cardAdvantages from '../../ui/Cards/CardAdv';
import {scrollToOrder} from '../Main';
import { useTranslation } from 'react-i18next';

export const Advantages = () => {
  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <div className={s.advantages}>
        <div className={s.block}>
          <div className={s.text}>
            <div className={s.title}>{t("advantages.advantages")}</div>
            <div className={s.name}>
              <span>{t("advantages.WHY")}</span>
              <br/>
              <span className={s.highlight}>{t("advantages.FIRST_CLASS")}</span>
            </div>
            <p className={s.description}>
            {t("advantages.descr1")}
              <br/>
              <br/>
              {t("advantages.descr2")}
            </p>
          </div>
          <Button className={s.button} onClick={scrollToOrder} text={t("order.submit_button")} colorScheme={'black'}/>
        </div>
        
        <div className={s.cards}>
          {cardAdvantages.map((card, index) => (
              <div key={index} className={s.card}>
                {card}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}