import React from "react";
import { Columns } from "react-bulma-components";

const LaunchItem = (props) => (
  <div class="launch-item">
    <Columns>
      <Columns.Column>
        <h1>#{props.flightNumber}</h1>
        <h1>{props.missionName}</h1>
      </Columns.Column>

      <Columns.Column>
        <h3>{props.launchDate}</h3>
        <h3>{props.rocket}</h3>
      </Columns.Column>
    </Columns>
  </div>
);

export default LaunchItem;
