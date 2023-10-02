import React from "react";
import ButtonTogglePlay from "./ButtonTogglePlay";

const ButtonTogglePlayContainer = ({ onClick, running }) => {
  return <ButtonTogglePlay onClick={onClick} running={running} />;
};

export default ButtonTogglePlayContainer;
