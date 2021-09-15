import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './error.css';
import {NavLink} from 'react-router-dom';

const Error = ()=>{
    return(
        <>
            <Navbar/>
            <div className='error-section'>
                <div className='error-wrapper'>
                    <h1>WE ARE SORRY, PAGE NOT FOUND!</h1>
                    <p>THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME CHANGED OR IS TEMPORARILY UNAVAILABLE.</p>
                    <NavLink to='/'><button>BACK TO HOMEPAGE</button></NavLink>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Error;