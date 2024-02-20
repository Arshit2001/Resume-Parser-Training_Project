import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import LoginSignUp from './Components/LoginSignUp';
import Welcome from './Components/Welcome';
import FileUploader from './Components/FileUploader';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4; /* Light Grey */
    color: #333; /* Default text color */
  }
`;

const Container = styled.div`
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 80%;
  max-width: 600px;
  padding: 20px;
  background-color: #fff; /* White background */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Shadow effect */
`;

const Heading = styled.h1`
  color: #007bff; /* Vibrant Blue */
  text-align: center;
`;

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [error, setError] = useState(null);

  const handleLogin = async (email, password) => {
    const data = {
      email,
      password
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/parse/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Response data:', responseData); // Log the response data for debugging
        if (responseData.message === 'TRUE') { // Ensure the message is 'TRUE' (uppercase)
          setLoggedInUser(responseData.user); // Set loggedInUser if login is successful
        } else {
          setError('Login failed: Incorrect email or password.');
        }
      } else {
        alert ("Invalid Credentials.")
        setError('Login failed: Something went wrong.');
      }
    } catch (error) {
      alert ("Something went wrong.")
      console.error('Error during login:', error);
      setError('Login failed: Something went wrong.');
    }
  };

  const handleSignUp = async (name, email, password) => {
    const data = {
      name,
      email,
      password
    };
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/parse/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.status === 200) {
        // Sign up successful
        alert('Signed up successfully!');
        // Redirect to login page
        window.location.href = '/login'; // Adjust the URL as needed
      } else if (response.status === 409) {
        // Email already registered
        alert('Email already registered.');
      } else {
        // Some other error occurred
        alert('Sign up failed: Something went wrong.');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      alert('Sign up failed: Something went wrong.');
    }
  };
  

  return (
    <>
      <GlobalStyle />
      <Container>
        <AppContainer>
          <Heading>The Resume Parser App</Heading>
          {/* Conditionally render components based on loggedInUser */}
          {loggedInUser ? (
            <>
              <Welcome name={loggedInUser} />
              <FileUploader />
            </>
          ) : (
            <LoginSignUp onLogin={handleLogin} onSignUp={handleSignUp} error={error} />
          )}
        </AppContainer>
      </Container>
    </>
  );
};

export default App;
