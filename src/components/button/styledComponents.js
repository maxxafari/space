import styled from "styled-components";

const ButtonWrap = styled.div`
  padding: 30px;
  button {
    background: #fff;
    color: #000;
  }
`;

const Button = (props) => {
  const { className, children } = props;

  return (
    <ButtonWrap className={className}>
      <button {...props}>{children}</button>
    </ButtonWrap>
  );
};

export default Button;
