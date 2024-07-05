import './Services.scss'
import LinkButton from '../../../Components/LinkButton/LinkButton'
import arrowToDown from '../../../data/img/DefaultPage/ArrowToDown.png'
function Services() {

    const services = [
        { text: 'Tonkeeper IOS', link: 'https://apps.apple.com/us/app/tonkeeper-ton-wallet/id1587742107' },
        { text: 'Tonkeeper Android', link: 'https://play.google.com/store/apps/details?id=com.ton_keeper' },
        { text: 'Tonkeeper Pro', link: 'https://tonkeeper.com/pro' },
        { text: 'Tonkeeper in Telegram', link: 'https://t.me/tonkeeper' }
    ]
    return (
        <div className="ServicesWrapper">
            <div className="ServicesContent">
                <span>Try it now</span>
                <div className='ServicesButtonsWrapper'>
                    {services.map((service, index) => <LinkButton key={index} text={service.text} link={service.link} />)}
                </div>

            </div>
            <div id='DelimiterWrapper' className='DelimiterWrapper'>
                <img className='ArrowToDown' src={arrowToDown} alt='Arrow to down'></img>
                {/* <div className='Delimiter'></div> */}
            </div>


        </div>
    )
}

export default Services