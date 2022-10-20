import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 18px;
  background-color: ${(props) => (props.dark ? `#25273D` : `#fff`)};
  color: ${(props) => (props.dark ? `#767992` : `#000`)};
  @media (max-width: 560px) {
    font-size: 12px;
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

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => (props.dark ? `#25273D` : `#fff`)};
  border-radius: 5px;
  margin-top: 48px;
  margin-bottom: 24px;
  overflow: hidden;
  width: 540px;
  height: 64px;
  @media (max-width: 560px) {
    width: 327px;
    height: 48px;
    margin-bottom: 16px;
    margin-top: 40px;
  }
`;

export { Input, InputContainer, Checkbox };
