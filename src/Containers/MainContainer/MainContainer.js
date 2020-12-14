import React, { Component } from "react";
import { Container } from "react-bulma-components";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Header from "../../Components/Header/Header";
import Layout from "../../Components/Layout/Layout";

import { SpaceX } from "spacex-api";

class MainContainer extends Component {
  state = {
    spaceLaunches: [],
  };

  getData = () => {
    SpaceX.getAllLaunches().then((launch) =>
      this.setState({ spaceLaunches: [...launch] })
    );
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <Container>
        <Header />
        <Layout data={this.state.spaceLaunches} />
      </Container>
    );
  }
}

export default MainContainer;
