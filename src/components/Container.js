import styled from "styled-components";

const Container = styled.div`
  width: 540px;
  display: flex;
  flex-direction: column;
  z-index: 10;
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translate(-50%, 0);
  @media (max-width: 560px) {
    width: 327px;
    top: 48px;
  }
`;

export default Container;
