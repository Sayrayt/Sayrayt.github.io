import './Button.scss';

function Button(props) {
    const { variant, text, event } = props;
    return (
        <button type="button" className={`Button Button__${variant}`} onClick={event}>
            {text}
        </button>
    )
}

export default Button;