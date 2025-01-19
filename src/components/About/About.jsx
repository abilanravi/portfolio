import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
              I specialize in building complete web applications by crafting seamless and visually appealing user interfaces 
              while developing efficient and optimized server-side systems with integrated APIs.            
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Cybersecurity Specialist</h3>
              <p>
                I am adept at analyzing and implementing encryption algorithms, securing sensitive data, 
                and ensuring robust application security against potential threats.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cloudIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud Practioner</h3>
              <p>
                I am well versed in Azure Fundamentals 
                while currently persuing the AZ-900 certification.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
