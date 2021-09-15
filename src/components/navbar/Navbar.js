import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = ()=>{
    // State variable whose value will be either "true" or "false" to toggle the hamburger menu
    const [disp, setDisp] = useState(true);
    // Event handler that will be called on clicking on the Hamburger Icon to toggle the disp State
    const handleClick = ()=>{
        setDisp(!disp);
    }
    // Handler that will change state variable when the window is resizing
    window.addEventListener('resize', ()=>{
        if(window.innerWidth>=900){
            setDisp(true);
        }else if(window.innerWidth<=900){
            setDisp(false);
        }
    });
    window.addEventListener('load', ()=>{
        if(window.innerWidth>=900){
            setDisp(true);
        }
    });
    return(
        <>
            {/* Main Nav Jsx */}
            <nav className='navbar' style={disp & window.innerWidth<900?{marginBottom:'270px'}:{marginBottom:'0px'}}>
                <div className='logo'>
                    <h1><span>E</span>pay</h1>
                </div>

                {/* Hamburger icon jsx */}
                <div className='hamburger-icon' onClick={handleClick}>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                </div>

                {/* Menu Items Jsx */}
                <div className='menu-items-wrapper' style={disp?{display: 'block'}:{display: 'none'}}>
                    <ul>
                        <li className='item'><NavLink className='link' exact activeClassName='activeLink' to='/'>Home</NavLink></li>
                        <li className='item'><NavLink className='link' exact activeClassName='activeLink' to='/services'>Services</NavLink></li>
                        <li className='item'><NavLink className='link' exact activeClassName='activeLink' to='/about'>About</NavLink></li>
                        <li className='item'><NavLink className='link' exact activeClassName='activeLink' to='/contact'>Contact</NavLink></li>
                        <div className='btns-wrapper'>
                            <li><button className='sign-up-btn'>Sign Up</button></li>
                            <li><button className='sign-in-btn'>Log In</button></li>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;