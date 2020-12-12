import React, { Component } from "react";
import Aux from "../../HOC/Aux";
import Header from "../../Components/Header/Header";
import Layout from "../../Components/Layout/Layout";

class MainContainer extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <Layout />
      </Aux>
    );
  }
}

export default MainContainer;
