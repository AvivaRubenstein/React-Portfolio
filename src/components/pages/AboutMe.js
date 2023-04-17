import React from 'react';
import { colors } from '../../utils/helpers';

const styles = {
  image : {
    height: '30vh',
    width: '30vh'
  },
  heading : {
    color: colors['Atomic-tangerine']
  }
  
}
export default function AboutMe() {
  return (
    <div>
      <h1 style={styles.heading}>About Me:</h1>
      <img src="https://thenounproject.com/api/private/icons/2416939/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkPK-bUEmCqE2tRcb5U35SocV_D2x006yoOMNk9-Cq-cN2367o9PmvDOKSvBsV6ZFYH-mtVXiO_W6ug0nJcQ5r06lCSA%3D%3D" alt="Avatar" style={styles.image}></img>
      <p>
        My name is Aviva Rubenstein, and I am a Junior Software Developer......
      </p>
    </div>
  );
}
