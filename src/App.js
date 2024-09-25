import './App.css';
import { NavBar } from "./components/NavBar.js";
import { HeroAndBanner } from "./components/HeroAndBanner.js";
import { Skills } from "./components/Skills.js";
import { Projects } from "./components/Projects.js";
import { AboutMe } from "./components/AboutMe.js";
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';
import { Outlet, Route, Routes } from 'react-router-dom';
import { LayOut } from './components/LayOut.js';

function App() {
  return (
    <div>
      
        <Routes>
          <Route path='/' element={<LayOut/>}>
          <Route path="/" element={<HeroAndBanner/>}/>
          <Route path="Skills" element={<Skills/>}/>
          <Route path="Projects" element={<Projects/>}/>
          <Route path="About" element={<AboutMe/>}/>
          <Route path="Contact" element={<Contact/>}/>
          </Route>
        </Routes>
    </div>
    
  );
}

export default App;
