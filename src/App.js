import logo from './logo.svg';
import p1Image from './assets/p-1.png'
import { Project1, Project2, Project3, Project4 } from "./components/image.js";
import './App.css';

function App() {
  return (
    <div>
      {/* <!-- dark mode tooggler --> */}
    <input type="checkbox" id="toggle"/>
    <div className="wrapper">
        <label for="toggle"> <i className="fa-solid fa-circle-half-stroke"></i></label>
        {/* <!-- navbar --> */}
        <header>
            <div className="header container flex">
                <div className="logo flex">
                    <div>Nabin</div>
                    <div className="line">Full-stack Developer</div>
                </div>
                <label for="hamburgerMenu">
                    <i className="fa-solid fa-bars"></i>
                </label>

                <input type="checkbox" id="hamburgerMenu"/>
                <div className="menu">
                    <ul className="flex navigation">
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
        {/* <!-- hero section --> */}
        <section className="hero-section container" id="hero">
            <div className="grid hero">
                <div className="left flex">
                    <div>
                        Hi I'm <span>Nabin Chaudhary</span>
                    </div>
                    <div className="tag">Soft. Engineer</div>
                    <p>I love coding and have hobby of paly basketball</p>
                    <div>
                        <a href="assets/img1.png" download>
                            <button>Download CV <i className="fa-solid fa-download"></i></button>
                        </a>
                    </div>
                </div>
                
                <div className="right flex">
                    <img src="" alt="nabin standing"/>
                </div>
            </div>
        </section>
        {/* <!-- banner section --> */}
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
        {/* <!-- skills section --> */}
        <div className="skills" id="skills">
            <h2 className="title">
                <span>Skills</span>
            </h2>
            <div className="container flex skills-container">
                <div>
                    <i className="fa-brands fa-html5" HtmlStyle={{color:"orange"}}></i>
                    <span>HTML</span>
                </div>
                <div>
                    <i className="fa-brands fa-css3-alt" HtmlStyle={{color:"blue"}}></i>
                    <span>CSS</span>
                </div>
                <div>
                    <i className="fa-brands fa-js" HtmlStyle={{color:"yellow"}}></i>
                    <span>JavaScript</span>
                </div>
                <div>
                    <i className="fa-brands fa-react" HtmlStyle={{color:"skyblue"}}></i>
                    <span>REACT</span>
                </div>
                <div>
                    <i className="fa-brands fa-github" HtmlStyle={{color:"black"}}></i>
                    <span>GITHUB</span>
                </div>
                <div>
                    <i className="fa-brands fa-figma" HtmlStyle={{color:"purple"}}></i>
                    <span>Figma</span>
                </div>
            </div>
        </div>
        {/* <!-- projects section --> */}
        <section className="projects container" id="projects">
            <h2 className="title">
                <span>My Projects</span>
            </h2>
            <div className="grid project-container">
                <div className="project-card">
                    <div className="top">
                         <img src={Project1} alt="no-image" width="100%"/>
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
                         <img src={Project2} alt="no-image" width="100%"/>
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
                         <img src={Project3} alt="no-image" width="100%"/>
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
                         <img src={Project4} alt="no-image" width="100%"/>
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
                         <img src={Project1} alt="no-image" width="100%"/>
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
                         <img src={Project3} alt="no-image" width="100%"/>
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

        {/* <!-- about section --> */}
        <section className="about" id="about">
            <h2 className="title">
                <span>About Me</span>
            </h2>
            <div className="container flex about-content">
                <div className="flex-center myImg">
                    <img src="assets/img2.png" alt="" width="100%"/>
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
        {/* <!-- contact section --> */}
        <section className="contact container" id="contact">
            <h2 className="title">
                <span>Contact</span>
            </h2>

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

        {/* <!-- footer section --> */}
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
        <a href="#hero">
            <div className="goUp flex-center">
                <i className="fa-solid fa-angle-up"></i>
            </div> 
        </a>
    </div>
    </div>
  );
}

export default App;
