import React from "react";

function Project(props){
  return (
    <li className="list-group-item" key={props.id}>
          <h2>{props.title}</h2>
          <img src={props.image} alt={props.alt}></img>
          <h3>{props.github}</h3>
          <h3>{props.link}</h3>
          
        </li>
  )
}
// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Projects(props) {
  return (
    <ul className="list-group">
      {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
      {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
      {props.projects.map(item => (
        <Project item={item}/>
      ))}
    </ul>
  );
}

export default Projects; 
