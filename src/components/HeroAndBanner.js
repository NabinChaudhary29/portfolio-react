import React from 'react'
import { HeroImage } from './image'

export const HeroAndBanner = () => {
  return (
    <div>
        <section className="hero-section container" id="hero">
            <div className="grid hero">
                <div className="left flex">
                    <div>
                        Hi I'm <span>Nabin Chaudhary</span>
                    </div>
                    <div className="tag">Soft. Engineer</div>
                    <p>I love coding and have hobby of paly basketball</p>
                    <div>
                        <a href={HeroImage} download>
                            <button>Download CV <i className="fa-solid fa-download"></i></button>
                        </a>
                    </div>
                </div>
                
                <div className="right flex">
                    <img src={HeroImage} alt="nabin standing"/>
                </div>
            </div>
        </section>
        
        <section className="flex banner container">
            <div className="flex info-content">
                <div className="flex-center icon-container">
                    <i className="fa-solid fa-award"></i>
                </div>
                <div>
                <span>IT</span>
                <p>Graduation</p>
                </div>
            </div>
            <div className="info-divider"></div>
            <div className="flex info-content">
                <div className="flex-center icon-container">
                    <i className="fa-solid fa-award"></i>
                </div>
                <div>
                <span>5+ Projects</span>
                <p>Completed</p>
                </div>
            </div>
            <div className="info-divider"></div>
            <div className="flex info-content">
                <div className="flex-center icon-container">
                    <i className="fa-solid fa-award"></i>
                </div>
                <div>
                <span>1+ Year</span>
                <p>Experience</p>
                </div>
            </div>
        </section>
    </div>
  )
}
