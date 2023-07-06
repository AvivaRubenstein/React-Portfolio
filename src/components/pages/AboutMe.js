import React from 'react';
import { colors } from '../../utils/helpers';
import avatar from '../../Assets/Avatar image.png';
import '../../Assets/styles/aboutMe.css';

//this will allow us to set the style of the JSX/HTML without a separate CSS file
const styles = {
  image : {
    height: '30vh',
    width: '30vh'
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
        <div className="col about-me-description">
      <h1 style={styles.heading}>About Me:</h1>
      <img src={avatar} alt="Avatar" style={styles.image}></img>
      <p>
        My name is Aviva Rubenstein, and I am a Junior Software Developer.  Please check out my projects, and feel free to reach out through the contact page, or by emailing me at aviva.d.rubenstein@gmail.com
      </p>
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
