import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { Button } from "@mui/material";

const ButtonTogglePlay = ({ onClick, running }) => {
  const displayBtnPlay = () => (running ? "none" : "inherit");
  const displayBtnPause = () => (running ? "inherit" : "none");
  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        backgroundColor: " rgb(200, 199, 199)",
        color: "rgb(20, 20, 20)",
        padding: "0.5rem 2.5rem",
        borderRadius: "1rem",
        "&:hover": {
          backgroundColor: "rgb(20,20,20)",
          color: "rgb(200, 199, 199)",
        },
      }}
    >
      <PlayArrowIcon
        sx={{
          fontSize: "3rem",
          display: displayBtnPlay,
        }}
      />
      <PauseIcon
        sx={{
          fontSize: "3rem",
          display: displayBtnPause,
        }}
      />
    </Button>
  );
};

export default ButtonTogglePlay;
