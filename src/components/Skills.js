import React from 'react'
import { Title } from './Title'

export const Skills = () => {
  return (
    <>
        <div className="skills" id="skills">
            <Title title="Skills"/>
            <div className="container flex skills-container">
                <div>
                    <i className="fa-brands fa-html5" style={{color:"orange"}}></i>
                    <span>HTML</span>
                </div>
                <div>
                    <i className="fa-brands fa-css3-alt" style={{color:"blue"}}></i>
                    <span>CSS</span>
                </div>
                <div>
                    <i className="fa-brands fa-js" style={{color:"yellow"}}></i>
                    <span>JavaScript</span>
                </div>
                <div>
                    <i className="fa-brands fa-react" style={{color:"skyblue"}}></i>
                    <span>REACT</span>
                </div>
                <div>
                    <i className="fa-brands fa-github" style={{color:"black"}}></i>
                    <span>GITHUB</span>
                </div>
                <div>
                    <i className="fa-brands fa-figma" style={{color:"purple"}}></i>
                    <span>Figma</span>
                </div>
            </div>
        </div>
    </>
  )
}
