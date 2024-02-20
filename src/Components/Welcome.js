import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  text-align: center;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Align content to the right */
`;

const Heading = styled.h2`
  color: #073763; /* Dark green */
  font-size: 32px;
  margin-bottom: 20px;
  margin-right:219px;
`;

const Content = styled.p`
  margin-right:180px;
  font-size: 18px;
  color: #333; /* Dark grey */
  line-height: 1.5;
  margin-left :150px;
`;

const Welcome = ({ name }) => {
  return (
    <Container>
      
      <Heading>Hello, {name} !</Heading>
      <Content>Welcome to Resume Parser. Upload your resume to get started.</Content>
    </Container>
  );
};

export default Welcome;
