import React from "react";
import { Element } from 'react-scroll';
import { AboutAfrica } from "../Africa/AboutAfrica";
import { CountriesList } from "../Africa/CountriesList";
import { CountriesInfo } from "../Africa/CountriesInfo";
import { ImpressionsList } from "../Africa/ImpressionsList";
// import { RewiewList } from "../Africa/RewiewList";
// import { TravelsList } from "../Africa/TravelsList";
import { Advantages } from "../Main/Advantages";
import { OrderAfrica } from "../Africa/OrderAfrica";
import s from './style.module.scss';
import { Amazing } from "./AmazingAfrica/Amazing";
import { ToDo } from "./ToDo/ToDo";
import { ImageSection } from './ImageSection';

export const Africa = () => {
  return (
    <>
      <main className={s.content}>

        <Element name={'mainHero'} className={s.main__section}>
          <ImageSection/>
        </Element>

        <section className={s.main__section}>
          <AboutAfrica/>
        </section>

        <section className={s.main__section}>
          <CountriesInfo/>
        </section>

        <section className={s.main__section}>
          <CountriesList/>
        </section>

        <section className={s.main__section}>
          <ImpressionsList/>
        </section>

        <section className={s.main__section}>
          <Amazing/>
        </section> 

        <section className={s.main__section}>
          <ToDo/>
        </section> 

        <section className={s.main__section}>
          <Advantages/>
        </section>

        <section className={s.main__section} id="orderSection">
          <OrderAfrica/>
        </section>
      </main>
    </>
  );
}