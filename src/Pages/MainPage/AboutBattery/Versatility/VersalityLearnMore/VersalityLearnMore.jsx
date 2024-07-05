import './VersalityLearnMore.scss';
import not from '../../../../../data/img/MainPage/Versality/Carousel/Not.jpg';
import ton from '../../../../../data/img/MainPage/Versality/Carousel/Ton.png';
import usdt from '../../../../../data/img/MainPage/Versality/Carousel/USDT.png';

import Carousel from 'react-bootstrap/Carousel';

function VersalityLearnMore() {
    return (
        <div className="VersalityLearnMoreWrapper">
            <div className="VersalityLearnMoreContent">
                <div className='TextWrapper'>
                    <h1>Charge the <span>BATTERY</span></h1>
                    <span>Send a few dollars in stablecoins or tones to the special address
                        <a href='https://tonviewer.com/battery.ton'> battery.ton</a> -
                        the battery will be charged for your wallet.</span>
                </div>
                <div className='SupportedСoinsWrapper'>
                    <div className='TextAboutSupportedСoins'>
                        <h1>Supported tokens</h1>
                    </div>
                    <div className='CarouselWrapper'>
                        <div className='Carousel'>
                            <Carousel data-bs-theme="light" className=''>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={ton}
                                        alt="TON"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={usdt}
                                        alt="USDT"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={not}
                                        alt="NOT"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default VersalityLearnMore;