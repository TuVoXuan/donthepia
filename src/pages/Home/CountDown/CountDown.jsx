import React, { useState, useEffect } from "react";
import styles from "./CountDown.module.scss";
import CountDownItem from "./CountDownItem/CountDownItem";
import clsx from "clsx";

const Countdown = ({ daysToCountdown, className }) => {
  const calculateTimeLeft = (targetDate) => {
    const difference = +new Date(targetDate) - +new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0 };
    }
  };

  const getTargetDate = (days) => {
    const now = new Date();
    return new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
  };

  const [targetDate, setTargetDate] = useState(getTargetDate(daysToCountdown));
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={clsx(styles["countdown-wrap"], className)}>
      <CountDownItem maxCount={5} count={timeLeft.days} label={"days"} />
      <CountDownItem maxCount={60} count={timeLeft.hours} label={"hours"} />
      <CountDownItem maxCount={60} count={timeLeft.minutes} label={"minutes"} />
    </div>
  );
};

export default Countdown;
