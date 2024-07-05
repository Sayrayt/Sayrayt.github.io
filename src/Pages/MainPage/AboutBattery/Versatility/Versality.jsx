import './Versality.scss';
import wallet from '../../../../data/img/MainPage/Versality/Wallet.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Button from '../../../../Components/Button/Button';
import Modal from '../../../../Components/Modal/Modal';
import VersalityLearnMore from './VersalityLearnMore/VersalityLearnMore';

import { useState } from 'react';

AOS.init({
    disable: 'mobile',
    easing: 'ease',
    duration: 1200,
    delay: 100,
    throttleDelay: 99,
    once: false,
})

function Versality() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <div className="VersalityWrapper">
                <div className="VersalityContent">
                    <div data-aos="fade-up" className='TextAboutVersality'>
                        <span>THE POWER OF</span>
                        <h1>VERSALITY</h1>
                        <span>You can charge the battery using the card using <br />
                            built-in payments on iOS or using tones or stablecoins
                        </span>
                        <div className='LearnMore'>
                            <Button text='Learn more' event={() => setIsVisible(true)} />
                        </div>
                    </div>
                    <div data-aos="fade-up" className='Wallet'>
                        <img src={wallet} alt='Wallet'></img>
                    </div>
                </div>
            </div>
            {isVisible ?
                <Modal
                    isOpen={isVisible}
                    onClose={() => setIsVisible(false)}
                    component={<VersalityLearnMore />}
                />
                : null
            }
        </>

    )
}

export default Versality;