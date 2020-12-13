import React from "react";
import "./LaunchFeature.css";
import Filter from "../Filter/Filter";

let SpacexApiWrapper = require("spacex-api-wrapper");

const LaunchFeature = () => {
  SpacexApiWrapper.getAllLaunches().then((data) => {
    console.log(data);
  });

  return (
    <div className="launch-feature">
      <Filter />
    </div>
  );
};

export default LaunchFeature;
