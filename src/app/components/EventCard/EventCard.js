import React from "react";
import Countdown from "../counter/CountDown";
import styles from "./eventCard.module.css";
import Image from "next/image";

const EventCard = ({
  title,
  content,
  imgSrc,
  lazyImgSrc,
  date,
  isUpcoming,
}) => {
  const datechange = (date) => {
    return new Date(date).toDateString();
  };
  const dateWithoutTime = new Date(date).toDateString();

  return (
    <div className={styles.eventBanner}>
      <div className={styles.eventWrapper}>
        <div className={styles.imgBanner}>
          <Image
            className={styles.img}
            width={350}
            height={350}
            alt={title}
            placeholder="blur"
            src={imgSrc}
            blurDataURL={lazyImgSrc}
          />
        </div>
        <div className={styles.eventDetails}>
          <div className={styles.eventHeading}>
            <h3>{title}</h3>
            {!isUpcoming && <p className="text-blue-200">{dateWithoutTime}</p>}
          </div>

          <div className={styles.eventPara}>
            <p>{content}</p>
          </div>
          <div className={styles.eventBottom}>
            <div className={styles.eventButton}>
              <span className={`${styles.contactButton}`}>Know More</span>
            </div>
            {isUpcoming && (
              <div className={styles.counter}>
                <Countdown date={date} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
