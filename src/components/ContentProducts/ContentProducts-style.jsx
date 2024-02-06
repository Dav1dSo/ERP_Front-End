import styled from "styled-components";

const ContainerProducts = styled.div`
  h1 {
    margin: 3%;
  }
`;

const WrapButtons = styled.div`
  margin-bottom: 8vh;
  margin-left: 2vw;
  margin-top: 4vh;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-right: 15px;

  &:hover {
    background-color: #2980b9;
  }

  @media (max-width: 768px) {
    margin: auto;
    width: 100%;
    max-width: 200px;
    margin-bottom: 15px; 
  }
`;

const ButtonBlue = styled(StyledButton)`
  background-color: #3498db;
  &:hover {
    background-color: #2980b9;
  }
`;

const ButtonGreen = styled(StyledButton)`
  background-color: #028237;
  &:hover {
    background-color: #055f2b;
  }
`;

const ButtonYellow = styled(StyledButton)`
  background-color: #9d9d11;
  &:hover {
    background-color: #72720b;
  }
`;

const ButtonRed = styled(StyledButton)`
  background-color: #e74c3c;
`;

export { ContainerProducts, ButtonYellow, WrapButtons, StyledButton, ButtonBlue, ButtonGreen, ButtonRed };
