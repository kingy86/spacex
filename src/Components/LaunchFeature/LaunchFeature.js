import React from "react";
import "./LaunchFeature.css";
import Filter from "../Filter/Filter";
import LaunchList from "../LaunchList/LaunchList";

const LaunchFeature = () => (
  <div className="launch-feature">
    <Filter />
    <LaunchList />
  </div>
);

export default LaunchFeature;
