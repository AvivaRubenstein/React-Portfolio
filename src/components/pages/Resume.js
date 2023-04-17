import React from 'react';

const resume = require('../../Assets/Aviva-Rubenstein-Resume.pdf')
export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      
      <h3>Technical Skills</h3>
      <ul>
      <li>Frontend: HTML, CSS, JavaScript, JQuery, Bootstrap</li> 
      <li>Backend: MySQL, MongoDB, Express.js, React.js, Node.js, Handlebars, Webpack</li>
      </ul>
      
      
      {/* download attribute makes the target download when the link is clicked */}
      <a className='button btn btn-info' href={resume} download>
          Download My Resume
      </a>
    </div>
  );
}
