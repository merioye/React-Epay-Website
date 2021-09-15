import React from 'react';
import Navbar from '../components/navbar/Navbar';
import MainHero from '../components/mainHero/MainHero';
import HowItWorks from '../components/howItWorks/HowItWorks';
import Common from '../components/common/Common';
import howToUseApp from '../API/howToUse';
import WhatWeOffer from '../components/whatWeOffer/WhatWeOffer';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';


const Home = ()=>{
    return(
        <>
            <Navbar/>
            <MainHero/>
            <HowItWorks/>
            <Common source='images/hero3.jpg' data={howToUseApp} features='-- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY' name='How to use the App?' bool={true}/>
            <Common source='images/callcenter.jpg' data={howToUseApp} features='-- SUPPORT IN ANY LANGUAGES' name='World class support is available 24/7' bool={false}/>
            <WhatWeOffer/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default Home;