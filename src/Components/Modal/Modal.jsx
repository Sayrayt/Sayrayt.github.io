import './Modal.scss';
import exitLight from '../../data/img/ComponentsImg/exitLight.png';
import exitDark from '../../data/img/ComponentsImg/exitDark.png';
import { MyContext } from '../../Context/Context';

import { useEffect, useContext } from 'react';

function Modal(props) {
    const { isOpen, onClose, component } = props;
    const { lightTheme } = useContext(MyContext);

    useEffect(() => {
        isOpen ? document.body.classList.add('overflow-hidden') :
            document.body.classList.remove('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden');

        };
    }, [isOpen]);

    return (isOpen ? (
        <div className={'Modal'} >
            <div className={`ModalContent `}>
                {lightTheme ?
                    <img className='ExitLight' src={exitLight} alt='Exit' onClick={onClose} /> :
                    <img className='ExitDark' src={exitDark} alt='Exit' onClick={onClose} />
                }
                {component}
            </div>
        </div>
    ) : null
    )
}

export default Modal;