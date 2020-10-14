import React from "react";
import styled from "@emotion/styled";

import Location from "./Location";

// component name is WeatherCard
const WeatherCard = (props) => {
  const Card = styled.div`
    margin: 0 auto;
    background: linear-gradient(to bottom, blue, lightblue);
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <Card>
      <Location />
      <img className="icon" src="./img/cloud.svg" alt="Weather Icon" />
      <h1 className="temp">20 °C</h1>
      <h3 className="condition">Clouds</h3>
    </Card>
  );
};

// name of export
export default WeatherCard;
