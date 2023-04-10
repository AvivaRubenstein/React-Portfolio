import React from 'react';
import Project from '../Project';

const projects = 
[
{
  id: 1,
  title: "No Crude Food",
  gitHub: "https://github.com/AlexWiederman/No_Crude_Food",
  link: "https://young-mountain-95021.herokuapp.com/",
  image: "https://github.com/AlexWiederman/No_Crude_Food/blob/main/public/assets/READMEimage1.png?raw=true",
  alt: "Application Screenshot"
},
{
  id: 2,
  title: "Tech Blog",
  gitHub: "https://github.com/AvivaRubenstein/MVC-Tech-Blog",
  link: "https://radiant-everglades-93421.herokuapp.com/ ",
  image: "https://user-images.githubusercontent.com/113466697/221442944-4496cb1c-8e20-46ce-ba51-a685d60bd0d5.png",
  alt: "Application Screenshot"
},
{
  id: 3,
  title: "Educational Search Site",
  gitHub: "https://github.com/crystal-coding-time/supreme-octo-system",
  link: "https://crystal-coding-time.github.io/supreme-octo-system/",
  image: "/Users/avivarubenstein/Documents/classwork/React-Portfolio/public/Screenshot 2023-04-10 at 5.04.10 PM.png",
  alt: "Application Screenshot"
},
{
  id: 4,
  title: "Weather Dashboard",
  gitHub: "https://github.com/AvivaRubenstein/weather-dashboard",
  link: "https://avivarubenstein.github.io/weather-dashboard/",
  image: "/Users/avivarubenstein/Documents/classwork/React-Portfolio/public/Screenshot 2023-04-10 at 5.07.09 PM.png",
  alt: "Application Screenshot"
},
{
  id: 5,
  title: "Text Editor Progressive Web Application",
  gitHub: "https://github.com/AvivaRubenstein/Text-Editor-PWA",
  link: " https://nameless-wildwood-53462.herokuapp.com/ ",
  image: "/Users/avivarubenstein/Documents/classwork/React-Portfolio/public/Screenshot 2023-04-10 at 5.09.13 PM.png",
  alt: "Application Screenshot"
},
{
  id: 6,
  title: "Work Day Scheduler",
  gitHub: "https://github.com/AvivaRubenstein/work-day-scheduler",
  link: "https://avivarubenstein.github.io/work-day-scheduler/",
  image: "/Users/avivarubenstein/Documents/classwork/React-Portfolio/public/Screenshot 2023-04-10 at 5.09.13 PM.png",
  alt: "Application Screenshot"
},
]


export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        Here we will return multiple Project components
        <Project projects={projects}/>
      </p>
    </div>
  );
}
