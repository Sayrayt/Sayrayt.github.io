import './Header.scss';
import lightThemeImg from '../../../data/img/DefaultPage/Header/LightTheme.png';
import darkThemeImg from '../../../data/img/DefaultPage/Header/DarkTheme.png';
import { useContext } from 'react';
import { MyContext } from '../../../Context/Context';

function Header() {
    const { lightTheme, setLightTheme } = useContext(MyContext);
    !lightTheme ? document.body.classList.add('darkTheme') : document.body.classList.remove('darkTheme');

    const navItems = [{ text: 'About battery', link: '#DelimiterWrapper' }, { text: 'About charges', link: '#AboutCharges' }];
    return (
        <header id='HeaderWrapper' className="HeaderWrapper">
            <div className="HeaderContent">
                <nav className='NavigationWrapper'>
                    {navItems.map((item, index) => <span key={index}><a href={item.link} > {item.text} </a></span>)}
                </nav>
                <div className='ChangeThemeWrapper'>
                    {lightTheme ?
                        <button onClick={() => setLightTheme(!lightTheme)}>
                            <img src={lightThemeImg} alt='Light theme'></img>
                        </button> :
                        <button className='DarkThemeButton' onClick={() => setLightTheme(!lightTheme)}>
                            <img className='DarkThemeImg' src={darkThemeImg} alt='Dark theme'></img>
                        </button>
                    }


                </div>
            </div>
        </header>
    )
}

export default Header;