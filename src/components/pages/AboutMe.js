import React from 'react';
import { colors } from '../../utils/helpers';
import pic from '../../Assets/profilephoto.jpeg';
import '../../Assets/styles/aboutMe.css';

//this will allow us to set the style of the JSX/HTML without a separate CSS file
const styles = {
  image : {
    width: '18vw',
    borderRadius: '150px'
  },
  heading : {
    color: colors.Rust
  },
  
}
export default function AboutMe() {
  return (
    <div>
    <div className="container">
      <div className="row">
        <div className="col ">
      <h1 className="about-me" style={styles.heading}>About Me:</h1>
        </div>
        <div className="row">
      <p className='col-6 ' id='descr'>
        Hi!  My name is Aviva Rubenstein, and I am a Full-Stack Software Developer with experience in HTML/CSS/JavaScript and Java, as well as React, MySQL, NoSQL, APIs, and the MERN stack.   I am passionate about learning new technologies and about building code that works seamlessly for the end-user.  I am a problem-solver by nature, and I have experience working closely with teammates and superiors on projects to deliver results.  Please check out my projects, and feel free to reach out through the contact page, or by emailing me at aviva.d.rubenstein@gmail.com
      </p>
      <div className='col-6 about-me'>
      <img src={pic} alt="Photo" style={styles.image}></img>
          </div>
        </div>
      </div>
    </div>
    
      <h5 id="techSkillsHeading">Technical skills:</h5>
    <div className="icons-box container">
      <div className="row">
        <div className="col icons-box">
      <i className="devicon-html5-plain-wordmark icon"></i>
      <i className="devicon-css3-plain-wordmark icon"></i>
      <i className="devicon-javascript-plain icon"></i>
      <i className="devicon-java-plain-wordmark icon"></i>
      <i className="devicon-nodejs-plain-wordmark icon"></i>
      <i className="devicon-npm-original-wordmark icon"></i>
      <i className="devicon-jquery-plain-wordmark icon"></i>
      <i className="devicon-mongodb-plain-wordmark colored icon"></i>
      <i className="devicon-sequelize-plain-wordmark icon"></i> 
      <i className="devicon-mysql-plain-wordmark icon"></i>  
      <i className="devicon-github-original-wordmark icon"></i>
      <i className="devicon-graphql-plain-wordmark colored icon"></i>
      <i className="devicon-jest-plain icon"></i>
      <i className="devicon-handlebars-plain-wordmark colored icon"></i>
      <i className="devicon-heroku-original-wordmark colored icon"></i>
      <i className="devicon-vscode-plain-wordmark colored icon"></i>
      <i className="devicon-bootstrap-plain-wordmark colored icon"></i>
        </div>
      </div>
    </div>   

    </div>
  );
}
