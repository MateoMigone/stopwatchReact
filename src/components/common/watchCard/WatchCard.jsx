import React from "react";
import { Card, CardActions, CardContent } from "@mui/material";
import WatchContainer from "../watch/WatchContainer";
import ButtonTogglePlayContainer from "../btnTogglePlay/ButtonTogglePlayContainer";
import ButtonResetContainer from "../btnReset/ButtonResetContainer";
import "./watchCard.css";

const WatchCard = ({ hr, min, sec, ms, runWatch, resetWatch, running }) => {
  return (
    <Card
      className="card"
      sx={{
        backgroundColor: "rgb(67,67,67)",
        boxShadow: "0 0 10px 0 rgba(200, 200, 200, 0.475)",
      }}
    >
      <CardContent>
        <WatchContainer hr={hr} min={min} sec={sec} ms={ms} />
      </CardContent>
      <CardActions className="btns-container">
        <ButtonTogglePlayContainer onClick={runWatch} running={running} />
        <ButtonResetContainer onClick={resetWatch} />
      </CardActions>
    </Card>
  );
};

export default WatchCard;
