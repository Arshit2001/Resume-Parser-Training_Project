// import React, { useState } from 'react';
// import styled, { keyframes } from 'styled-components';
// import ResumeInsightsPage from './Components/ResumeInsightsPage'; // Import the new component

// const Card = styled.div`
//   background-color: #f9f9f9;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   padding: 20px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   max-width: 600px;
//   margin: 50px auto;
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
//   padding: 10px;
//   background-color: #4caf50; /* Green */
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #45a049; /* Darker Green */
//   }
// `;

// const spinAnimation = keyframes`
//   to {
//     transform: rotate(360deg);
//   }
// `;

// const Loader = styled.div`
//   border: 4px solid rgba(0, 0, 0, 0.1);
//   border-left-color: #4caf50; /* Green */
//   border-radius: 50%;
//   width: 40px;
//   height: 40px;
//   animation: ${spinAnimation} 1s linear infinite;
//   margin: 20px auto;
// `;

// const Heading = styled.h2`
//   text-align: center;
//   margin-bottom: 20px;
//   color: #333; /* Dark Grey */
// `;

// const FileUploader = () => {
//   const [file, setFile] = useState(null);
//   const [parsedContent, setParsedContent] = useState(null); // New state to hold parsed content
//   const [loading, setLoading] = useState(false); // State to track loading

//   const handleFileChange = (event) => {
//     const uploadedFile = event.target.files[0];
//     setFile(uploadedFile);
//   };

//   const handleParse = async () => {
//     if (file) {
//       setLoading(true); // Set loading to true while fetching data
//       const formData = new FormData();
//       formData.append('file', file);

//       try {
//         const response = await fetch('http://127.0.0.1:8000/api/parse/resume/', {
//           method: 'POST',
//           body: formData
//         });

//         const responseData = await response.json();
//         console.log('Response from backend:', responseData);
//         setParsedContent(responseData); // Set parsed content to state
//       } catch (error) {
//         console.error('Error parsing file:', error);
//         // Handle error
//       } finally {
//         setLoading(false); // Set loading to false when request completes
//       }
//     } else {
//       alert("Please upload a file first.");
//     }
//   };

//   return (
//     <Card>
//       <Heading>File Uploader</Heading>
//       <Input type="file" onChange={handleFileChange} />
//       <Button onClick={handleParse}>Parse</Button>
//       {loading && <Loader />} {/* Show loader if loading is true */}
//       {parsedContent && !loading && <ResumeInsightsPage parsedContent={parsedContent} />} {/* Render ResumeInsightsPage if parsedContent is available and loading is false */}
//     </Card>
//   );
// };

// export default FileUploader;

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
    background-color: #fbf5e9; /* Light Grey */
    color: #333; /* Default text color */
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
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
        {/* Conditionally render components based on loggedInUser */}
        {loggedInUser ? (
          <>
            <Welcome name={loggedInUser} />
            <FileUploader />
          </>
        ) : (
          <LoginSignUp onLogin={handleLogin} onSignUp={handleSignUp} error={error} />
        )}
      </Container>
    </>
  );
};

export default App;
