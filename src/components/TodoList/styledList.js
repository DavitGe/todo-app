import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: ${(props) => (props.dark ? "#393A4B" : "#e3e4f1")};
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: ${(props) =>
    props.dark ? "none" : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"};
`;

const JobContainer = styled.div`
  width: 100%;
  background-color: ${(props) => (props.dark ? "#25273D" : "#fff")};
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1px;
  height: 63px;
  position: relative;
  cursor: pointer;
  @media (max-width: 560px) {
    height: 52px;
  }
`;

const Checkbox = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  border: 1px solid ${(props) => (props.dark ? `#393A4B` : `#e3e4f1`)};
  margin-left: 24px;
  margin-right: 24px;
  cursor: pointer;
  flex-shrink: 0;
  display: flex;

  background-image: ${(props) =>
    props.active
      ? "linear-gradient(135deg, #55ddff 0%, #c058f3 100%)"
      : "transparent"};
  ${(props) =>
    props.active
      ? `
        border: none;
        align-items: center;
        justify-content: center;
      `
      : `
      &:hover {
        background: linear-gradient(${
          props.dark ? "#25273D, #25273D" : "#FFF, #FFF"
        }) padding-box,
        linear-gradient(135deg, #55ddff 0%, #c058f3 100%) border-box;
        border: 1px solid transparent;
      }
  `}

  @media (max-width: 560px) {
    width: 20px;
    height: 20px;
    margin-left: 20px;
    margin-right: 12px;
  }
`;

const Title = styled.p`
  font-size: 18px;
  color: ${(props) => (props.dark ? "#C8CBE7" : "#494c6b")};
  ${(props) =>
    props.active
      ? `
      color: ${props.dark ? "#4D5067" : "#D1D2DA"};
      text-decoration: line-through;
    `
      : ``}
  @media (max-width: 560px) {
    font-size: 12px;
  }
`;

const ListFooter = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.dark ? "#25273D" : "#fff")};
  @media (max-width: 560px) {
    box-shadow: ${(props) =>
      props.dark ? "none" : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"};
  }
`;
const FilterContainer = styled.div`
  display: flex;
`;

const Filter = styled.a`
  font-size: 14px;
  letter-spacing: -0.19px;
  font-weight: 700;
  margin-right: 18px;
  cursor: pointer;
  &:hover {
    color: ${(props) => (props.dark ? "#E3E4F1" : "#494c6b")};
  }
`;

const LeftNum = styled.span`
  font-size: 14px;
  letter-spacing: -0.19px;
  color: ${(props) => (props.dark ? "#5B5E7E" : "#9495a5")};
  margin-left: 24px;
  @media (max-width: 560px) {
    font-size: 12px;
  }
`;

const Clear = styled.span`
  font-size: 14px;
  letter-spacing: -0.19px;
  color: #9495a5;
  cursor: pointer;
  margin-right: 24px;
  color: ${(props) => (props.dark ? "#5B5E7E" : "#9495a5")};
  &:hover {
    color: ${(props) => (props.dark ? "#E3E4F1" : "#494c6b")};
  }
  @media (max-width: 560px) {
    font-size: 12px;
  }
`;

const Delete = styled.img`
  width: 12px;
  height: 12px;
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translate(0, -50%);
  @media (max-width: 560px) {
    width: 8px;
    height: 8px;
    right: 12px;
  }
`;

export {
  Container,
  JobContainer,
  Checkbox,
  Title,
  ListFooter,
  FilterContainer,
  Filter,
  LeftNum,
  Clear,
  Delete,
};
