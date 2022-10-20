import React, { useState, useEffect } from "react";

import lightBg from "../../images/bg-desktop-light.jpg";
import darkBg from "../../images/bg-desktop-dark.jpg";

import lightMobileBg from "../../images/bg-mobile-light.jpg";
import darkMobileBg from "../../images/bg-mobile-dark.jpg";

import { StyledContainer, StyledImg } from "./HeaderStyles";

const Header = ({ dark }) => {
  const [bg, setBg] = useState();

  function getWidth() {
    const { innerWidth: width } = window;
    return width;
  }

  const width = getWidth();

  useEffect(() => {
    if (dark) {
      if (Number(width) > 560) {
        setBg(darkBg);
      } else {
        setBg(darkMobileBg);
      }
    } else {
      if (Number(width) > 560) {
        setBg(lightBg);
      } else {
        setBg(lightMobileBg);
      }
    }
  });

  return (
    <StyledContainer dark={dark}>
      <StyledImg src={bg} />
    </StyledContainer>
  );
};

export default Header;
