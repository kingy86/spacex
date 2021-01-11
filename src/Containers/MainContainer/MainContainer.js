import { useState, useEffect } from "react";
import { Container } from "react-bulma-components";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Header from "../../Components/Header/Header";
import Layout from "../../Components/Layout/Layout";

import { SpaceX } from "spacex-api";

const MainContainer = () => {
  // state = {
  //   spaceLaunches: [],
  // };
  const [spaceLaunches, setSpaceLaunches] = useState([]);

  const getData = () => {
    SpaceX.getAllLaunches().then((launch) => setSpaceLaunches([...launch]));
  };

  useEffect(() => {
    getData();
  });

  return (
    <Container>
      <Header />
      <Layout data={spaceLaunches} />
    </Container>
  );
};

export default MainContainer;
