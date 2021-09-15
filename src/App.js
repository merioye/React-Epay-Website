import React from 'react';
import Home from './pages/Home';
import OurServices from './pages/OurServices';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ErrorPage from './pages/ErrorPage';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

const App = ()=>{
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/services' component={OurServices}/>
                    <Route path='/about' component={AboutUs}/>
                    <Route path='/contact' component={ContactUs}/>
                    <Route component={ErrorPage}/>
                </Switch>
            </BrowserRouter>
            
        </>
    );
}

export default App;