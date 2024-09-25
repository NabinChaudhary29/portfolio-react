import React from 'react'

export const Footer = () => {
  return (
    <>
        <footer className="flex-center">
            <div className="top flex">
                <div className="links">
                    <h3>Links</h3>
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="socials">
                    <h3>Social Links</h3>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/nabin-chaudhary-223a34183/">LinkedIn</a></li>
                        <li><a href="https://github.com/NabinChaudhary29">Github</a></li>
                        <li><a href="https://www.youtube.com/">Youtube</a></li>
                        <li><a href="https://www.facebook.com/home.php">Facebook</a></li>
                        <li><a href="">Mobile</a></li>
                    </ul>
                </div>
            </div>
            <div className="bottom">
                &copy; Copy right all reserved 2024 ||
                Made by me
            </div>
        </footer>
    </>
  )
}
