import React from 'react';
import './footer.css';

const Footer = ()=>{

    const commonItem = (props)=>{
        return(
            <div className='footer-item'>
                <h2>{props}</h2>
                <p>Item1</p>
                <p>Item2</p>
                <p>Item3</p>
                <p>Item4</p>
            </div>
        );
    }
    return(
        <>
            <footer className='footer-section'>
                <div className='footer'>
                    {commonItem('Company')}
                    {commonItem('Support')}
                    {commonItem('Services')}
                    <div className='social'>
                        <h2>Follow Us</h2>
                        <div className='social-icons'>
                            <i className="fab fa-facebook-f social-icon"></i>
                            <i className="fab fa-instagram social-icon"></i>
                            <i className="fab fa-youtube social-icon"></i>
                            <i className="fab fa-twitter social-icon"></i>
                        </div>
                    </div>
                </div>
                <p className='copyright'>Copyright @ 2021 Epay. All rights reserved.</p>
            </footer>
        </>
    );
}

export default Footer;