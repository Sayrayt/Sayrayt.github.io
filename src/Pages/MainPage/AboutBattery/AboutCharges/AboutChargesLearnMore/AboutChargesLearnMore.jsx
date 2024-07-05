import step1 from '../../../../../data/img/MainPage/AboutCharges/AboutChargesLearnMore/scr1.png';
import step2 from '../../../../../data/img/MainPage/AboutCharges/AboutChargesLearnMore/scr2.png';
import step3 from '../../../../../data/img/MainPage/AboutCharges/AboutChargesLearnMore/scr3.png';
import './AboutChargesLearnMore.scss';

function AboutChargesLearnMore() {
    return (
        <div className="AboutChargesLearnMoreWrapper">
            <div className="AboutChargesLearnMoreContent">
                <div className='TextAboutSteps'>
                    <h1>Recharge steps</h1>
                </div>
                <div className='StepsWrapper'>
                    <div className='Step1Wrapper'>
                        <h2>Step 1</h2>
                        <div className='Step1Content'>
                            <img src={step1} alt='Step 1'></img>
                            <span> In the settings section, select the battery tab</span></div>
                    </div>
                    <div className='Step2Wrapper'>
                        <h2>Step 2</h2>
                        <div className='Step2Content'>
                            <img src={step2} alt='Step 2'></img>
                            <span> Select the payment method you are interested in</span>
                        </div>
                    </div>
                    <div className='Step3Wrapper'>
                        <h2>Step 3</h2>
                        <div className='Step3Content'>
                            <img src={step3} alt='Step 3'></img>
                            <span> Pay and enjoy life</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutChargesLearnMore;