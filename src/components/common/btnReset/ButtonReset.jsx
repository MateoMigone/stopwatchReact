import React from "react";
import StopIcon from "@mui/icons-material/Stop";
import { Button } from "@mui/material";

const ButtonTogglePlay = ({ onClick }) => {
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
      <StopIcon
        sx={{
          fontSize: "3rem",
        }}
      />
    </Button>
  );
};

export default ButtonTogglePlay;
