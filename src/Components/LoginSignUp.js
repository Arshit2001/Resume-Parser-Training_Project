import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for the form container, input fields, buttons, and toggle text
const FormContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
  padding: 30px;
  text-align: center;
`;

const InputField = styled.input`
  width: 100%;
  padding: 14px;
  margin-bottom: 20px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  color: #495057;
  background-color: #fff;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    outline: none;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const ActionButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ToggleText = styled.p`
  margin-top: 20px;
  color: #6c757d;
`;

const ToggleLink = styled.span`
  color: #007bff;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

const FormHeader = styled.h2`
  margin-bottom: 20px;
  color: #007bff;
`;

const LoginSignUp = ({ onLogin, onSignUp }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = () => {
    onLogin(email, password);
  };

  const handleSignUp = () => {
    onSignUp(name, email, password);
  };

  return (
    <FormContainer>
      <FormHeader>{isLogin ? 'Login' : 'Sign Up'}</FormHeader>
      {!isLogin && <InputField type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />}
      <InputField type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <InputField type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <ActionButton onClick={isLogin ? handleLogin : handleSignUp}>{isLogin ? 'Login' : 'Sign Up'}</ActionButton>
      <ToggleText>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <ToggleLink onClick={handleToggle}>{isLogin ? 'Sign Up' : 'Login'}</ToggleLink>
      </ToggleText>
    </FormContainer>
  );
};

export default LoginSignUp;
