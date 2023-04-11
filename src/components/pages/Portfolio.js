import React from 'react';
import Projects from '../Projects';

const cosmic = require('../../Assets/CosmicDucks.png');
const crude = require('../../Assets/NoCrudeFood.png');
const notes = require('../../Assets/NoteTaker.png');
const scheduler = require('../../Assets/Scheduler.png');
const blog = require('../../Assets/TechBlog.png');
const weather = require('../../Assets/WeatherApp.png');

const projects = 
[
{
  id: 1,
  title: "No Crude Food",
  gitHub: "https://github.com/AlexWiederman/No_Crude_Food",
  link: "https://young-mountain-95021.herokuapp.com/",
  image: crude,
  alt: "Application Screenshot"
},
{
  id: 2,
  title: "Tech Blog",
  gitHub: "https://github.com/AvivaRubenstein/MVC-Tech-Blog",
  link: "https://radiant-everglades-93421.herokuapp.com/ ",
  image: blog,
  alt: "Application Screenshot"
},
{
  id: 3,
  title: "Educational Search Site",
  gitHub: "https://github.com/crystal-coding-time/supreme-octo-system",
  link: "https://crystal-coding-time.github.io/supreme-octo-system/",
  image: cosmic,
  alt: "Application Screenshot"
},
{
  id: 4,
  title: "Weather Dashboard",
  gitHub: "https://github.com/AvivaRubenstein/weather-dashboard",
  link: "https://avivarubenstein.github.io/weather-dashboard/",
  image: weather,
  alt: "Application Screenshot"
},
{
  id: 5,
  title: "Text Editor Progressive Web Application",
  gitHub: "https://github.com/AvivaRubenstein/Text-Editor-PWA",
  link: " https://nameless-wildwood-53462.herokuapp.com/ ",
  image: notes,
  alt: "Application Screenshot"
},
{
  id: 6,
  title: "Work Day Scheduler",
  gitHub: "https://github.com/AvivaRubenstein/work-day-scheduler",
  link: "https://avivarubenstein.github.io/work-day-scheduler/",
  image: scheduler,
  alt: "Application Screenshot"
},
]


export default function Portfolio() {
  return (
    <div>
      <h1 className='text-center'>Portfolio</h1>
        {/* map through projects here, and pass in */}
        <Projects projects={projects}/>
    </div>
  );
}
