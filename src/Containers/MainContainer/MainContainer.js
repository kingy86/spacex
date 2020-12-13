import React from "react";
import { Container } from "react-bulma-components";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Header from "../../Components/Header/Header";
import Layout from "../../Components/Layout/Layout";

const MainContainer = () => (
  <Container>
    <Header />
    <Layout />
  </Container>
);

export default MainContainer;
