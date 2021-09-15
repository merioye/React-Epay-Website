import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Common from '../components/common/Common';
import howToUseApp from '../API/howToUse';
import Footer from '../components/footer/Footer';


const AboutUs = ()=>{
    return(
        <>
            <Navbar/>
            <Common source='images/hero3.jpg' data={howToUseApp} features='-- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY' name='How to use the App?' bool={true}/>
            <Common source='images/callcenter.jpg' data={howToUseApp} features='-- SUPPORT IN ANY LANGUAGES' name='World class support is available 24/7' bool={false}/>
            <Footer/>
        </>
    );
}

export default AboutUs;