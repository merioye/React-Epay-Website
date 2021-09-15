import React from 'react';
import workapi from '../../API/workApi';
import './howitworks.css';

const HowItWorks = ()=>{
    return(
        <>
            <div className='how-it-works'>
                <div className='works'>
                    <h1>How does it Work</h1>
                    <div className='work-items-wrapper'>
                        {
                            workapi.map((item, ind)=>{
                            return(
                                <div className='work-item' key={ind}>
                                    <div className='work-icon'><i className={item.logo}></i></div>
                                    <h2>{item.title}</h2>
                                    <p>{item.info}</p>
                                </div>
                            )
                            })
                            
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default HowItWorks;