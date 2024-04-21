import React from "react";
import s from './style.module.scss';


const InProgress = () => {
  return (
    <div className={s.container}>
      <div className={s.inprogress}>
        <span className={s.span}></span>
        <span className={s.span}></span>
        <span className={s.span}></span>
        <span className={s.span}></span>
        <label className={s.label}></label>
      </div>
    </div>
  );
};

export default InProgress;