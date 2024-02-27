import styled from 'styled-components';

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 10vh;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 8px 50px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 0.5px );
  -webkit-backdrop-filter: blur( 0.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );

  @media (max-width: 768px) {
    padding: 15px;
    height: 32vh;
  }
`;


export const Title = styled.h2`
  margin-bottom: 30px;
  color: grey;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 30px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

export const Message = styled.div`
  margin-bottom: 20px;
  color: ${({ type }) => (type === 'success' ? 'green' : 'red')};

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;
