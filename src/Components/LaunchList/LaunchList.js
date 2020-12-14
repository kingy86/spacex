import React from "react";
import LaunchItem from "../LaunchItem/LaunchItem";

const LaunchList = (props) => (
  <div className="launch-list">
    {props.launchInfo.map((launch) => (
      <LaunchItem
        flightNumber={launch.flight_number}
        missionName={launch.mission_name}
        launchDate={launch.launch_date_utc}
        rocket={launch.rocket.rocket_id}
      />
    ))}
  </div>
);

export default LaunchList;
