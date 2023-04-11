import React from "react";


function Project(props){
  return (
    <div className="col-4">
    <li className="list-group-item" key={props.item.id}>
          <h4>{props.item.title}</h4>
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
    <div className="container container-fluid">
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
