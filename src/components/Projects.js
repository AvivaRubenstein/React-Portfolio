import React from "react";
import {colors }from '../utils/helpers'
const styles = {
  cardStyles : {
    background: colors.Vanilla,
    border: `1px solid ${colors["Atomic-tangerine"]}`,
    paddingTop: '50px',
    paddingBottom: '50px',
    paddingRight: '30px',
    paddingLeft: '30px'
  }
}

function Project(props){
  return (
    <div className="col-md-6 col-lg-4 col-xl-4" key={props.item.id} style={styles.cardStyles}>
          <h4>{props.item.title}</h4>
          <img src={props.item.image} alt={props.item.alt} className="img-fluid img-thumbnail"></img>
          <br></br>
          <a href={props.item.gitHub}>Link to GitHub Repository</a>
          <br></br>
          <a href={props.item.link}>Link to Deployed Application</a>
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
