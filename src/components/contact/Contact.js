import React, { useState } from 'react';
import { Validate } from './Validate';
import './contact.css';

const Contact = ()=>{
    const [val, setVal] = useState({fname:'',lname:'',number:'', email:'',address:'',message:''});
    const valid = Validate(val);
    const handleChange = (e)=>{
        setVal({...val,[e.target.name]:e.target.value});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(valid);
        if(valid.fname & valid.lname & valid.number & valid.email & valid.address & valid.message){
            alert(`Your name is ${val.fname} ${val.lname}. Your Phone no is ${val.number}. Your Email is ${val.email}. Your address is ${val.address}. Your message is ${val.message}`);
            setVal({fname:'',lname:'',number:'', email:'',address:'',message:''});
        }else{
            alert("Sorry failed to submit data, please fill the data correctly");
        }
    }

    return(
        <>
            <div className='contact-section'>
                <div className='contact-wrapper'>
                    <div className='contact-text-wrapper'>
                        <h2>Connect With Our Sales Team.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eaque alias similique.</p>
                        <img src='images/hero1.jpg' alt=''></img>
                    </div>
                    <div className='contact-form-wrapper'>
                        <form className='contact-form' onSubmit={handleSubmit}>
                            <div className='half-input-div'>
                                <input className='half-input' type='text' placeholder='First Name' value={val.fname} onChange={handleChange} name='fname'/>
                                <input className='half-input' type='text' placeholder='Last Name' value={val.lname} onChange={handleChange} name='lname'/>
                            </div>
                            <div className='half-input-div'>
                                <input className='half-input' type='number' placeholder='Phone Number' value={val.number} onChange={handleChange} name='number'/>
                                <input className='half-input' type='email' placeholder='Your Email' value={val.email} onChange={handleChange} name='email'/>
                            </div>
                            <div>
                                <input className='full-input' type='text' placeholder='Add Address' value={val.address} onChange={handleChange} name='address'/>
                            </div>
                            <div>
                                <input className='full-input' type='text' placeholder='Enter Your Message' value={val.message} onChange={handleChange} name='message'/>
                            </div>
                            <div>
                                <input type='checkbox'/>I agree that the thapatechnicalpay may contact me at the email address or phone number above
                            </div>
                            <div>
                                <input className='full-input' type='submit'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;