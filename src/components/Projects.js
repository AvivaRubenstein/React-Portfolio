import React from "react";


function Project(props){
  return (
    <div className="col">
    <li className="list-group-item" key={props.item.id}>
          <h2>{props.item.title}</h2>
          <img src={props.item.image} alt={props.item.alt} className="img-fluid img-thumbnail"></img>
          <br></br>
          <a href={props.item.gitHub}>Link to GitHub Repository</a>
          <br></br>
          <a href={props.item.link}>Link to Deployed Application</a>
          
        </li>
    </div>
  )
}
// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Projects(props) {
  return (
    <div className="container">
    <div className="row">
    <ul className="list-group">
      {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
      {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
      {props.projects.map(item => (
        <Project item={item}/>
      ))}
    </ul>
    </div>
    </div>
  );
}

export default Projects; 
