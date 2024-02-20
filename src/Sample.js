import React from 'react';

const Sample = ({ parsedContent }) => {
  console.log("inside here", parsedContent);

  // Check if parsedContent is undefined or null
  if (!parsedContent) {
    return <div>No content available</div>; // Handle case where parsedContent is undefined or null
  }

  return (
    <div>
      <h1>Profile</h1>
      {/* Check if each section of data exists and render it accordingly */}
      <section>
        <h2>Personal Information</h2>
        <ul>
          {/* Use optional chaining to prevent errors if parsedContent['Personal Information'] is undefined */}
          {parsedContent['Personal Information'] && Object.entries(parsedContent['Personal Information']).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Interests</h2>
        <ul>
          {parsedContent['Interests'] && parsedContent['Interests'].map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Currently Learning</h2>
        <ul>
          {parsedContent['Currently Learning'] && parsedContent['Currently Learning'].map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          {Object.entries(parsedContent['Skills'] || {}).map(([category, skills]) => (
            <li key={category}>
              <strong>{category}:</strong> {skills.join(', ')}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        {parsedContent['Education'] && parsedContent['Education'].map((education, index) => (
          <div key={index}>
            <h3>{education.Degree}</h3>
            <p><strong>Institution:</strong> {education.Institution}</p>
            <p><strong>Duration:</strong> {education.Duration}</p>
            <p><strong>Courses:</strong> {education.Courses.join(', ')}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Certificates</h2>
        {parsedContent['Certificates'] && parsedContent['Certificates'].map((certificate, index) => (
          <div key={index}>
            <p><strong>Name:</strong> {certificate.Name}</p>
            <p><strong>Duration:</strong> {certificate.Duration}</p>
            <p><strong>Issuer:</strong> {certificate.Issuer}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Work Experience</h2>
        {parsedContent['Work Experience'] && parsedContent['Work Experience'].map((experience, index) => (
          <div key={index}>
            <p><strong>Position:</strong> {experience.Position}</p>
            <p><strong>Company:</strong> {experience.Company}</p>
            <p><strong>Duration:</strong> {experience.Duration}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Languages</h2>
        <ul>
          {Object.entries(parsedContent['Languages'] || {}).map(([language, proficiency]) => (
            <li key={language}>
              <strong>{language}:</strong> {proficiency}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Memberships</h2>
        {parsedContent['Memberships'] && parsedContent['Memberships'].map((membership, index) => (
          <div key={index}>
            <p><strong>Organization:</strong> {membership.Organization}</p>
            <p><strong>Duration:</strong> {membership.Duration}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Sample;


// import React from 'react';

// const Sample = ({ parsedContent }) => {
//   console.log("parsedContent:", parsedContent); // Debugging log

//   // Check if parsedContent is not defined or not an object
//   if (!parsedContent || typeof parsedContent !== 'object') {
//     return <div>Error: Invalid data format</div>; // Handle case where parsedContent is not defined or not an object
//   }

//   // Check if parsedContent is an empty object
//   if (Object.keys(parsedContent).length === 0) {
//     return <div>No content available</div>; // Handle case where parsedContent is an empty object
//   }

//   return (
//     <div>
//       <h1>Profile</h1>
//       {Object.keys(parsedContent).map((sectionKey, index) => (
//         <section key={index}>
//           <h2>{sectionKey}</h2>
//           {typeof parsedContent[sectionKey] === 'object' ? (
//             <ul>
//               {Object.entries(parsedContent[sectionKey]).map(([key, value], idx) => (
//                 <li key={idx}>
//                   <strong>{key}:</strong> {Array.isArray(value) ? value.join(', ') : value}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>{parsedContent[sectionKey]}</p>
//           )}
//         </section>
//       ))}
//     </div>
//   );
// };

// export default Sample;
