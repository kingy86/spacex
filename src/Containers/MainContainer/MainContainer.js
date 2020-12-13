import React, { Component } from "react";
import { Container } from "react-bulma-components";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Header from "../../Components/Header/Header";
import Layout from "../../Components/Layout/Layout";

let SpacexApiWrapper = require("spacex-api-wrapper");

class MainContainer extends Component {
  state = {};

  render() {
    SpacexApiWrapper.getAllLaunches()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("Error ", error);
      });

    return (
      <Container>
        <Header />
        <Layout />
      </Container>
    );
  }
}

export default MainContainer;
