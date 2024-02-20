import styled from "styled-components";

const WrapForm = styled.div`
  margin-left: 25%;
  width: 50vw;
`;


const MessageSuccess= styled.span`
  p {
    border-radius: 10px;
    margin-bottom: 3vh;
    max-width: 20vw;
    padding: 2%;
    background-color: green;
    animation: fadeIn 1.0s ease-in-out;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

`;
const MessageError= styled.span`
  p {
    border-radius: 10px;
    margin-bottom: 3vh;
    max-width: 20vw;
    padding: 2%;
    background-color: red;
    animation: fadeIn 1.0s ease-in-out;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

`;

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 50vw;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.7rem;
  border: none;
  border-radius: 4px;
  width: 90%;

  &[type="file"] {
    border: 1px solid #a0a0a0;
    padding: 0.5rem;
    
  }

`;

const TextArea = styled.textarea`
  padding: 1.5rem;
  border: none;
  width: 292%;
  border-radius: 4px;
  resize: vertical;

  @media (max-width: 768px) {
    max-width: 77%;  
  }
`;

const Select = styled.select`
  padding: 0.7rem;
  border: none;
  border-radius: 4px;
  width: 97%;

  option {
    color: black;
    padding: 2rem;  
    background-color: #e7ebed;
    border-bottom: 1px solid #ced4da;
    font-size: 16px;  
  }

`;

const Button = styled.button`
  margin: auto;
  padding: 0.6rem 3rem;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2980b9;
  }

  @media (min-width: 768px) {
    width: auto;
    justify-self: center;
    grid-column: span 3;
  }
`;

export { FormContainer, FormGroup, Label, Input, TextArea, Button,
WrapForm, Select, MessageSuccess, MessageError };
