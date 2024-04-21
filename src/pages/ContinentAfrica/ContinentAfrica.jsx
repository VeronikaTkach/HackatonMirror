import React from "react";
import { Header } from '../../components/Header';
import { Africa } from "../../components/Africa";
import { Footer } from "../../components/Footer";
import s from './style.module.scss';

export default function ContinentAfrica() {

  React.useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);

  return (
    <>
      <main className={s.content}>
        <div className={s.africa__header}>
          <Header/>
        </div>
        <Africa/>
        <Footer/>
      </main>
    </>
  );
}

