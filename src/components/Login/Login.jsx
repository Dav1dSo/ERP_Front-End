import React, { useState } from 'react';
import UserLogin from '../../Services/ServicesUser';
import {
  LoginFormContainer,
  Input,
  Button,
  Message,
  Title,
} from './LoginStyle';

const Login = ({ onLogin }) => {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const CreateSessionLogin = async () => {
    const res = await UserLogin({ email, password });
    if (res.data) {
      const token = res.data;
      localStorage.setItem('userToken', token);
      onLogin();
      setMessage('Login efetuado com sucesso!');
      setMessageType('success');
    } else {
      setMessage('Credenciais inválidas. Por favor, tente novamente.');
      setMessageType('error');
    }
  };

  setTimeout(() => {
    setMessage('');
    setMessageType(null);
  }, 5000);

  return (
    <LoginFormContainer>
       <Title>Fazer Login</Title>
      {message && <Message type={messageType}>{message}</Message>}
      <Input
        type="email"
        placeholder="Digite seu email:"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Digite sua senha:"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={CreateSessionLogin}>Login</Button>
    </LoginFormContainer>
  );
};

export default Login;
