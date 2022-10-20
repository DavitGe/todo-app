import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 40px;
  color: #fff;
  margin: 0;
  letter-spacing: 15px;
  @media (max-width: 560px) {
    font-size: 20px;
    letter-spacing: 12px;
  }
`;

const Img = styled.img`
  height: 26px;
  width: 26px;
  cursor: pointer;
  @media (max-width: 560px) {
    width: 20px;
    height: 20px;
  }
`;

export { Container, Title, Img };
