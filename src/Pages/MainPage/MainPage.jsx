import './MainPage.scss';
import AboutBattery from './AboutBattery/AboutBattery';
import HowItWorks from './HowItWorks/HowItWorks';
import React from 'react';

const MainPage = (() => {
    return (
        <main className="MainPage" id='MainPage'>
            <div className='MainPageContent'>
                <HowItWorks />
                <AboutBattery />     
            </div>
        </main>
    );
});

export default MainPage;
