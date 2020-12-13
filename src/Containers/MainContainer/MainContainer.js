import React, { Component } from "react";
import { Container } from "react-bulma-components";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Header from "../../Components/Header/Header";
import Layout from "../../Components/Layout/Layout";

import { SpaceX } from "spacex-api";

class MainContainer extends Component {
  render() {
    let state = {
      spaceLaunches: [],
    };

    SpaceX.getAllLaunches().then((data) =>
      data.forEach((launch) => {
        this.setState({ spaceLaunches: launch });
      })
    );
    return (
      <Container>
        <Header />
        <Layout />
      </Container>
    );
  }
}

export default MainContainer;
