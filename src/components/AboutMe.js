import React from 'react'
import { AboutMeImage } from "./image.js";
import { Title } from './Title.js';

export const AboutMe = () => {
  return (
    <>
        <section className="about" id="about">
            <Title title="About Me"/>
            <div className="container flex about-content">
                <div className="flex-center myImg">
                    <img src={AboutMeImage} alt="" width="100%"/>
                </div>
                <div className="my-bio container">
                    <h2>Nabin Chaudhary</h2>
                    <p>Hi, I'm Nabin Chaudhary! With a Master of Technology in Software Engineering and a Bachelor’s in Electronics and Communication, I have a solid foundation in both hardware and software. Currently, I am further expanding my expertise as a Full Stack Developer at Dented Code Academy. Passionate about technology and innovation, I am excited to connect with like-minded professionals and explore opportunities to make a significant impact in the tech industry.</p>
                    <p>Sydney, Australia</p>
                    <div>
                        <div className="tag">Interest</div>
                        <div className="flex">
                            <span>Coding</span>
                            <span>Basketball</span>
                            <span>Movies</span>
                            <span>Cooking</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </>
  )
}
