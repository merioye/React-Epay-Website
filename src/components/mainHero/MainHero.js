import React from 'react';
import './mainHero.css';

const MainHero = ()=>{
    return(
        <>
            <div className='main-hero-section'>
                <div className='main-hero-text'>
                    <h1>Online Payment Made Easy For You.</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, quia quis? Ipsa     officia ad deserunt voluptate quam, nisi odio officiis tempora recusandae voluptate quam, nisi odio officiis tempora recusandae</p>
                    <h2>Get early access for you</h2>
                    <div>
                        <input type='text' placeholder='Enter Your Email'/>
                        <button>Get it Now!</button>
                    </div>
                </div>
                <div className='main-hero-image'>
                    <img src='images/mainHero.png' alt=''/>
                </div>
            </div>
        </>
    );
}

export default MainHero;