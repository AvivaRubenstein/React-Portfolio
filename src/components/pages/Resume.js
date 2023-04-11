import React from 'react';

const resume = require('../../Assets/Aviva-Rubenstein-Resume.pdf')
export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>
        Here we will attach a copy of my resume, and list my technical skills in front and backend 
      </p>
      {/* download attribute makes the target download when the link is clicked */}
      <a className='button btn btn-info' href={resume} download>
          Download My Resume
      </a>
    </div>
  );
}
