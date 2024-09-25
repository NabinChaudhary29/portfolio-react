import React from 'react'
import { Footer } from './Footer'
import { NavBar } from './NavBar'
import { Outlet } from 'react-router-dom'
export const LayOut = () => {
  return (
    <>

    <input type="checkbox" id="toggle"/>
    <div className="wrapper">
    <label for="toggle"> <i className="fa-solid fa-circle-half-stroke"></i></label>
    <NavBar/>

    <Outlet/>
    <Footer/>
    <a href="#hero">
            <div className="goUp flex-center">
                <i className="fa-solid fa-angle-up"></i>
            </div> 
        </a>
    </div>
        
    </>
  )
}
