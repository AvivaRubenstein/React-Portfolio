import React from "react";
import {colors }from '../utils/helpers'
const styles = {
  cardStyles : {
    background: colors.Vanilla,
    border: `2px solid ${colors["Atomic-tangerine"]}`,
    paddingTop: '50px',
    paddingBottom: '50px',
    paddingRight: '30px',
    paddingLeft: '30px',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  buttons : {
    backgroundColor: colors["Uranian-Blue"],
    border:`1px solid ${colors.Moonstone}`,
    borderRadius: '15px',
    height: 'min-content',
    margin: '5px',
  },
  buttonCard: {
    // spaces the buttons apart evenly
    alignItems: 'space-between'
  }
}

function Project(props){
  return (
    <div className="col-md-6 col-lg-4 col-xl-4" key={props.item.id} style={styles.cardStyles}>
          <h4>{props.item.title}</h4>
          <img src={props.item.image} alt={props.item.alt} className="img-fluid img-thumbnail" ></img>
          <br></br>
          <div style={styles.buttonCard}>
          <a className="btn" href={props.item.gitHub} style={styles.buttons}>Visit GitHub Repository</a>
          <br></br>
          <a className="btn" href={props.item.link} style={styles.buttons}>Visit Deployed Application</a>
          </div>
    </div>
  )
}
// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Projects(props) {
  return (
    <div className="container container-fluid text-center ">
    <div className="row">
      {/* Here we map over each project in the array and return a new Project component for each one of the projects */}
      {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
      {props.projects.map(item => (
        <Project item={item}/>
      ))}
   
    </div>
    </div>
  );
}

export default Projects; 
