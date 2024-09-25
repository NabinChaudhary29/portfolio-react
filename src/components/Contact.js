import React from 'react'
import { Title } from './Title'

export const Contact = () => {
  return (
    <>
        <section className="contact container" id="contact">
            <Title title="Conatct"/>

            <div className="flex social">
              <a href="https://www.linkedin.com/in/nabin-chaudhary-223a34183/"><i className="fa-brands fa-linkedin" ></i></a>
              <a href="hhttps://github.com/dashboard"><i className="fa-brands fa-github"></i></a>
              <a href=""><i className="fa-brands fa-facebook"></i><i></i></a>
              <a href="https://www.youtube.com/"><i className="fa-brands fa-youtube" ></i></a>
              <a href="0416869849"><i className="fa-solid fa-mobile"></i></a>  
            </div>
            <h3>OR</h3>
            
            <div className="flex-center">
                <a href="https://gmail.com/" className="email-section flex-center">
                    <span>youremail@gmail.com</span>
                    <div className="email-icon flex-center">
                        <i className="fa-solid fa-paper-plane"></i>
                    </div>
                </a>
            </div>
        </section>
    </>
  )
}
