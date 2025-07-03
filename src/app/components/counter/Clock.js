import React from "react";
import Styles from "./clock.module.css";

export default function Clock({ Days, Hours, Minutes, Seconds }) {
  return (
    <div className={Styles.clock}>
      {
        !(Days[0]==0&&Days[1]==0)&&(
          <div className="flex flex-col items-center">
        <div className={`${Styles.counts} flex`}>
          <p>{Days[0]} </p>
          <p>{Days[1]} </p>
          <span className={Styles.colon}>:</span>
        </div>
        <span className={`ml-[-10px] ${Styles.time}`}>Days</span>
      </div>
        )
      }
      <div className="flex flex-col items-center">
        <div className={`${Styles.counts} flex`}>
          <p>{Hours[0]} </p>
          <p>{Hours[1]} </p>
          <span className={Styles.colon}>:</span>
        </div>
        <span className={`ml-[-10px] ${Styles.time}`}>Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <div className={`${Styles.counts} flex`}>
          <p>{Minutes[0]} </p>
          <p>{Minutes[1]} </p>
        </div>
        <span className={`ml-[-14px] ${Styles.time}`}>Minutes</span>
      </div>

      {Days[0] == 0&&Days[1]==0 && (
        <div className="flex flex-col items-center">
          <div className={`${Styles.counts} flex`}>
          <span className={Styles.colon}>:</span>
            <p>{Seconds[0]} </p>
            <p>{Seconds[1]} </p>
          </div>
          <span className={`ml-[-10px] ${Styles.time}`}>Seconds</span>
        </div>
      )}
    </div>
  );
}

Clock.defaultProps = {
  Days: "00",
  Hours: "00",
  Minutes: "00",
  Seconds: "00",
};
