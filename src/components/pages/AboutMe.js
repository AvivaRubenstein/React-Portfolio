import React from 'react';
import { colors } from '../../utils/helpers';
import avatar from '../../Assets/Avatar image.png'

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
      <h1 style={styles.heading}>About Me:</h1>
      <img src={avatar} alt="Avatar" style={styles.image}></img>
      <p>
        My name is Aviva Rubenstein, and I am a Junior Software Developer.  Please check out my projects, and feel free to reach out through the contact page!
      </p>
    </div>
  );
}
