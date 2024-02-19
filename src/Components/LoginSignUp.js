// // components/LoginSignUp.js
// import React, { useState } from 'react';
// import styled from 'styled-components';

// const Card = styled.div`
//   background-color:white;
//   border: 1px solid #e6e6e6;
//   border-radius: 8px;
//   padding: 20px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   max-width: 400px;
//   margin: 0 auto;
// `;

// const Input = styled.input`
//   width: calc(100% - 22px);
//   padding: 10px;
//   margin-bottom: 20px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 12px;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const ToggleText = styled.p`
//   text-align: center;
//   margin-top: 20px;
// `;

// const ToggleLink = styled.span`
//   color: #007bff;
//   cursor: pointer;
//   transition: color 0.3s ease;

//   &:hover {
//     color: #0056b3;
//   }
// `;

// const LoginSignUp = ({ onLogin, onSignUp }) => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleToggle = () => {
//     setIsLogin(!isLogin);
//   };

//   const handleLogin = () => {
//     // Your login logic here
//     onLogin(email,password);
//   };

//   const handleSignUp = () => {
//     // Your sign up logic here
//     onSignUp(name, email, password);
//   };

//   return (
//     <Card>
//       {isLogin ? (
//         <>
//           <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#007bff' }}>Login</h2>
//           <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
//           <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
//           <Button onClick={handleLogin}>Login</Button>
//           <ToggleText>
//             Don't have an account? <ToggleLink onClick={handleToggle}>Sign Up</ToggleLink>
//           </ToggleText>
//         </>
//       ) : (
//         <>
//           <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#007bff' }}>Sign Up</h2>
//           <Input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
//           <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
//           <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
//           <Button onClick={handleSignUp}>Sign Up</Button>
//           <ToggleText>
//             Already have an account? <ToggleLink onClick={handleToggle}>Login</ToggleLink>
//           </ToggleText>
//         </>
//       )}
//     </Card>
//   );
// };

// export default LoginSignUp;


import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for the form container, input fields, buttons, and toggle text
const FormContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const ActionButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ToggleText = styled.p`
  text-align: center;
  margin-top: 20px;
  color: #333;
`;

const ToggleLink = styled.span`
  color: #007bff;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
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
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#007bff' }}>{isLogin ? 'Login' : 'Sign Up'}</h2>
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


