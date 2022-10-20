import React from "react";

import moon from "../../images/icon-moon.svg";
import sun from "../../images/icon-sun.svg";

import { Container, Title, Img } from "./TopBarStyles";

const TopBar = ({ dark, setDark }) => {
  const changeTheme = () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  return (
    <Container>
      <Title>TODO</Title>
      <Img src={dark ? sun : moon} onClick={changeTheme} />
    </Container>
  );
};

export default TopBar;
