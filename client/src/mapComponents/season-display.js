import React from "react";

const suggestions = {
  summer: {
    suggestion: "Enjoy summer fishing!"
  },
  winter: {
    suggestion: "Have a good time fishing in winter!"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

export default function SeasonDisplay(props) {
  const season = getSeason(props.lat, new Date().getMonth());
  const { suggestion } = suggestions[season];
  return (
    <div>
      <h5>{suggestion}</h5>
      {props.lat} <br /> {props.lon}
    </div>
  );
}
