import './HowItWorks.scss'

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

function HowItWorks() {
    return (
        <div data-aos="fade-up" id='HowItWorksWrapper' className="HowItWorksWrapper">
            <div className="HowItWorksContent">
                <h1>How it works</h1>
            </div>
        </div>
    )
}

export default HowItWorks