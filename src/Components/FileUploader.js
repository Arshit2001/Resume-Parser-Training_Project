import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ResumeInsightsPage from './ResumeInsightsPage'; // Import the new component

// Define custom colors
const primaryColor = '#1976D2'; // Deep blue
const hoverColor = '#1565C0'; // Darker shade of deep blue
const loaderColor = '#1976D2'; // Deep blue for loader

const Card = styled.div`
  height:auto;
  background: linear-gradient(to right, #64B5F6, #1976D2); /* Gradient background */
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 50px auto;
`;

const Input = styled.input`
  width: calc(100% - 22px);
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${primaryColor}; /* Deep blue button */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${hoverColor}; /* Darker shade of deep blue on hover */
  }
`;

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${loaderColor}; /* Deep blue loader */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spinAnimation} 1s linear infinite;
  margin: 20px auto;
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #fff; /* White heading */
`;


const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [parsedContent, setParsedContent] = useState(null); // New state to hold parsed content
  const [loading, setLoading] = useState(false); // State to track loading

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const handleParse = async () => {
   
    setTimeout(async() => {
      if (file) {
        setLoading(true); // Set loading to true while fetching data
        const formData = new FormData();
        formData.append('file', file);
  
        try {
          const response = await fetch('http://127.0.0.1:8000/api/parse/resume/', {
            method: 'POST',
            body: formData
          });
  
          const responseData = await response.json();
          console.log('Response from backend:', responseData);
          console.log(typeof(responseData));
          setParsedContent(responseData); // Set parsed content to state
        } catch (error) {
          console.error('Error parsing file:', error);
          // Handle error
        } finally {
          setLoading(false); // Set loading to false when request completes
        }
      } else {
        alert("Please upload a file first.");
      }
    }, 2000);
  };

  return (
    <Card>
      <Heading>File Uploader</Heading>
      <Input type="file" onChange={handleFileChange} />
      <Button onClick={handleParse}>Parse</Button>
      {loading && <Loader />} {/* Show loader if loading is true */}
      {parsedContent && !loading && <ResumeInsightsPage parsedContent={parsedContent} />} {/* Render ResumeInsightsPage if parsedContent is available and loading is false */}
    </Card>
  );
};

export default FileUploader;





