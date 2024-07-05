import './Agitation.scss'

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

function Agitation() {
    return (
        <>
            <div data-aos="zoom-out-up" className="AgitationWrapper">
                <div className='AgitationContent'>
                    <div className='AgitationTagline'>
                        <h1>Start using the battery</h1>
                    </div>
                    <div className='AgitationText'>
                        <span>Save time, money and nerves</span>
                    </div>
                </div>
            </div>
            <div className='Delimiter'></div>
        </>

    )
}

export default Agitation;