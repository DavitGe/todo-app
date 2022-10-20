import styled from "styled-components";

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledContainer = styled.div`
  width: 100vw;
  height: 300px;
  position: absolute;
  left: 0;
  top: 0;
  @media (max-width: 560px) {
    height: 200px;
  }
`;

export { StyledImg, StyledContainer };
