// import React from 'react';

// const ResumeInsightsPage = ({ parsedContent }) => {
//   return (
//     <div>
//       <h1>Resume Insights</h1>
//       <p>{parsedContent}</p>
//     </div>
//   );
// };

// export default ResumeInsightsPage;

import React from 'react';
import Sample from '../Sample';


const ResumeInsightsPage = ({ parsedContent }) => {
  return (
    <div>
      <h1>Resume Insights</h1>
      <Sample parsedContent={parsedContent}/>
      {/* <p>{parsedContent}</p> */}
    </div>
  );
};

export default ResumeInsightsPage;





