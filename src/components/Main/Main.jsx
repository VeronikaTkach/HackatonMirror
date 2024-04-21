import React from "react";
import { Element } from 'react-scroll';
import { HeroSection } from "../HeroSection";
import { AboutUs } from "../Main/AboutUs";
import { Directions } from "../Main/Directions";
import { Continents } from "../Main/Continents";
import { Travels } from "../Main/Travels";
//import { Founder } from "../Main/Founder";
import { Advantages } from "../Main/Advantages";
import { Impressions } from '../Main/Impressions';
import { Order } from '../Main/Order';
import s from './style.module.scss';

const scrollToOrder = () => {
  const orderSection = document.getElementById("orderSection");
  orderSection.scrollIntoView({ behavior: "smooth" });
};

// const goToLink = () => {

// }

export const Main = () => {
  return (
    <>
      <main className={s.content}>
        <Element name={'mainHero'} className={s.main__section}>
          <HeroSection/>
        </Element>

        <Element name={'aboutus'} className={s.main__section}>
          <AboutUs/>
        </Element>

       <Element name={'directions'} className={s.main__section}>
          <Directions/>
        </Element>

        <section className={s.main__section}>
          <Continents/>
        </section>

        <Element name={'travels'} className={s.main__section}>
          <Travels/>
        </Element>

{/*        <section className={s.main__section}>
          <Founder/>
        </section>*/}
        <section className={s.main__section}>
          <Advantages/>
        </section>

        <Element name={'impressions'} className={s.main__section}>
          <Impressions/>
        </Element>

        <section className={s.main__section} id="orderSection">
          <Order/>
        </section>
      </main>
    </>
  )
}

export {scrollToOrder};