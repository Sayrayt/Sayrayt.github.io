import './BatteryTagline.scss'

function BatteryTagline() {
    return (
        <div className='BatteryTaglineWrapper'>
            <div className='AboutBatteryContent'>
                <div className='LogoWrapper'>
                    <svg className='Logo' xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="none" viewBox="0 0 97 96">
                        <path fill="#45AEF5" d="M48.5 45.333 91.167 26 48.5 93.333z" opacity="0.85"></path>
                        <path fill="#45AEF5" d="M48.5 45.333 5.833 26 48.5 93.333z" opacity="0.5"></path>
                        <path fill="#45AEF5" d="M48.5 45.333 5.833 26 48.5 6.667 91.167 26z"></path>
                    </svg>
                </div>
                <div className='MainText'>
                    <h1>Tonkeeper battery</h1>
                    <span>don't worry about paying for gas</span>
                </div>
            </div>

        </div>
    )
}

export default BatteryTagline