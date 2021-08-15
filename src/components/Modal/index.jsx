import React, { useEffect } from 'react';
import Portal from './Portal';

import { Overlay, Dialog } from './styles';

const Modal = ({children, Open, onClose}) => {
    useEffect(() => {
        function onEsc(e) {
            if (e.keyCode === 27) onClose();
        }
        window.addEventListener('keydown', onEsc);

        return () => {
            window.removeEventListener('keydown',onEsc);
        };
    } ,[onClose]);    


    if (!Open) return null;

    function onOverlayClick(){
        onClose();
    };
    function onDialogClick(e) {
        e.stopPropagation();
    };
    return (
    <Portal>
        <Overlay>
            <Dialog>{ children }</Dialog>
        </Overlay>
    </Portal>
    );
};
export default Modal;