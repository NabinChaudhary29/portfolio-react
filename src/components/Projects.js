import React from 'react'
import { Project1, Project2, Project3, Project4, Project5, Project6,AboutMeImage } from "./image.js";
import { Title } from './Title.js';

export const Projects = () => {
  return (
    <div>
        <section className="projects container" id="projects">
            <Title titl="My Projects"/>
            <div className="grid project-container">
                <div className="project-card">
                    <div className="top">
                         <img src={Project6} alt="no-image" width="100%"/>
                    </div>
                    <div className="bottom container">
                        <div className="links">
                            <a href=""><i className="fa-brands fa-github"></i></a>
                            <a href=""><i className="fa-brands fa-chrome"></i></a>
                        </div>
                        <h3>Personal Portfolio</h3>
                        <p>Techstack: HTML, CSS</p>
                        <p>11 August 2024</p>
                    </div>
                </div>

                <div className="project-card">
                    <div className="top">
                         <img src={Project1} alt="no-image" width="100%"/>
                    </div>
                    <div className="bottom container">
                        <div className="links">
                            <a href=""><i className="fa-brands fa-github"></i></a>
                            <a href=""><i className="fa-brands fa-chrome"></i></a>
                        </div>
                        <h3>Search Engine</h3>
                        <p>Techstack: HTML, CSS</p>
                        <p>11 August 2024</p>
                    </div>
                </div>

                <div className="project-card">
                    <div className="top">
                         <img src={Project2} alt="no-image" width="100%"/>
                    </div>
                    <div className="bottom container">
                        <div className="links">
                            <a href=""><i className="fa-brands fa-github"></i></a>
                            <a href=""><i className="fa-brands fa-chrome"></i></a>
                        </div>
                        <h3>Blog</h3>
                        <p>Techstack: HTML, CSS</p>
                        <p>11 August 2024</p>
                    </div>
                </div>

                <div className="project-card">
                    <div className="top">
                         <img src={Project3} alt="no-image" width="100%"/>
                    </div>
                    <div className="bottom container">
                        <div className="links">
                            <a href=""><i className="fa-brands fa-github"></i></a>
                            <a href=""><i className="fa-brands fa-chrome"></i></a>
                        </div>
                        <h3>Parallex</h3>
                        <p>Techstack: HTML, CSS</p>
                        <p>11 August 2024</p>
                    </div>
                </div>

                <div className="project-card">
                    <div className="top">
                         <img src={Project4} alt="no-image" width="100%"/>
                    </div>
                    <div className="bottom container">
                        <div className="links">
                            <a href=""><i className="fa-brands fa-github"></i></a>
                            <a href=""><i className="fa-brands fa-chrome"></i></a>
                        </div>
                        <h3>Simple Quiz Form</h3>
                        <p>Techstack: HTML, CSS</p>
                        <p>11 August 2024</p>
                    </div>
                </div>

                <div className="project-card">
                    <div className="top">
                         <img src={Project5} alt="no-image" width="100%"/>
                    </div>
                    <div className="bottom container">
                        <div className="links">
                            <a href=""><i className="fa-brands fa-github"></i></a>
                            <a href=""><i className="fa-brands fa-chrome"></i></a>
                        </div>
                        <h3>Sign Up Form</h3>
                        <p>Techstack: HTML, CSS</p>
                        <p>11 August 2024</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
