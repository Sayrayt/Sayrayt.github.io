import React, { useState, useEffect } from 'react';
import './AboutCharges.scss';
import fullChargesBattery from '../../../../data/img/MainPage/AboutCharges/1.png';
import chargesBattery1 from '../../../../data/img/MainPage/AboutCharges/2.png';
import chargesBattery2 from '../../../../data/img/MainPage/AboutCharges/3.png';
import chargesBattery3 from '../../../../data/img/MainPage/AboutCharges/4.png';

import Button from '../../../../Components/Button/Button';
import Modal from '../../../../Components/Modal/Modal';
import AboutChargesLearnMore from './AboutChargesLearnMore/AboutChargesLearnMore.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    disable: 'mobile',
    easing: 'ease',
    duration: 1200,
    delay: 100,
    throttleDelay: 99,
    once: false,
});

const images = [fullChargesBattery, chargesBattery1, chargesBattery2, chargesBattery3];

function AboutCharges() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div id='AboutCharges' className="AboutChargesWrapper">
                <div className="AboutChargesContentWrapper">
                    <div data-aos="fade-up" className='AboutChargesTagline'>
                        <h1>About charges</h1>
                    </div>
                    <div className='AboutChargesContent'>
                        <div data-aos="fade-up" className='TextAboutCharges'>
                            <span>BATTERY IS MEASURED IN<br />
                                <h1>CHARGES</h1> Each charge covers the fee for a simple TON transfer transaction. <br />
                                More complex shipments can deliver 5, 10 or more charges.</span>
                            <div className='LearnMore'>
                                <Button text='Learn more' event={() => setIsVisible(true)} />
                            </div>
                        </div>
                        <div data-aos="fade-up" className='BatteryImagesWrapper'>
                            <div className='BatteryImages'>
                                <img
                                    className={`batteryImage${currentImageIndex}`}
                                    src={images[currentImageIndex]}
                                    alt={`Battery charge ${currentImageIndex}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isVisible ?
                <Modal
                    isOpen={isVisible}
                    onClose={() => setIsVisible(false)}
                    component={<AboutChargesLearnMore />}
                />
                : null
            }
        </>
    );
}

export default AboutCharges;
