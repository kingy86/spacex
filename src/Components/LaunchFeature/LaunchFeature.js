import React from "react";
import "./LaunchFeature.css";
import Filter from "../Filter/Filter";
import LaunchList from "../LaunchList/LaunchList";

const LaunchFeature = (props) => (
  <div className="launch-feature">
    <Filter launchYear={props.data.launch_year} />
    <LaunchList launchInfo={props.data} />
    {/* {props.data.map((flight) => (
      <h1>{flight.mission_name}</h1>
    ))} */}
  </div>
);

export default LaunchFeature;
