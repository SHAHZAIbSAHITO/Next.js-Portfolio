
import React from 'react'
import Heading from './Heading'
import Card from './Card';
import '../app/styles/projects.css'

const data = [
    {
        id: 0,
        title: "Resume Builder",
        desc: "A HTML & TypeScript",
        img: "/project_01.png",
        tags: ["HTML", "CSS", "Typescript"],

    },
    {
        id:1,
        title:"Countdown Timer",
        desc: "A Next.js and Type script powered website to track time",
        img: "/project_02.png",
        tags: ["Next.JS", "Node", "CSS", "Typescript"],
    },
    {
    id:1,
        title:"Portfolio",
        desc: "Portfolio",
        img: "/project_03.png",
        tags: ["HTML", "CSS", "Typescript"],
}
];

const Projects = () => {
  return (
    <div id='projects' className='projects-container'>
        <Heading title='My Projects' />
        <div className='projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
      
    </div>
  )
}

export default Projects;
