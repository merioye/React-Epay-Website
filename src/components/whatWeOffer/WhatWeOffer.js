import React from 'react';
import './whatWeOffer.css';
import serviceapi from '../../API/serviceApi';

const WhatWeOffer = ()=>{
    
    return(
        <> 
            <div className='offer-section'>
                <h1>How to send money</h1>
                <div className='offers-wrapper'>
                    {
                        serviceapi.map((item, ind)=>{
                            return(
                                <div className='offer' key={ind}>
                                    <div className='offer-icon'>
                                        <i className={item.logo}></i>
                                    </div>
                                    <h4>{item.title}</h4>
                                    <p>{item.info}</p>
                                </div>
                            );
                        })
                    }
                    
                </div>
            </div>
        </>
    );
}

export default WhatWeOffer;