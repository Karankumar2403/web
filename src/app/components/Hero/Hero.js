import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import earth from "../../../../public/assets/earth.svg";
import satellite from "../../../../public/assets/satellite.svg";

function HeroSection() {
  return (
    <div className={`${styles.heroSection}`}>
      {/* <Image src={earth} alt="earth" className={`${styles.heroimgearth}`} /> */}
      {/* <Image
        src={satellite}
        alt="sa"
        className={`${styles.heroimgsatellite}`}
      /> */}
      <h1 className={`${styles.heading}`}>
        Electronics & Communication <br />
        Engineering Society
      </h1>

      <p className={`${styles.subtext}`}>
        We are a team, a society, a family and an organisation.
      </p>
    </div>
  );
}

export default HeroSection;
