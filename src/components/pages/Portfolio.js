import React from 'react';
import Projects from '../Projects';
import {colors} from '../../utils/helpers'

const cosmic = require('../../Assets/CosmicDucks.png');
const crude = require('../../Assets/NoCrudeFood.png');
const scheduler = require('../../Assets/Scheduler.png');
const blog = require('../../Assets/TechBlog.png');
const weather = require('../../Assets/WeatherApp.png');
const openSource = require('../../Assets/Open-Source-Screenshot.png')

const projects = 
[
  {
    id: 1,
      title: "Open Source Job Search App",
      gitHub: "https://github.com/mshaari/open-source",
      link: "https://opensource-00652c620d31.herokuapp.com/",
      image: openSource,
      alt: "Application Screenshot"
    },
{
  id: 2,
  title: "No Crude Food",
  gitHub: "https://github.com/AlexWiederman/No_Crude_Food",
  link: "https://young-mountain-95021.herokuapp.com/",
  image: crude,
  alt: "Application Screenshot"
},
{
  id: 3,
  title: "Tech Blog",
  gitHub: "https://github.com/AvivaRubenstein/MVC-Tech-Blog",
  link: "https://radiant-everglades-93421.herokuapp.com/ ",
  image: blog,
  alt: "Application Screenshot"
},
{
  id: 4,
  title: "Educational Search Site",
  gitHub: "https://github.com/crystal-coding-time/supreme-octo-system",
  link: "https://crystal-coding-time.github.io/supreme-octo-system/",
  image: cosmic,
  alt: "Application Screenshot"
},
{
  id: 5,
  title: "Weather Dashboard",
  gitHub: "https://github.com/AvivaRubenstein/react-weather-app",
  link: "https://avivarubenstein.github.io/react-weather-app/",
  image: weather,
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

];
const styles = {
  heading: {
    color: colors.Rust
  }
}


export default function Portfolio() {
  return (
    <div>
      <h1 className='text-center' style={styles.heading}>Portfolio</h1>
        {/* map through projects here, and pass in */}
        <Projects projects={projects}/>
    </div>
  );
}
