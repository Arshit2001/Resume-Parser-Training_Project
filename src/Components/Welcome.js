// // components/Welcome.js
// import React from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   text-align: center;
//   margin-top: 50px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Heading = styled.h2`
//   color: #007bff;
//   font-size: 32px;
//   margin-bottom: 20px;
// `;

// const Content = styled.p`
//   font-size: 18px;
//   color: #555;
//   line-height: 1.5;
// `;

// const Welcome = ({ name }) => {
//   return (
//     <Container>
//       <Heading>Welcome, {name} !</Heading>
//       <Content>Welcome to Resume Parser. Upload your resume to get started.</Content>
//     </Container>
//   );
// };

// export default Welcome;

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
  margin-right:120px;
`;

const Content = styled.p`
  font-size: 18px;
  color: #333; /* Dark grey */
  line-height: 1.5;
  margin-left :150px;
`;

const Welcome = ({ name }) => {
  return (
    <Container>
      <Heading>Welcome, {name} !</Heading>
      <Content>Welcome to Resume Parser. Upload your resume to get started.</Content>
    </Container>
  );
};

export default Welcome;
