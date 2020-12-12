import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
// import Button from "../Button/Button";
import refreshIcon from "../../assets/icon/refresh.png";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button } from "react-bulma-components";

const Header = (props) => (
  <div>
    <Logo />
    <Button color="danger" rounded>
      Reload Data <img src={refreshIcon} alt="refreshIcon" />
    </Button>
  </div>
);

export default Header;
