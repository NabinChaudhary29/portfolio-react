import React from 'react'
import { Project1, Project2, Project3, Project4, Project5, Project6 } from "./image.js";
import { Title } from './Title.js';
import { Card } from './Card.js';

export const Projects = () => {
    const projects =[
        {
        image:Project6,
        github:"",
        url:"",
        title:"Personal Portfolio",
        description:"Techstack: Html,CSS,React",
        date:"11 August 2024"  
        },
        {
        image:Project1,
        github:"",
        url:"",
        title:"Search Engine",
        description:"Techstack: Html,CSS",
        date:"11 August 2024" 
        },
        {
        image:Project2,
        github:"",
        url:"",
        title:"Blog",
        description:"Techstack: Html,CSS",
        date:"11 August 2024" 
        },
        {
        image:Project3,
        github:"",
        url:"",
        title:"Parallex",
        description:"Techstack: Html,CSS",
        date:"11 August 2024" 
        },
        {
        image:Project4,
        github:"",
        url:"",
        title:"Simple Quiz Form",
        description:"Techstack: Html,CSS",
        date:"11 August 2024" 
        },
        {
        image:Project5,
        github:"",
        url:"",
        title:"Sign Up Form",
        description:"Techstack: Html,CSS",
        date:"11 August 2024" 
        }
    ]
  return (
    <div>
        <section className="projects container" id="projects">
            <Title title="My Projects"/>
            <div className="grid project-container">
                {
                    projects.map((item,i)=> <Card key={i} {...item}/>)
                }
            </div>
        </section>
    </div>
  )
}
