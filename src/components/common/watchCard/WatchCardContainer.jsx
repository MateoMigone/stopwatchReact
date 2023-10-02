import React, { useState, useRef } from "react";
import WatchCard from "./WatchCard";

const WatchCardContainer = () => {
  const [totalMs, setTotalMs] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (milliseconds) => {
    const ms = milliseconds % 1000;
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const formattedMs = ms < 100 ? "0" + ms / 10 : ms / 10;
    const formattedSec = seconds < 10 ? "0" + seconds : seconds;
    const formattedMin = minutes < 10 ? "0" + minutes : minutes;
    const formattedHr = hours < 10 ? "0" + hours : hours;

    return {
      formattedHr: formattedHr,
      formattedMin: formattedMin,
      formattedSec: formattedSec,
      formattedMs: formattedMs,
    };
  };

  const { formattedHr, formattedMin, formattedSec, formattedMs } =
    formatTime(totalMs);

  const start = () => {
    !running && setTotalMs((prevTotalMs) => prevTotalMs + 10);
  };

  const runWatch = () => {
    !running
      ? (intervalRef.current = setInterval(start, 10))
      : clearInterval(intervalRef.current);
    setRunning(!running);
  };

  const resetWatch = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
    setTotalMs(0);
  };
  return (
    <WatchCard
      hr={formattedHr}
      min={formattedMin}
      sec={formattedSec}
      ms={formattedMs}
      runWatch={runWatch}
      resetWatch={resetWatch}
      running={running}
    />
  );
};

export default WatchCardContainer;
