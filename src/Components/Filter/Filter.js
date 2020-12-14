import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button, Dropdown } from "react-bulma-components";
import sortIcon from "../../assets/icon/sort.png";

import "./Filter.css";

const Filter = (props) => (
  <div className="filter">
    <Button color="info">
      Sort Descending <img src={sortIcon} alt="sortIcon" />
    </Button>
    <Dropdown label="Filter By Year" color="info"></Dropdown>
  </div>
);

export default Filter;
