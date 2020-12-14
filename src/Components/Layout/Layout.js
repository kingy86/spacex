import React from "react";
import { Columns } from "react-bulma-components";
import RocketImage from "../RocketImage/RocketImage";
import LaunchFeature from "../LaunchFeature/LaunchFeature";
import "./Layout.css";

const Layout = (props) => (
  <div className="layout">
    <Columns>
      <Columns.Column>
        <RocketImage />
      </Columns.Column>
      <Columns.Column>
        <LaunchFeature data={props.data} />
      </Columns.Column>
    </Columns>
  </div>
);

export default Layout;
