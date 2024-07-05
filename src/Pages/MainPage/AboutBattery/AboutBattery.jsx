import './AboutBattery.scss';
import fullBattery from '../../../data/img/MainPage/AboutBattery/Battery.png';
import Versality from './Versatility/Versality';
import AboutCharges from './AboutCharges/AboutCharges';
import Agitation from '../Agitation/Agitation';
import Footer from '../Footer/Footer';
import arrowHome from '../../../data/img/MainPage/AboutBattery/ArrowHome.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    disable: 'mobile',
    easing: 'ease',
    duration: 1200,
    delay: 100,
    throttleDelay: 99,
    once: false,
})

function AboutBattery() {
    return (
        <>
            <div className="AboutBatteryWrapper">
                <div className='AboutBatteryContentWrapper'>
                    <div className='AboutBatteryContent'>
                        <div data-aos="fade-right" className='TextAboutBattery'>
                            <span>THE POWER OF</span>
                            <h1 >BATTERY</h1>
                            <span>With the battery, you can pay with tokens (stablecoins, NFTs, etc.) <br />
                                without having to purchase tones from exchangers to pay blockchain fees. <br />
                                <span>The battery pays the commission for you automatically.</span>
                            </span>
                        </div>
                        <div data-aos="fade-left" className='FullBattery'>
                            <img src={fullBattery} alt='Full Battery'></img>
                        </div>
                    </div>
                    <div className='HomeArrowWrapper'>
                        <a href='#HeaderWrapper'>
                            <img src={arrowHome} alt='Home'></img>
                        </a>
                    </div>
                    <Versality />
                    <AboutCharges />
                    <Agitation />
                    <Footer />
                </div>
            </div>

        </>
    )
}

export default AboutBattery