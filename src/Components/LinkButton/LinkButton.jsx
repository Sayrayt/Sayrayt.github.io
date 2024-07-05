import './LinkButton.scss'

function LinkButton(props) {
    const { text, variant, link } = props;
    return (
        <a className={`LinkButton Button__${variant}`} href={link}>{text}</a>
    )
}

export default LinkButton;