import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Abilan 👋 </h1>
        <p className={styles.description}>
          I'm an aspiring Cybersecurity student attending Carleton Univeristy. I have a passion for building web applications and file/network encryption software. Feel free to reach out and learn more about me!
        </p>
        <a href="mailto:abilanravi@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("me/myImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      /> 
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};