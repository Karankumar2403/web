"use client"
import React, { useState, useEffect } from 'react';
import Clock from './Clock';
// import './CountDown.css';

export default function Countdown({date}) {
  const [Days, setDays] = useState([]);
  const [Hours, setHours] = useState([]);
  const [Minutes, setMinutes] = useState([]);
  const [Seconds, setSeconds] = useState([]);

  let interval;

  const startTimer = () => {
    const countDownDate = new Date(date).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let day1= Math.floor(days/10);
      let day2=days%10;

      
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      let hour1= Math.floor(hours/10);
      let hour2=hours%10;

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let minutes1=Math.floor(minutes/10);
      let minutes2=minutes%10;

      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      let second1=Math.floor(seconds/10);
      let second2=seconds%10;

      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        // update timer
        setDays([day1,day2]);
        setHours([hour1,hour2]);
        setMinutes([minutes1,minutes2]);
        setSeconds([second1,second2]);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div>
      <Clock Days={Days} Hours={Hours} Minutes={Minutes} Seconds={Seconds} />
    </div>
  );
}