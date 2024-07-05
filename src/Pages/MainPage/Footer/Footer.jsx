import './Footer.scss'

function Footer() {
    const links = [{ text: 'FAQ', link: 'https://tonkeeper.helpscoutdocs.com/' }, { text: 'Support', link: 'https://t.me/help_tonkeeper_bot' }];
    return (
        <div className="FooterWrapper">
            <div className='FooterContent'>
                <div className='FooterLinks'>
                    {links.map((item, index) => <span key={index}><a href={item.link} > {item.text} </a></span>)}
                </div>
                <div className='FooterText'>
                    <span>© 2024 Tonkeeper battery</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;