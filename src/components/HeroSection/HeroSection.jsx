import React from "react";
import videoBackground from '../../assets/video/Travel2 comp.mp4'; // Replace 'background-video.mp4' with your video file
import s from './styles.module.scss';

export const HeroSection = () => {
  return (
    <div className={s.hero}>
      <video autoPlay muted loop className={s.videoBackground}>
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
