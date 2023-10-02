import React from "react";
import "./watch.css";

const Watch = ({ hr, min, sec, ms }) => {
  return (
    <div className="watch">
      <span>{hr}</span>
      <span>:{min}</span>
      <span>:{sec}</span>
      <span className="ms">{ms}</span>
    </div>
  );
};

export default Watch;
