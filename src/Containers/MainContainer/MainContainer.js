import React, { Component } from "react";
import Aux from "../../HOC/Aux";
import Header from "../../Components/Header/Header";
import Layout from "../../Components/Layout/Layout";

let SpacexApiWrapper = require("spacex-api-wrapper");

class MainContainer extends Component {
  render() {
    SpacexApiWrapper.getAllLaunches()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("Error ", error);
      });

    return (
      <Aux>
        <Header />
        <Layout />
      </Aux>
    );
  }
}

export default MainContainer;
