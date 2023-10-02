import React from "react";
import Watch from "./Watch";

const WatchContainer = ({ hr, min, sec, ms }) => {
  return <Watch hr={hr} min={min} sec={sec} ms={ms} />;
};

export default WatchContainer;
