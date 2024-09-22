import './App.css';
import { NavBar } from "./components/NavBar.js";
import { HeroAndBanner } from "./components/HeroAndBanner.js";
import { Skills } from "./components/Skills.js";
import { Projects } from "./components/Projects.js";
import { AboutMe } from "./components/AboutMe.js";
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';

function App() {
  return (
    <div>
      {/* <!-- dark mode tooggler --> */}
    <input type="checkbox" id="toggle"/>
    <div className="wrapper">
    <label for="toggle"> <i className="fa-solid fa-circle-half-stroke"></i></label>

        {/* <!-- navbar --> */}
        <NavBar/>

        {/* <!-- hero section --> */}
        {/* <!-- banner section --> */}
        <HeroAndBanner/>

        {/* <!-- skills section --> */}
        <Skills/>

        {/* <!-- projects section --> */}
        <Projects/>

        {/* <!-- about section --> */}
        <AboutMe/>
        
        {/* <!-- contact section --> */}
        <Contact/>

        {/* <!-- footer section --> */}
        <Footer/>
        
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
