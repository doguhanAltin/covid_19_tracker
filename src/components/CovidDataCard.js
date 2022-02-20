import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AnimatedNumbers from "react-animated-numbers";

import "./CovidDataCard.css";
function CovidDataCard(props) {
  var dt = new Date(props.date);
  var utc = dt.toUTCString();
  var todatest= dt.toDateString();

  return (
    <div className="covidCard" style={{backgroundColor:props.bgColor}}>
      <div className="covidCardIntent">
      <div className="covidCardName">{props.name}</div>
      <div className="covidCardData">            

      <AnimatedNumbers
      includeComma
        animateToNumber={props.data}
        fontStyle={{ fontSize: 32 }}
        configs={(number, index) => {
          return { mass: 1, tension: 230 * (index + 1), friction: 140 };
        }}
      ></AnimatedNumbers></div>
      <div className="covidCardSubHeader">Last Updated at :</div>
      <div className="covidCardDate">{todatest}</div>
      <div className="covidCardHours">{` ${dt.getUTCHours()}:${dt.getUTCMinutes()}:${dt.getSeconds()}`}</div>
      </div>



    </div>
  );
}

export default CovidDataCard;
