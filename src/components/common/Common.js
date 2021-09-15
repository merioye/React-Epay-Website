import React from 'react';
import './common.css';

const Common = (props)=>{
    return(
        <>
            <div className='common-section'>
                <div className='common-wrapper'>
                    <div className='common-image' style={props.bool?{order:1}:{order:2}}>
                        <img src={props.source} alt=''/>
                    </div>
                    <div className='common-text' style={props.bool?{order:2}:{order:1}}>
                        <h4>{props.features}</h4>
                        <h2>{props.name}</h2>
                        {
                            props.data.map((item, ind)=>{
                                return(
                                    <div className='feature-wrapper' key={ind}>
                                        <div className='feature-id-wrapper'>
                                            <span>{item.id}</span>
                                        </div>
                                        <div className='feature-info-wrapper'>
                                            <h4>{item.title}</h4>
                                                <p>{item.info}</p>
                                        </div>
                                    </div>
                                );
                                
                            })
                        }
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Common;