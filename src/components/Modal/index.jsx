import React from 'react';
import Portal from './Portal';

import { Overlay, Dialog } from './styles';

const Modal = ({children, Open, onClose}) => {
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